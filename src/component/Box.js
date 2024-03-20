import React from 'react';

const Box = (props) => {
  console.log("props:", props)
  return (
    <div className="box" style={props.boxstyle}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} alt={props.initShow} />
      <h2>{props.result}</h2>
    </div>
  );
}

export default Box;
