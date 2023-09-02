import React from "react";
import "./displayInfo.css";

export default function OtherInfo({ data }) {
  return (
    <div className='other-info'>
      <div className='calorie'>{Math.trunc(data.calories)} Cal</div>
      <div className='yield'>{data.yield} people</div>
      <div className='time'>{data.totalTime} mins</div>
    </div>
  );
}
