import React, { Component } from 'react';
import { GoogleApiWrapper }from 'google-maps-react';
import Map from './Map';

export class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: {
        lat: "",
        lng: ""
      }
    }
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        })
      })
    }

    return (
      <div  style={style}>
        <Map  google={this.props.google} />
      </div>
    )
  }
}

const style = {
  position: 'relative',
  width: '100%',
  height: '100%'
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCUkmmnzKl8BF478fzVntH1Dy_xXxB56kk"
})(Container)
