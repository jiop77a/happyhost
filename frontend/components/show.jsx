/*global Promise*/

import React, { Component } from 'react';
// import {fetchImage} from '../util/imag_util';


export default class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: "",
      error: ""
    };
  }

  componentDidMount() {
    let {id} = this.props.match.params;
    let {addView} = this.props;
      fetch(`http://localhost:3000/api/images/${id}`)
      .then(r => r.ok ? r.json() : Promise.reject({text: r.statusText}))
      .then(r => this.setState({url: r.url}))
      .catch(r => this.setState({error: r.text}));
  }

  render() {
    let {url} = this.state;
    return (
      <div>
        <img src={url}></img>
        {this.state.error}
      </div>
    );
  }

}
