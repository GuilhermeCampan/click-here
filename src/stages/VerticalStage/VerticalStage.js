import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../../common';
import './VerticalStage.css';

class VerticalStage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.nextStage();
  }

  render() {
    return (
      <div className="vertical-travelling-wrapper">
        <ClickHere handleClick={this.handleClick} />
      </div>
    );
  }
}

VerticalStage.propTypes = {
  nextStage: PropTypes.func
};

export default VerticalStage;