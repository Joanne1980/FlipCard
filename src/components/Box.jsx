import React from "react";

export default function Box(props) {
  return (
    <div className=" w-32 h-32 bg-teal-800 m-3">
      <img src={props.src} alt="" />
      {console.log(props.src)}
    </div>
  );
}
