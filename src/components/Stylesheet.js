import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
  const style = props.name ? "primary" : "";
  return <div className={`${style} font-xl`}>style sheet</div>;
}

export default Stylesheet;
