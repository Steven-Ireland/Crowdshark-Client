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
            <video width="100%" muted controls autoPlay>
              <source src="http://ipfs.io/ipfs/QmTca4A43f4kEvzTouvYTegtp6KobixRqweV12NrvwwtFP" type="video/mp4"/>
            </video>
          </Grid.Column>
          <Grid.Column width="4">
            <Header content="YOLO" subheader="YNT"/>
            <Divider/>
            <p>This is a description of the app.</p>
            <ActionButton show={!this.props.highlight} link="1234"/>
          </Grid.Column>
        </Grid>
        <About show={!this.props.highlight}/>
      </Container>
    )
  }
}

function ActionButton(props) {
  if (props.show) {
    return (
      <div>
        <Button fluid className="accent" type="button">Buy Tokens</Button>
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
      <div>
        {renderHTML(new Remarkable().render('# Testing!'))}
      </div>)
  } else return null;
}

export default Closeup;
