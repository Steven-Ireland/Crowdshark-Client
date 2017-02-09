import React from 'react'
import {Container, Header, Form} from 'semantic-ui-react';
import CrowdCard from './CrowdCard';
import {CompactPicker} from 'react-color';

import './Register.css';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Example',
      owner: 'Example Inc.',
      description: 'Decentralized Example for the Distributed Age.',
      color: '#eeeeee'
    }
  }
  handleChange(attr, e) {
    var newState = {};
    if (attr === 'color') {
        newState[attr] = e.hex;
    } else {
      newState[attr] = e.target.value;
    }
    this.setState(newState);
  }
  render () {
    return (
      <Container text className="Register">
        <Header>Register a Crowdsale</Header>
        <Form>
          <Form.Input name="name" label='Project Name' placeholder="Project"
            onChange={this.handleChange.bind(this, 'name')}/>
          <Form.Input name="owner" label="Owner" placeholder="Company / Group"
            onChange={this.handleChange.bind(this, 'owner')}/>
          <Form.TextArea name="description" label="Details" placeholder="Describe your product."
            onChange={this.handleChange.bind(this, 'description')}/>
        </Form>
        <CrowdCard name={this.state.name} owner={this.state.owner} description={this.state.description} color={this.state.color}/>
        <CompactPicker color={this.state.color} onChange={this.handleChange.bind(this, 'color')} />
      </Container>
    )
  }
}

export default Register;
