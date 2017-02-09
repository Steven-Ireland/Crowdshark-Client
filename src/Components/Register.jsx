import React from 'react'
import {Button, Container, Header, Form} from 'semantic-ui-react';
import axios from 'axios';
import FileReaderInput from 'react-file-reader-input';
import CrowdCard from './CrowdCard';
import {CompactPicker} from 'react-color';

import './Register.css';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Example',
      owner: 'Example Inc.',
      image: 'Qma7cna4uwsbwAGpNgzgbFBBkHNopaPHxqf5becQmXuYoM',
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
  handleImageUpload(e, files) {
    hashFile(files[0][1]).then((hash) => {
      console.log(hash);
      this.setState({image: hash});
    });
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
          <Form.Field>
            <Form.Input name="image" label="Icon" placeholder="IPFS Image Hash" type="text" action>
              <input onChange={this.handleChange.bind(this, 'image')} value={this.state.image} />
              <FileReaderInput as="binary" onChange={this.handleImageUpload.bind(this)}>
                <Button type="button">Upload</Button>
              </FileReaderInput>
            </Form.Input>
          </Form.Field>
        </Form>
        <CrowdCard name={this.state.name} owner={this.state.owner} image={'http://big:3001/img/'+this.state.image} description={this.state.description} color={this.state.color}/>
        <CompactPicker color={this.state.color} onChange={this.handleChange.bind(this, 'color')} />
      </Container>
    )
  }

  upload() {

  }
}

function hashFile(file) {
  console.log(file);
  return axios.post('http://big:3001/img', file).then((res) => res.data);
}

export default Register;
