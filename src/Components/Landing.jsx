import React from 'react'
import './Landing.css';
import Logo from './logo.png';
import {Container, Header, Icon, Grid} from 'semantic-ui-react';

class Landing extends React.Component {
  render () {
    return (
      <div className="Landing">
        <section className="splash">
          <div className="splash-center">
            <img src={Logo} alt="Logo"/>
            <h1>Temporaryname</h1>
            <p>Genius brought to life</p>
          </div>
        </section>
        <section>
          <Container>
            <Grid divided="vertically">
              <Grid.Row columns={2} stackable>
                <Grid.Column computer={8} mobile={16}>
                  <Header as="h1" icon textAlign='center'>
                    <Icon name='idea'/>
                    <Header.Content>Ideas come alive</Header.Content>
                  </Header>
                  <Container>
                    Great ideas are fueled by ether. In return you receive a token which is your gateway to accessing up-and-coming distributed networks.
                  </Container>
                </Grid.Column>
                <Grid.Column computer={8} mobile={16}>
                  <Header as="h1" icon textAlign='center'>
                    <Icon name='line chart'/>
                    <Header.Content>Industries are born</Header.Content>
                  </Header>
                  <Container>
                    Great ideas are fueled by ether. In return you receive a token which is your gateway to accessing up-and-coming distributed networks.
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </section>
      </div>
    )
  }
}

export default Landing;
