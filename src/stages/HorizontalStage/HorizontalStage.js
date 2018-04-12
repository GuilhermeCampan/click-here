import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../../common';
import './HorizontalStage.css';

class HorizontalStage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.nextStage();
  }

  render() {
    return (
      <div className="horizontal-travelling-wrapper">
        <ClickHere handleClick={this.handleClick} />
      </div>
    );
  }
}

HorizontalStage.propTypes = {
  nextStage: PropTypes.func
};

export default HorizontalStage;
