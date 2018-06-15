import React, {Component} from 'react';
import {createImage} from '../util/imag_util';


const Root = () => {
  createImage()
    .then(r => r.text())
    .then(r => console.log(r));

  return <div>Hello World</div>;
};

export default Root;
