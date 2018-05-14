import React, { Component } from "react";

import Header from "./Header";
import StudentCard from "./StudentCard";
import { compare, compareReverse, compareMarks, compareMarksReverse, calculateTotalMarks } from "../helpers.js";

class DashBoard extends Component {
  state = {
    searchTerm: "",
    sortByName: false,
    sortByTotalMarks: false
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  sortByName = () => {
    if (!this.state.sortByName) {
      this.props.students.sort(compare);
    } else {
      this.props.students.sort(compareReverse);
    }
    this.setState(function(prevState, props) {
      return { sortByName: !prevState.sortByName };
    });
  };

  sortByTotalMarks = () => {
    if (!this.state.sortByTotalMarks) {
      this.props.students.sort(compareMarks);
    } else {
      this.props.students.sort(compareMarksReverse);
    }
    this.setState(function(prevState, props) {
      return { sortByTotalMarks: !prevState.sortByTotalMarks };
    });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="dashboard">
        <Header
          showSearch
          searchTerm={searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          sortByName={this.sortByName}
          sortByTotalMarks={this.sortByTotalMarks}
        />
        {/* <StudentCard student={this.state.students[0]} /> */}
        <div>
          {this.props.students
            .filter(student => `${student.name}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
            .map(student => (
              <StudentCard key={student.rollNo} student={student} totalMarks={calculateTotalMarks(student.marks)} />
            ))}
        </div>
      </div>
    );
  }
}

export default DashBoard;
