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
      overlaping: false
    };
  }

  componentDidMount() {
    this.tick = new Tick(this.updateOverLaps);
    this.tick.start();
  }

  getStick() {
    return Collision.getElement('.catch-stage__game__stick');
  }

  getHand() {
    return Collision.getElement('.catch-stage__game__hand');
  }

  stopStick() {
    const stick = this.getStick();
    const stickXY= Collision.getComputedTranslateXY(stick);
    stick.style.top = stickXY[1] + 'px';
    stick.style.animation = 'none';
  }

  updateOverLaps = () => {
    const stickPositon = Collision.getPosition(this.getStick());
    const handPosition = Collision.getPosition(this.getHand());
    this.setState({
      overlaping: Collision.collisonDetect(stickPositon, handPosition)
    });
  };

  isOverlaping = (boxA, boxB) => {
    const verticalOvelaping =
      boxA.y + boxA.height > boxB.y && boxA.y < boxB.y + boxB.height;
    return verticalOvelaping;
  };

  handleClick = () => {
    this.stopStick();
    if (this.state.overlaping) {
      this.props.nextStage();
    }
  }

  componentWillUnmount() {
    this.tick.stop();
  }

  render() {
    return (
      <div className='catch-stage'>
        <div className='catch-stage__game'>
          <div className='catch-stage__game__stick'/>
          <div className='catch-stage__game__hand'/>
        </div>
        <div className='catch-stage__game-controls'>
          <ClickHere handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

CatchStage.propTypes = {
  nextStage: PropTypes.func
};

export default CatchStage;
