export const getElement = (selector) => {
  return document.body.querySelector(selector);
};

export const getPosition = (element) => {
  return element.getBoundingClientRect();
};

export const getComputedTranslateXY = (obj) => {
	const transArr = [];
    if (!window.getComputedStyle) {
      return;
    }
    const style = getComputedStyle(obj);
    const transform = style.transform
      || style.webkitTransform
      || style.mozTransform;
    let matrix = transform.match(/^matrix3d\((.+)\)$/);

    if (matrix) return parseFloat(matrix[1].split(', ')[13]);
    matrix = transform.match(/^matrix\((.+)\)$/);
    matrix ? transArr.push(parseFloat(matrix[1].split(', ')[4])) : 0;
    matrix ? transArr.push(parseFloat(matrix[1].split(', ')[5])) : 0;
    return transArr;
};

export const collisonDetect = (boxA, boxB, depthX = 0, depthY = 0) => {
  const collisionLeft = boxA.x + boxA.width > boxB.x + boxB.width * depthX;
  const collisionRight = boxA.x < boxB.x + boxB.width;
  const collisionTop = boxA.y + boxA.height > boxB.y + boxB.height * depthY;
  const collisionBottom = boxA.y < boxB.y + boxB.height;
  return collisionLeft && collisionRight && collisionTop && collisionBottom;
};
