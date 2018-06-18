import React, {Component} from 'react';
import {createImage} from '../util/imag_util';
import Dropbox from './dropbox';


const Main = () => {
  return (
    <div className='main'>
      <h1>Welcome, Add your files here!</h1>
      <Dropbox/>
      {`Gallery goes here`}
    </div>
  );
};

export default Main;
