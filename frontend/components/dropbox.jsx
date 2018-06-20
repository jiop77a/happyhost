/*global Promise*/
import React, { Component } from 'react';
import axios from 'axios';
import {upload} from '../imageIndex.js';
import Dropzone from 'react-dropzone';

export default class DropBox extends Component {
  constructor(props) {
    super(props);
    this.state = {progress: 0, errors: "", preview: "", file: ""};
  }

  fileInput = React.createRef();
  dropZone = React.createRef();

  componentDidMount() {
    this.dropZone.current.addEventListener('dragover', this.handleOver);
    this.dropZone.current.addEventListener('dragleave', this.handleLeave);
    this.dropZone.current.addEventListener('drop', this.handleDrop);
  }
  handleOver
  handleEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.nativeEvent);
  }




  sendToCloudinary = (file) => async () => {
    if (file === "") {
      this.setState({errors: "please first select a file"});
      return;
    }
    let url = `https://api.cloudinary.com/v1_1/dol1mm8bd/auto/upload/`;
    let formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.CLOUDINARY_PRESET);
      formData.append("tags", ["GalleryChallenge"]);
    let headers = { "X-Requested-With": "XMLHttpRequest" };
    let onUploadProgress = (pe) => {
      let progress = Math.round(pe.loaded / pe.total * 100);
      this.setState({progress});
    };
    let options = {headers, onUploadProgress};

    let r = await axios.post(url, formData, options);
    console.log(r);
    this.setState({progress: 0, preview: "", file: ""});
  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.addEventListener('load', e => resolve(img));
      img.src = url;
    });
  }

  checkDimensions = async (file) => {
    let url = window.URL.createObjectURL(file);
    let img = await this.loadImage(url);
    let height = img.naturalHeight;
    let width = img.naturalWidth;
    let condition = height < 1000 && width < 1000;
    if (condition) {this.setState({preview: url, errors: ""});}
    return condition;
  }

  checkImage = async (file) => {
    try {
      if (file.size > 1250000) {
        throw new Error('image is too big');
      }
      if (!['image/jpeg', 'image/gif', 'image/png'].includes(file.type)) {
        throw new Error('image is not the right type');
      }
      let dimensions = await this.checkDimensions(file);
      if (!dimensions) {
        throw new Error('height and width must be less than 1000px');
      }
    } catch (err) {
      return err.message;
    }
    return false;
  }

  handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    let file = this.fileInput.current.files[0];
    let errors = await this.checkImage(file);
    if (errors) {this.setState({errors});}
    else {this.setState({file});}
  }

  render() {

    let {progress, errors, preview, file} = this.state;
    let progressClass = progress > 0 ? "progress-bar" : "";
    let checkPreview = (preview === "") ? "none" : "inherit";
    let checkHide = (preview !== "") ? "none" : "inherit";


    return (
      <div className="dropbox">
        <div
          className="dropzone"
          ref={this.dropZone}
          >
          <div className="errors">{errors}</div>
          <img
            className='preview'
            style={{display: `${checkPreview}`}}
            src={preview}>
          </img>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{width: `${progress}%`}}></div>
          </div>
          <div className="hide-text" style={{display: `${checkHide}`}}>
            <div className="drop-text">Drag or Drop Image</div>
            <img src={upload}></img>
            <div className="drop-text">Or</div>
            <input
              id="file"
              type="file"
              className="inputfile"
              ref={this.fileInput}
              onChange={this.handleSubmit}
              accept={'.jpg, .png, .gif'}
            />
            <label htmlFor="file">Click to Upload</label>
          </div>
        </div>
        <button
          className='drop-text drop-button'
          onClick={this.sendToCloudinary(file)}>
          Upload Image
        </button>
      </div>
    );
  }
}
