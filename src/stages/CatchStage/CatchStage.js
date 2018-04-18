import React from 'react';
import PropTypes from 'prop-types';
import {
  Tick,
  ClickHere,
  Collision
} from '../../common';
import './CatchStage.css';

// @TODO refactor this component using canvas
class CatchStage extends React.Component {
  constructor(props) {
    super(props);
    this.tick = null;
    this.state = {
      overlaping: false,
      handClosed: false,
      caughtCoin: false
    };
    this.canvas = null;
    this.coin = {x: 130, y: 10, width: 10, height: 10};
    this.hand = {x: 120, y: 120, width: 30, height: 20};
  }

  componentDidMount() {
    // this.setCanvas();
    // this.draw();
    this.startTick();
  }

  componentWillUnmount() {
    this.tick.stop();
  }

  setCanvas() {
    this.canvas = document.querySelector('canvas').getContext('2d');
  }

  draw = (time) => {
    if (!this.canvas) {
      return;
    }
    const ctx = this.canvas;
    ctx.fillStyle = 'purple';
    ctx.fillRect(
      this.coin.x, this.coin.y,
      this.coin.width, this.coin.height
    );
    ctx.moveTo(100,100);

    ctx.fillStyle = 'red';
    ctx.fillRect(
      this.hand.x, this.hand.y,
      this.hand.width, this.hand.height
    );
    ctx.save();
  }

  startTick() {
    this.setCanvas();
    this.tick = new Tick(this.draw);
    this.tick.start();
  }

  // setOverlaping = () => {
  //   const stickPositon = Collision.getPosition(this.getCoin());
  //   const handPosition = Collision.getPosition(this.getHand());
  //   this.setState({
  //     overlaping: Collision.collisonDetect(stickPositon, handPosition)
  //   });
  // };

  // getCoin() {
  //   return Collision.getElement('.catch-stage__game__coin');
  // }

  // getHand() {
  //   return Collision.getElement('.catch-stage__game__hand');
  // }

  // stopCoinAnimation() {
  //   const stick = this.getCoin();
  //   const [,computedY]= Collision.getComputedTranslateXY(stick);
  //   stick.style.top = computedY + 'px';
  //   stick.style.animation = 'none';
  // }

  // handleClick = () => {
  //   if (!this.state.handClosed) {
  //     this.closeHand();
  //   }
  // }

  // openHand = () => {
  //   this.setState({handClosed: false});
  // }

  // closeHand = () => {
  //   this.setState({handClosed: true});
  //   if (this.state.overlaping) {
  //     this.setState({caughtCoin: true});
  //     this.stopCoinAnimation();
  //     setTimeout(()=>this.props.nextStage(), 1000);
  //   } else {
  //     setTimeout(() => this.openHand(), 1000);
  //   }
  // }

  // getCoinClass() {
  //   return !this.state.caughtCoin
  //     ? 'catch-stage__game__coin'
  //     : 'catch-stage__game__coin catch-stage__game__coin--caught';
  // }

  // getHandClass() {
  //   return !this.state.handClosed
  //     ? 'catch-stage__game__hand'
  //     : 'catch-stage__game__hand catch-stage__game__hand--closed';
  // }

  getButtonProps() {
    return {
      handleClick: this.handleClick,
      classModifiers: {disabled: this.state.handClosed}
    };
  }

  render() {
    return (
      <div className='catch-stage'>
        <canvas className='catch-stage__canvas'>
          {/* <div className={this.getCoinClass()}/>
          <div className={this.getHandClass()}/> */}
        </canvas>
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
