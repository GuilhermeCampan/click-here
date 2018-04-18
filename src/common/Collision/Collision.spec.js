import { expect } from 'chai';
import * as Collision from './Collision';

describe('Collision', () => {
  // @TODO improve the UT
  it('should detect colosion', () => {
    const boxA = {x: 10, y: 10, width: 10, height: 10};
    const boxB = {x: 10, y: 10, width: 10, height: 10};
    const colissionResult = Collision.collisonDetect(boxA, boxB);
    expect(colissionResult).equal(true);
  });

  it('should not detect colosion', () => {
    const boxA = {x: 10, y: 10, width: 10, height: 10};
    const boxB = {x: 30, y: 30, width: 10, height: 10};
    const colissionResult = Collision.collisonDetect(boxA, boxB);
    expect(colissionResult).equal(false);
  });

});
