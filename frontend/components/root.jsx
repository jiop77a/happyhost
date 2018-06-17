import React, {Component} from 'react';
import {createImage} from '../util/imag_util';
import Dropbox from './dropbox';
// import {Image, CloudinaryContext} from 'cloudinary-react';

const Root = () => {
  // createImage()
  //   .then(r => r.text())
  //   .then(r => console.log(r));

  // console.log(process.env.HELLO);

  return (
    <div>
      <Dropbox/>
      {`Hello World`}
    </div>
  );
};

export default Root;
