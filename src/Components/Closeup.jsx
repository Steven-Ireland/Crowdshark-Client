import React from 'react';
import {Container, Button, Header, Divider, Grid} from 'semantic-ui-react';
import {Link} from 'react-router';
import Remarkable from 'remarkable';
import renderHTML from 'react-render-html';
import './Closeup.css';

class Closeup extends React.Component {
  render () {
    return (
      <Container className="Closeup">
        <Grid stackable>
          <Grid.Column width="12">
            <video width="100%" muted={this.props.highlight} controls>
              <source src={"http://ipfs.io/ipfs/" + this.props.video} type="video/mp4"/>
            </video>
          </Grid.Column>
          <Grid.Column width="4">
            <Header content={this.props.name} subheader={this.props.owner} image={'http://ipfs.io/ipfs/'+this.props.image}/>
            <Divider/>
            <p>{this.props.description}</p>
            <ActionButton show={!this.props.highlight} link="1234"/>
          </Grid.Column>
        </Grid>
        <About show={!this.props.highlight} markdown={this.props.markdown} />
      </Container>
    )
  }
}

function ActionButton(props) {
  if (props.show) {
    return (
      <div>
        <Button fluid className="accent" type="button" size="large">Buy Tokens</Button>
      </div>
    )
  } else {
    return (
      <div>
        <Button fluid className="accent" as={Link} to={"/i/"+props.link}>See More</Button>
      </div>
    )
  }
}

function About(props) {
  if (props.show) {
    return (
      <div className="About">
        {renderHTML(new Remarkable().render(props.markdown))}
      </div>)
  } else return null;
}

export default Closeup;
