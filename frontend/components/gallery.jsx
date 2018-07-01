import React, {Component} from 'react';
import GalleryPic from './galleryPic';
import {pic} from '../imageIndex';


export default () => (
  <div className="gallery">
    <h1 className="title">Image Gallery</h1>
    <div className="pics">
      <GalleryPic
        url={pic}
        views={99}
        id={1}/>
      <GalleryPic
        url={pic}
        views={99}
        id={1}/>
      <GalleryPic
        url={pic}
        views={99}
        id={1}/>
      <GalleryPic
        url={pic}
        views={99}
        id={1}/>
      <GalleryPic
        url={pic}
        views={99}
        id={1}/>
      <GalleryPic
        url={pic}
        views={99}
        id={1}/>
      <GalleryPic
        url={pic}
        views={99}
        id={1}/>
      <GalleryPic
        url={pic}
        views={99}
        id={1}/>
    </div>
  </div>
);
