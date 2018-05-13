import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import { fetchStudents } from "../api";
import DashBoard from "./DashBoard";
import Details from "./Details";

class App extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    fetchStudents().then(response => {
      console.log(response);
      const studentsArray = Object.keys(response.data).map(student => {
        return response.data[student];
      });
      this.setState({ students: studentsArray });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={props => <DashBoard students={this.state.students} {...props} />} />
            <Route
              path="/details/:id"
              component={props => {
                const selectedStudent = this.state.students.find(
                  student => parseInt(props.match.params.id) === student.rollNo
                );
                return <Details student={selectedStudent} {...props} />;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
