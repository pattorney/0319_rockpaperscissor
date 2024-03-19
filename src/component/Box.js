import React from 'react';

const Box = (props) => {
  console.log("props:", props)
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} alt="가위 바위 보 그림" />
      <h2>{props.result}</h2>
    </div>
  );
}

export default Box;
