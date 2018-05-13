import React, { Component } from "react";

// import { fetchStudents } from "../api";
import Header from "./Header";
import StudentCard from "./StudentCard";

function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

class DashBoard extends Component {
  state = {
    // students: [],
    searchTerm: "",
    sortByName: false
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  sortByName = () => {
    if (!this.state.sortByName) {
      const sortedByNameStudentsArray = this.props.students.sort(compare);
      this.setState({
        students: sortedByNameStudentsArray
      });
      console.log(this.state);
    }
  };

  // componentDidMount() {
  //   fetchStudents().then(response => {
  //     console.log(response);
  //     const studentsArray = Object.keys(response.data).map(student => {
  //       return response.data[student];
  //     });
  //     this.setState({ students: studentsArray });
  //   });
  // }

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="dashboard">
        <Header
          searchTerm={searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          sortByName={this.sortByName}
        />
        {/* <StudentCard student={this.state.students[0]} /> */}
        <div>
          {this.props.students
            .filter(student => `${student.name}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
            .map(student => <StudentCard key={student.rollNo} student={student} />)}
        </div>
      </div>
    );
  }
}

export default DashBoard;
