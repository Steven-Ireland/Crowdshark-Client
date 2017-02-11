import React from 'react';
import {Container, Button, Embed, Header, Divider, Grid} from 'semantic-ui-react';
import Remarkable from 'remarkable';
import renderHTML from 'react-render-html';
import './Closeup.css';

class Closeup extends React.Component {
  render () {
    return (
      <Container className="Closeup">
        <Grid stackable>
          <Grid.Column width="12">
            <Embed url="http://ipfs.io/ipfs/QmTca4A43f4kEvzTouvYTegtp6KobixRqweV12NrvwwtFP"/>
          </Grid.Column>
          <Grid.Column width="4">
            <Header content="YOLO" subheader="YNT"/>
            <Divider/>
            <p>This is a description of the app.</p>
            <Button fluid className="accent" type="button">Buy Tokens</Button>
          </Grid.Column>
        </Grid>
        <About show={!this.props.highlight}/>
      </Container>
    )
  }
}

function About(props) {
  if (props.show) {
    return (<div>
      {renderHTML(new Remarkable().render('# Testing!'))}
    </div>)
  } else return null;
}

export default Closeup;
