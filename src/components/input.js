import React from "react";

function Input({ prop }) {
  let answer;

  //if the prop is an array
  if (Array.isArray(prop))
    answer = prop.map((item) => <div key={item}>{item}</div>);
  //if the prop is value
  else if (prop) answer = <div>{prop}</div>;
  //if the prop is anything else return the date 
  else answer = <div>{new Date().toUTCString()}</div>;

  return answer;
}

export default Input;
