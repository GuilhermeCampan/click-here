import React from "react";

const styles = {
  width: "150px",
  height: "60px",
  background: "#673AB7",
  color: "white",
  fontSize: "20px",
  borderRadius: "10px"
};

const ClickHere = props => {
  return (
    <button style={styles} onClick={props.handleClick}>
      Click Here!
    </button>
  );
};

export default ClickHere;
