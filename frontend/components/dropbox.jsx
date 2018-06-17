/*global cloudinary*/
import React, { Component } from 'react';
import axios from 'axios';

export default class DropBox extends Component {
  state = {progress: 0};

  fileInput = React.createRef();
  alertText = React.createRef();

  sendToCloudinary = (file) => {
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

    return axios.post(url, formData, options).then(r => {
      console.log(r);
      this.setState({progress: 0});
    });
  }

  handleSubmit = (e) => {
    this.sendToCloudinary(this.fileInput.current.files[0]);
  }

  componentDidMount() {
    let el = this.alertText.current;
    el.addEventListener('mouseover', () => el.classList.toggle('colortext'));
  }


  render() {
    let {progress} = this.state;
    let progressClass = progress > 0 ? "progress-bar" : "";

    return (
      <div className="dropzone">
          <div
            className={progressClass}
            style={{width: `${progress}vw`}}>
          </div>
          <input
            id="file"
            type="file"
            className="inputfile"
            ref={this.fileInput}
            onChange={this.handleSubmit}
            accept={'.jpg, .png'}
          />
          <label htmlFor="file">
            Upload File
          </label>
          <br />
          <h1
            className="colortext"
            ref={this.alertText}
            >Some Text
          </h1>
        </div>
    );
  }
}
