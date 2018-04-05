import React from "react";

const styles = {
  width: "150px",
  height: "100px",
  background: "teal",
  color: "white",
  fontSize: "20px"
};

const ClickHere = props => {
  return (
    <button style={styles} onClick={props.handleClick}>
      Click Here!
    </button>
  );
};

export default ClickHere;
