import React from 'react';
import axios from 'axios';
import {Container, Card, Statistic, Image} from 'semantic-ui-react';
import {Link} from 'react-router';
import './Browser.css';

class Browser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crowdfunds: []
    }
  }
  componentDidMount () {
    load().then((data) =>
      this.setState({crowdfunds: data})
      //console.log(data.crowdfunds[0])
    );
  }
  render () {
    return (
      <Container className="Browser">
        <Card.Group>
          {this.state.crowdfunds.map(function(fund) {
            return (
              <Card shape="rounded" style={{'backgroundColor': fund.color}} key={fund.name} as={Link} to={'/i/' + fund.link}>
                <Image src='http://semantic-ui.com/images/avatar/large/elliot.jpg' />
                <Card.Content>
                  <Card.Header>{fund.name}</Card.Header>
                  <Card.Meta >TODO</Card.Meta>
                  <Card.Description >{fund.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Statistic.Group size="tiny">
                    <div className="center">
                      <Statistic floated='left'>
                        <Statistic.Value>Ξ276</Statistic.Value>
                        <Statistic.Label>Ether</Statistic.Label>
                      </Statistic>
                      <Statistic floated='right'>
                        <Statistic.Value>$4,672</Statistic.Value>
                        <Statistic.Label>Dollars</Statistic.Label>
                      </Statistic>
                    </div>
                  </Statistic.Group>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      </Container>
    )
  }
}

function load() {
  return axios.get('http://big:8080/browse').then((res) => res.data);
}

export default Browser;
