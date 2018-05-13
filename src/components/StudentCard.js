import React, { Component } from "react";
import { Link } from "react-router-dom";

function calculateTotalMarks(json) {
  const sum = Object.values(json).reduce(function(acc, val) {
    return acc + val;
  });
  return sum;
}

const StudentCard = props => {
  if (props.student !== undefined) {
    return (
      <Link to={`details/${props.student.rollNo}`}>
        <div className="card show-card">
          <div className="card-body">
            <h5 className="card-title">Student Card</h5>
            <p className="card-text">Name: {props.student.name}</p>
            <p className="card-text">Class: {props.student.class}</p>
            <p className="card-text">Roll No: {props.student.rollNo}</p>
            <p className="card-text">Total Marks: {calculateTotalMarks(props.student.marks)}</p>
          </div>
        </div>
      </Link>
    );
  } else {
    return null;
  }
};

export default StudentCard;
