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
          <Nav pullRight>
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
