export const getElement = (selector) => {
  return document.body.querySelector(selector);
};

export const getPosition = (element) => {
  return element.getBoundingClientRect();
};

export const getComputedTranslateXY = (obj) => {
	const transArr = [];
    if (!window.getComputedStyle) return;
    const style = getComputedStyle(obj),
      transform = style.transform || style.webkitTransform || style.mozTransform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);    
    if (mat) return parseFloat(mat[1].split(', ')[13]);
    mat = transform.match(/^matrix\((.+)\)$/);
    mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : 0;
    mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : 0;
    return transArr;
};

export const collisonDetect = (boxA, boxB, depthX = 0, depthY = 0) => {
  const collisionLeft = boxA.x + boxA.width > boxB.x + boxB.width * depthX;
  const collisionRight = boxA.x < boxB.x + boxB.width;
  const collisionTop = boxA.y + boxA.height > boxB.y + boxB.height * depthY;
  const collisionBottom = boxA.y < boxB.y + boxB.height;
  return collisionLeft && collisionRight && collisionTop && collisionBottom;
};
