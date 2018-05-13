import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    let navbarControl;
    if (this.props.showSearch) {
      navbarControl = (
        <React.Fragment>
          <button className="show-inline btn btn-info" onClick={this.props.sortByName}>
            Sort by Name
          </button>
          <button className="show-inline btn btn-primary" onClick={this.props.sortByTotalMarks}>
            Sort by Total Marks
          </button>
          <input
            type="text"
            className="form-control show-inline"
            placeholder="Search"
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
          />
        </React.Fragment>
      );
    } else {
      navbarControl = (
        <Link className="btn btn-danger" to="/">
          Back
        </Link>
      );
    }
    return (
      <Navbar color="danger" dark expand="md">
        <NavbarBrand href="/">Student DashBoard</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navbarControl}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
