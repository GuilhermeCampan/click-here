import React from 'react';
import PropTypes from 'prop-types';
import './MobileBackgroundStage.css';

class MobileBackgroundStage extends React.Component {
  constructor(props) {
    super(props);
    this.tick = null;
    this.state = {
      overlaps: false
    };
  }

  componentDidMount() {
    this.tick = setInterval(() => this.updateOverLaps(), 100);
  }

  updateOverLaps = () => {
    this.setState({
      overlaps: this.isOverlaps()
    });
  };

  isOverlaps = () => {
    const boxFixed = document.body
      .querySelector('.box-fixed')
      .getBoundingClientRect();

    const boxMobile = document.body
      .querySelector('.box-mobile')
      .getBoundingClientRect();

    if (boxMobile.x + boxMobile.width > boxFixed.x + boxFixed.width/2
      && boxMobile.x < boxFixed.x + boxFixed.width
    ) {
      return true;
    }
    return false;
  };

  handleClick = () => {
    if (this.state.overlaps) {
      this.props.nextStage();
    }
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    const boxMobileClass = this.state.overlaps ? 'box-mobile box-mobile--overlaps' : 'box-mobile';
    return (
      <div className='box-wrapper'>
        <div className={boxMobileClass}/>
        <div onClick={this.handleClick} className='box-mobile-cliclable'/>
        <div className='box-fixed'>
          Click Here!
        </div>
      </div>
    );
  }
}

MobileBackgroundStage.propTypes = {
  nextStage: PropTypes.func
};

export default MobileBackgroundStage;