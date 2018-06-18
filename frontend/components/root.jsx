import React, {Component} from 'react';
import {createImage} from '../util/imag_util';
import Main from './main';


const Root = () => {
  // createImage()
  //   .then(r => r.text())
  //   .then(r => console.log(r));

  // console.log(process.env.HELLO);

  return (
    <div>
      <nav>
        <img src='https://res.cloudinary.com/dol1mm8bd/image/upload/v1529290873/qgdfes0qrx5vtmuevzzj.png'></img>
        <div>Happy Host</div>
      </nav>
      <Main/>
    </div>
  );
};

export default Root;
