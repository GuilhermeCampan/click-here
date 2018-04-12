import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../../common';

class BasicStage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.nextStage();
  }

  render() {
    return (
      <div>
        <ClickHere handleClick={this.handleClick} />
      </div>
    );
  }
}

BasicStage.propTypes = {
  nextStage: PropTypes.func
};

export default BasicStage;