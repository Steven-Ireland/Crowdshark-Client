import React from 'react';
import {Link} from 'react-router';
import {Menu, Container} from 'semantic-ui-react';
import './Nav.css';

class Nav extends React.Component {

  render () {
    return (
      <Container>
        <Menu secondary className="Nav">
          <Menu.Item as={Link} to='/'
            name="Temporaryname"/>
        </Menu>
      </Container>
    )
  }
}

export default Nav;
