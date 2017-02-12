import React from 'react';
import {Link} from 'react-router';
import {Menu, Container} from 'semantic-ui-react';
import './Nav.css';

class Nav extends React.Component {
  render () {
    return (
      <Menu fixed="top" className="Nav" borderless>
        <Container>
          <Menu.Item as={Link} to='/about' name="About" activeClassName="active"/>
          <Menu.Item as={Link} to='/browse' name="Crowdsales" activeClassName="active"/>
          <Menu.Item as={Link} to='/register' name="Register" activeClassName="active" position="right"/>
        </Container>
      </Menu>
    )
  }
}

export default Nav;
