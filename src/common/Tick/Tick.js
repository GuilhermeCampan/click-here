export default class Tick {
  constructor(handleTick) {
    this.handleTick = handleTick;
    this.running = false;
  }

  run() {
    const fps = 30;
    const timePerTick = 1000/fps;
    let delta = 0;
    let now;
    let lastTime = performance.now();
    let timer = 0;
    const loop = () => {
      if (this.running){
        now = performance.now();
        delta = now - lastTime;
        timer += delta;
        lastTime = now;
      }
      if (timer >= timePerTick){
        const dt = timer/1000;
        timer = 0;
        this.handleTick(dt);
      }
      this.running && window.requestAnimationFrame(loop);
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