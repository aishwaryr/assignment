import React from "react";
import { Link } from "react-router-dom";

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
            <p className="card-text">Total Marks: {props.totalMarks}</p>
          </div>
        </div>
      </Link>
    );
  } else {
    return null;
  }
};

export default StudentCard;
