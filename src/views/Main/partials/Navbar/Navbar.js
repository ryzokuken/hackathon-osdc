import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router';

export default class NavbarComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/home">Alexandria</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            {
              !!this.state.profile.nickname ?
              <NavDropdown eventKey={2} title={this.state.profile.nickname} id="basic-nav-dropdown">
                <MenuItem eventKey={2.1}>Profile</MenuItem>
                <MenuItem eventKey={2.2}>Settings</MenuItem>
                <MenuItem divider />
                <LinkContainer to="/logout">
                  <MenuItem eventKey={2.3}>Logout</MenuItem>
                </LinkContainer>
              </NavDropdown> :
              <LinkContainer to="/login">
                <NavItem eventKey={2}>Login</NavItem>
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
