import React, {Component} from 'react';
import {createImage} from '../util/imag_util';
import Main from './main';
import {happy} from '../imageIndex.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';


const Root = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Link to="/">
          <img src={happy}></img>
          <div>Happy Host</div>
        </Link>
      </nav>
      <Route exact path="/" component={Main}></Route>
      <Route path="/image/:id" component={Main}></Route>
    </div>
  </BrowserRouter>
);


export default Root;
