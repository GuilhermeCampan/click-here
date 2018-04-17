import React from 'react';
import PropTypes from 'prop-types';
import {
  Tick,
  ClickHere,
  Collision
} from '../../common';
import './CatchStage.css';

class CatchStage extends React.Component {
  constructor(props) {
    super(props);
    this.tick = null;
    this.state = {
      overlaping: false,
      handClosed: false,
      caughtCoin: false
    };
  }

  componentDidMount() {
    this.tick = new Tick(this.setOverlaping);
    this.tick.start();
  }

  componentWillUnmount() {
    this.tick.stop();
  }

  setOverlaping = () => {
    const stickPositon = Collision.getPosition(this.getCoin());
    const handPosition = Collision.getPosition(this.getHand());
    this.setState({
      overlaping: Collision.collisonDetect(stickPositon, handPosition)
    });
  };

  getCoin() {
    return Collision.getElement('.catch-stage__game__coin');
  }

  getHand() {
    return Collision.getElement('.catch-stage__game__hand');
  }

  stopCoinAnimation() {
    const stick = this.getCoin();
    const stickXY= Collision.getComputedTranslateXY(stick);
    stick.style.top = stickXY[1] + 'px';
    stick.style.animation = 'none';
  }

  handleClick = () => {
    if (!this.state.handClosed) {
      this.closeHand();
    }
  }

  openHand = () => {
    this.setState({handClosed: false});
  }

  closeHand = () => {
    this.setState({handClosed: true});
    if (this.state.overlaping) {
      this.setState({caughtCoin: true});
      this.stopCoinAnimation();
      setTimeout(()=>this.props.nextStage(),1000);
    } else {
      setTimeout(() => this.openHand(), 1000);
    }
  }

  getCoinClass() {
    return !this.state.caughtCoin
      ? 'catch-stage__game__coin'
      : 'catch-stage__game__coin catch-stage__game__coin--caught';
  }

  gethandClass() {
    return !this.state.handClosed
      ? 'catch-stage__game__hand'
      : 'catch-stage__game__hand catch-stage__game__hand--closed';
  }

  getButtonProps() {
    return {
      handleClick: this.handleClick,
      classModifiers: {disabled: this.state.handClosed}
    };
  }

  render() {
    return (
      <div className='catch-stage'>
        <div className='catch-stage__game'>
          <div className={this.getCoinClass()}/>
          <div className={this.gethandClass()}/>
        </div>
        <div className='catch-stage__game-controls'>
          <ClickHere {...this.getButtonProps()}/>
        </div>
      </div>
    );
  }
}

CatchStage.propTypes = {
  nextStage: PropTypes.func
};

export default CatchStage;
