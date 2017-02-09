import React from 'react'
import {Card, Statistic, Image} from 'semantic-ui-react';
import {Link} from 'react-router';
import './CrowdCard.css';

class CrowdCard extends React.Component {
  render () {
    return (
      <Card className="CrowdCard" shape="rounded" style={{'backgroundColor': this.props.color}} as={Link} to={this.props.link}>
        <Image src='http://semantic-ui.com/images/avatar/large/elliot.jpg' />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta >{this.props.owner}</Card.Meta>
          <Card.Description >{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Statistic.Group size="tiny">
            <div className="center">
              <Statistic floated='left'>
                <Statistic.Value>ΞX,XXX</Statistic.Value>
                <Statistic.Label>Ether</Statistic.Label>
              </Statistic>
              <Statistic floated='right'>
                <Statistic.Value>$X,XXX</Statistic.Value>
                <Statistic.Label>Dollars</Statistic.Label>
              </Statistic>
            </div>
          </Statistic.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default CrowdCard;
