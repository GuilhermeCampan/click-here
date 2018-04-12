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
    const boxFixed = document.body
      .querySelector('.box-fixed')
      .getBoundingClientRect();

    const boxMobile = document.body
      .querySelector('.box-mobile')
      .getBoundingClientRect();
      
    this.setState({
      overlaps: this.isOverlaps(boxMobile, boxFixed)
    });
  };

  isOverlaps = (boxA, boxB) => {
    if (boxA.x + boxA.width > boxB.x + boxB.width/2
      && boxA.x < boxB.x + boxB.width
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
    const buttonClass = this.state.overlaps ? 'click-here-button' : 'click-here-button click-here-button--disabled';
    return (
      <div className='box-wrapper'>
        <div className="box-mobile">
          <button className={buttonClass}/>
        </div>
        <div onClick={this.handleClick} className='box-mobile-clickable'/>
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