import { expect } from 'chai';
import Tick from './Tick';
import sinon from 'sinon';

describe('Tick', () => {
  let tick;
  let handleTick = sinon.spy();

  beforeEach(() => {
    tick = new Tick(handleTick);
  });

  it('should intialized Tick stopped', () => {
    expect(tick.running).equal(false);
  });

  it('should start tick', () => {
    tick.start();
    expect(tick.running).equal(true);
  });

  it('should call handleTick if the timer is greater than timePerTick', () => {
    tick.running = true;
    tick.timer = 9999;
    tick.run();
    expect(handleTick.called).equal(true);
  });

  it('should reset timer if it is greater than timePerTick', () => {
    tick.running = true;
    tick.timer = 9999;
    tick.run();
    expect(tick.timer).equal(0);
  });

  afterEach(() => {
    tick.stop();
  });
});
