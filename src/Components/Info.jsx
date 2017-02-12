import React, { PropTypes } from 'react'

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      owner: '',
      image: '',
      video: '',
      depth: '',
      description: ''
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
      <Closeup></Closeup>
    )
  }
}

function load() {
  return axios.get('http://big:3001/browse').then((res) => res.data);
}

export default Info;
