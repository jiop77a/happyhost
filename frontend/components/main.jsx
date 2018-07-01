import React, {Component} from 'react';
import Dropbox from './dropbox';
import Gallery from './gallery';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state= {
      images: ["a", "b", "c"],
      id: parseInt(this.props.match.params.id)
    };
  }

  // componentDidMount() {
  //   console.log(this.props.match.params);
  // }

  render() {
    // const addImage = (image) => () => {
    //   let images = [...this.state.images, image];
    //   this.setState({images});
    // };
    return (
      <div className='main'>
        <h1>Welcome, Add your files here!</h1>
        <Dropbox/>
        <Gallery/>
        {/* {this.state.images.map(
          (image, key) => <span key={key}>{image}</span>
        )} */}
      </div>
    );
  }
}


export default Main;
