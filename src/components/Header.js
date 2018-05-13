import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

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
    return (
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">My App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {/* <NavItem>
              <NavLink href="/signin/">Sign In</NavLink>
            </NavItem> */}
            <button className="show-inline btn btn-info" onClick={this.props.sortByName}>
              Sort by Name
            </button>
            <input
              type="text"
              className="form-control show-inline"
              placeholder="Search"
              onChange={this.props.handleSearchTermChange}
              value={this.props.searchTerm}
            />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
