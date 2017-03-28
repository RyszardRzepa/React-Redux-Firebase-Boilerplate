import React from 'react';
import ReactDOM from 'react-dom';

export default class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google == this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    console.log("test for load map");
    if (this.props && this.props.google) {
      // google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return (
      <div style={mapStyles.container}>
        <div style={mapStyles.map} ref='map'>
          Loading map...
        </div>
      </div>

    )
  }
}

const mapStyles = {
  container: {
    position: 'relative',
    width: '60vw',
    height: '80vh'
  },
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
}
