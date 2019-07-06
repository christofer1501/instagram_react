import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';
import InstaService from '../services/instaservice';

export default class Pallete extends Component {
  InstaService = new InstaService(); 
  state = {
    photos: [],
    error: false,
    loading: true,
  };

  componentDidMount() {
    this.InstaService.getAllPhotos()
    .then(this.onPhotosLoaded)
    .catch(this.onError)
  };

  onPhotosLoaded = (photos) => {
    this.setState({
      photos, 
      error: false,
      loading: false,
    })
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    })
  };

  render() {
    const { error, photos, loading } = this.state;
    if (error) {
      return <ErrorMessage/>
    } else if (!photos && loading) {
      return <Spinner/>
    };

    return (
      <div className="palette">
        {
          photos.map(({ src, alt, id }) => (
              <img 
                src={ src }
                alt={ alt }
                key={ id }
              />
            )
          )
        }
      </div>
    );
  }
};