export default class Tick {
  constructor(handleTick) {
    this.handleTick = handleTick;
    this.running = false;
    this.fps = 30;
    this.timePerTick = 1000/this.fps;
    this.timer = 0;
    this.delta = 0;
  }

  run() {
    let currentTime;
    let lastTime = window.performance.now();
    const loop = () => {
      if (this.running){
        currentTime = window.performance.now();
        this.delta = currentTime - lastTime;
        this.timer += this.delta;
        lastTime = currentTime;
      }
      if (this.timer >= this.timePerTick){
        const dt = this.timer/1000;
        this.timer = 0;
        this.handleTick(dt);
      }
      if (this.running) {
        window.requestAnimationFrame(loop);
      }
    };
    loop();
  }

  start(){
    if (!this.running) {
      this.running = true;
      this.run();
    }
  }

  stop(){
    this.running = false;
  }
}