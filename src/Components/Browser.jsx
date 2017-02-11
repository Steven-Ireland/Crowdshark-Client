import React from 'react';
import axios from 'axios';
import {Container, Card} from 'semantic-ui-react';
import CrowdCard from './CrowdCard';
import Closeup from './Closeup';
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
        <Closeup highlight></Closeup>
        <Card.Group>
          {this.state.crowdfunds.map(function(fund) {
            return (
              <CrowdCard key={fund.name} color={fund.color} name={fund.name} image={fund.image} link={fund.link} description={fund.description} />
            )
          })}
        </Card.Group>
      </Container>
    )
  }
}

function load() {
  return axios.get('http://big:3001/browse').then((res) => res.data);
}

export default Browser;
