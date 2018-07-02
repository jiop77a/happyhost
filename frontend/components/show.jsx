import React, { Component } from 'react';
// import {fetchImage} from '../util/imag_util';


export default class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
      fetch(`http://localhost:3000/api/images/${id}`)
      .then(r => r.json())
      .then(r => this.setState({url: r.url}));
  }

  render() {
    let {url} = this.state;
    return (
      <div>
        <img src={url}></img>
      </div>
    );
  }

}
