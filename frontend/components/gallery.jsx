import React, {Component} from 'react';
import GalleryPic from './galleryPic';
import {pic} from '../imageIndex';


export default ({images, remove}) => (
  <div className="gallery">
    <h1 className="title">Image Gallery</h1>
    <div className="pics">
      {images.map((image) =>
        <GalleryPic
          key={image.id}
          id={image.id}
          views={image.views}
          url={image.url}
          remove={remove(image.id)}
        />
      )}
    </div>
  </div>
);
