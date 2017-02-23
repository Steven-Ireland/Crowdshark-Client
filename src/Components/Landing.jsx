import React from 'react'
import './Landing.css';
import {Container, Header, Icon, Grid} from 'semantic-ui-react';

class Landing extends React.Component {
  render () {
    return (
      <div className="Landing">
        <section className="splash">
          <div className="parallax"></div>
          <div className="splash-center">
            <h1>Crowdshark</h1>
            <p>Revolutionary ideas, implemented.</p>
          </div>
        </section>
        <section>
          <Container>
            <Grid stackable>
              <Grid.Column width="8">
                <Header as="h1" icon textAlign='center'>
                  <Icon name='idea'/>
                  <Header.Content>Ideas come alive</Header.Content>
                </Header>
                <Container>
                  Great ideas are fueled by ether. In return you receive a token which is your gateway to accessing up-and-coming distributed networks.
                </Container>
              </Grid.Column>
              <Grid.Column width="8">
                <Header as="h1" icon textAlign='center'>
                  <Icon name='line chart'/>
                  <Header.Content>Industries are born</Header.Content>
                </Header>
                <Container>
                  Great ideas are fueled by ether. In return you receive a token which is your gateway to accessing up-and-coming distributed networks.
                </Container>
              </Grid.Column>
            </Grid>
          </Container>
        </section>
      </div>
    )
  }
}

export default Landing;
