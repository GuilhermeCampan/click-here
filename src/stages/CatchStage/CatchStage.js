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
    this.state = {
      coinOverlaping: false,
      handClosed: false,
      caughtCoin: false
    };
    this.tick = null;
    this.sprite = null;
    this.canvas = null;
    this.frame = {x: 0, y: 0, width: 400, height: 300};
    this.coin = {x: 130, y: -64, width: 64, height: 64, speed: 10, dT: 0 };
    this.hand = {x: 130, y: 80, width: 64, height: 64};
  }

  componentDidMount() {
    this.setCanvas();
    this.setSprite();
    this.startTick();
  }

  componentWillUnmount() {
    this.tick.stop();
  }

  setCanvas() {
    this.canvas = document.querySelector('canvas').getContext('2d');
  }

  setSprite() {
    const image = new Image();
    image.src = require('../../assets/catch-stage-sprite.png');
    image.onload = () => {
      this.sprite = image;
    };
  }

  updateCanvas = (dT) => {
    if (!this.canvas || !this.sprite) {
      return;
    }
    this.cleanCanvas();
    this.updateCoinPosition(dT);
    this.drawHand();
    this.drawCoin();
    this.handleCoinCollision();
  }

  startTick() {
    this.tick = new Tick(this.updateCanvas);
    this.tick.start();
  }

  cleanCanvas() {
    this.canvas.clearRect(0, 0, this.frame.width, this.frame.height);
  }

  updateCoinPosition(dT) {
    if (this.coin.y > this.frame.height  || this.state.caughtCoin) {
      this.coin.y = -64;
      this.coin.dT = 0;
      return;
    }
    this.coin.dT += dT;
    const dY = this.coin.speed * this.coin.dT;
    this.coin.y += dY;
  }

  drawCoin() {
    this.canvas.drawImage(
      this.sprite,
      0, 0,
      64, 64,
      this.coin.x, this.coin.y,
      this.coin.width, this.coin.height
    );
  }

  drawHand() {
    const handSprite = this.state.handClosed ? [0, 64] : [64, 0];
    this.canvas.drawImage(
      this.sprite,
      ...handSprite,
      64, 64,
      this.hand.x, this.hand.y,
      this.hand.width, this.hand.height
    );
  }

  handleCoinCollision() {
    const collided = Collision.collisonDetect(this.coin, this.hand);
    if (this.state.coinCollided !== collided){
      this.setState({coinCollided: collided});
    }
  }

  handleClick = () => {
    if (!this.state.handClosed) {
      this.closeHand();
    }
  }

  closeHand = () => {
    this.setState({handClosed: true});
    if (this.state.coinCollided) {
      this.setState({caughtCoin: true});
      setTimeout(()=>this.props.nextStage(), 1000);
    } else {
      setTimeout(() => this.openHand(), 1000);
    }
  }

  openHand = () => {
    this.setState({handClosed: false});
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
        <canvas className='catch-stage__canvas'>
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
