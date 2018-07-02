import React, {Component} from 'React';
import {ex} from '../imageIndex';

export default ({url, views, id, remove}) => (
  <div className='gallery-pic'>
    <div className='pic-container'>
      <img className="image" src={url}></img>
      <img className="ex" src={ex} onClick={remove}></img>
      <div className="views">{`Views: ${views}`}</div>
    </div>
    <div className="url">{`localhost:3000/image/${id}`}</div>
  </div>
);
