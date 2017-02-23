import React from 'react'
import {Button, Container, Header, Grid, Form, Popup, Divider, Icon} from 'semantic-ui-react';
import axios from 'axios';
import FileReaderInput from 'react-file-reader-input';
import CrowdCard from './CrowdCard';
import Closeup from './Closeup';
import {BlockPicker} from 'react-color';
import './Register.css';

import FactoryController from '../Util/FactoryController';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Example',
      owner: 'Example Inc.',
      image: 'QmQPxrtqfU8hJXQ3sWFW1jzD7LgmJnV7jwspVkP2f4bjxb',
      video: 'QmTca4A43f4kEvzTouvYTegtp6KobixRqweV12NrvwwtFP',
      website: 'www.example.com/crowdsale',
      description: 'Decentralized Example for the Distributed Age.',
      depth: '# Example Project\n## The Example Token (50% Off)\n\nThe example token grants you access to the **Example Network**.  One EXT can be consumed to pay for 1 hour of _whatever_.  **Tokens are sold in this crowdsale at a 50% discount** compared to post-launch.\n## Example Inc\n\n*Example Inc* is a trusted group proven to deliver. We even have cool graphics. \n![Graphic](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Example 1")\n\nFeel free to use IPFS.io links with your IPFS images.',
      color: '#6d7ad1',
      benefactor: '0x0',
      quantity: 123,
      startTime: 0,
      endTime: 1000
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
  handleIPFSUpload(e, files) {
    hashFile(files[0][1]).then((hash) => {
      console.log(hash);
      this.setState({image: hash});
    });
  }
  render () {
    return (
      <Container className="Register">
        <Header>Register a Crowdsale</Header>
        <Grid stackable>
          <Grid.Column width="12" tablet="10" computer="12">
            <Form>
              <Form.Input name="name" label='Project Name' placeholder="Project"
                onChange={this.handleChange.bind(this, 'name')}/>
              <Form.Input name="owner" label="Owner" placeholder="Company / Group"
                onChange={this.handleChange.bind(this, 'owner')}/>
              <Form.Input name="website" label="Website" placeholder="URL"
                onChange={this.handleChange.bind(this, 'website')}/>
              <Form.TextArea name="description" label="Details" placeholder="Quickly describe your product."
                onChange={this.handleChange.bind(this, 'description')}/>
              <Form.Field>
                <Form.Input name="image" label="Icon" placeholder="IPFS Image Hash" type="text" action>
                  <input onChange={this.handleChange.bind(this, 'image')} value={this.state.image} />
                  <FileReaderInput as="binary" onChange={this.handleIPFSUpload.bind(this)}>
                    <Button type="button" className="accent">Upload Icon</Button>
                  </FileReaderInput>
                </Form.Input>
              </Form.Field>
              <Form.Field>
                <Form.Input name="video" label="Video" placeholder="IPFS Video Hash" type="text" action>
                  <input onChange={this.handleChange.bind(this, 'video')} value={this.state.video} />
                  <FileReaderInput as="binary" onChange={this.handleIPFSUpload.bind(this)}>
                    <Button type="button" className="accent">Upload Video</Button>
                  </FileReaderInput>
                </Form.Input>
              </Form.Field>
              <div className="field">
                <label className="field">In-Depth Explanation &nbsp;
                <Popup
                  trigger={<Icon name="help" size="small" inverted circular />}
                  content={<a target="_blank" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">This section uses standard github markdown syntax</a>}
                  on="click"
                  hideOnScroll/>
                </label>
                <Form.TextArea name="depth" placeholder="Longer section where you can describe the mechanisms of your product and the function of your token."
                  onChange={this.handleChange.bind(this, 'depth')} value={this.state.depth}/>
              </div>
            </Form>
          </Grid.Column>
          <Grid.Column width="4" tablet="6" computer="4">
            <CrowdCard name={this.state.name} owner={this.state.owner} image={this.state.image} description={this.state.description} color={this.state.color}/>
            <BlockPicker color={this.state.color} onChange={this.handleChange.bind(this, 'color')} />
          </Grid.Column>
        </Grid>
        <Divider/>
        <Header content="Listing Preview"/>
        <Closeup video={this.state.video} image={this.state.image} markdown={this.state.depth}
          name={this.state.name} owner={this.state.owner} description={this.state.description}></Closeup>
        <Button className="accent" fluid type="button" onClick={this.createListing.bind(this)}>Create Listing (2Ξ)</Button>
      </Container>
    )
  }
  createListing() {
    FactoryController.registerCrowdsale({
      name: this.state.name,
      image: this.state.image,
      video: this.state.video,
      description: this.state.description,
      depth: this.state.depth,
      benefactor: this.state.benefactor,
      quantity: this.state.quantity,
      owner: this.state.owner,
      startTime: this.state.startTime,
      endTime: this.state.endTime
    });
  }
}

function hashFile(file) {
  console.log(file);
  return axios.post('http://big:3001/img', file).then((res) => res.data);
}

export default Register;
