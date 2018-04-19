import React from 'react';
import PropTypes from 'prop-types';

const mainClass = 'click-here-button';

const getClassModifer = (modifer) => {
  return modifer ? mainClass + '--' + modifer : '';
};

const getClasses = (classModifiers) => {
  let classes = ['click-here-button'];
  if (classModifiers.disabled) {
    classes.push(getClassModifer('disabled'));
  }
  return classes.join(' ');
};

const ClickHere = (props) => {
  const classesName = props.classModifiers
    ? getClasses(props.classModifiers)
    : mainClass;

  return (
    <button className={classesName} onClick={props.handleClick}>
      {props.buttonText}
    </button>
  );
};

ClickHere.propTypes = {
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
  classModifiers: PropTypes.object
};

ClickHere.defaultProps = {
  buttonText: 'Click Here!'
};

export default ClickHere;
