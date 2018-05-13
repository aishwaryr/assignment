import React from "react";

import Header from "./Header";
import { calculateTotalMarks } from "../helpers.js";

// console.log(props);
const Details = props => {
  if (props.student !== undefined) {
    return (
      <div>
        <Header />
        <div className="card show-card">
          <div className="card-body">
            <h5 className="card-title">Student Card</h5>
            <p className="card-text">Name: {props.student.name}</p>
            <p className="card-text">Class: {props.student.class}</p>
            <p className="card-text">Roll No: {props.student.rollNo}</p>
            <p className="card-text">Total Marks: {calculateTotalMarks(props.student.marks)}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Details;
