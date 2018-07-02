import React, {Component} from 'react';
import Dropbox from './dropbox';
import Gallery from './gallery';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state= {
      images: {}
    };
  }

  componentDidMount() {
      fetch(`http://localhost:3000/api/images/`)
      .then(r => r.json())
      .then(r => this.setState({images: r}));
  }

  render() {
    const addImage = (images) => {
      this.setState({images});
    };

    const deleteImage = (id) => () => {
      fetch(`http://localhost:3000/api/images/${id}`, {method: 'DELETE'})
      .then(r => r.json())
      .then(r => this.setState({images: r}));
    };

    return (
      <div className='main'>
        <h1>Welcome, Add your files here!</h1>
        <Dropbox add={addImage}/>
        <Gallery
          images={Object.values(this.state.images)}
          remove={deleteImage}
        />
      </div>
    );
  }
}


export default Main;
