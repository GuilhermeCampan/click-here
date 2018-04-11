import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Countdown.css';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.tick = null;
    this.tickInteraval = 1000;
    this.state = {
      countdown: moment(this.props.timeToBeatGame || 0)
    };
  }

  componentWillMount() {
    this.startTick();
  }

  startTick() {
    if (this.tick){
      this.stopTick();
    }
    this.tick = setInterval(() => {
      this.updateTimer();
    }, this.tickInteraval);
  }

  updateTimer() {
    this.setState(prevState => {
      const newCountdown = prevState.countdown.subtract(this.tickInteraval);
      if (newCountdown <= 0) {
        this.handleCountdownOver();
        return {
          countdown: 0
        };
      }
      return {
        countdown: newCountdown
      };
    });
  }

  handleCountdownOver(){
    this.stopTick();
    this.props.handleCountdownOver();
  }

  getTimeFormated = () => {
    if (this.state.countdown <= 0) {
      return '00:00';
    }
    return this.state.countdown.format('mm:ss');
  }

  componentWillUnmount() {
    this.stopTick();
  }

  stopTick() {
    clearInterval(this.tick);
  }

  getClassNames() {
    const warningTime = 20000; // 20s;
    const dangerTime = 10000; // 10s;
    const currentTime = this.state.countdown;
    let classNames = ['countdown'];

    if (currentTime <= warningTime && currentTime > dangerTime) {
      classNames.push('countdown--warning');
    } else if (currentTime <= dangerTime) {
      classNames.push('countdown--danger');
    }

    return classNames.join(' ');
  }

  render() {
    return <div className={this.getClassNames()}>{this.getTimeFormated()}</div>;
  }
}

Countdown.propTypes = {
  timeToBeatGame: PropTypes.number.isRequired,
  handleCountdownOver: PropTypes.func
};

export default Countdown;