import React, {Component} from 'React';
import {ex} from '../imageIndex';

export default ({url, views}) => (
  <div className='gallery-pic'>
    <div className='pic-container'>
      <img className="image" src={url}></img>
      <img className="ex" src={ex}></img>
      <div className="views">{`Views: ${views}`}</div>
    </div>
    <div className="url">www.whatever.com</div>
  </div>
);
