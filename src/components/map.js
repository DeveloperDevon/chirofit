import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  position: 'relative',
  width: '100%',
}

export class MapContainer extends Component {
  render() {
    return (
      <div id="map-container">
        <Map google={this.props.google} zoom={14} style={mapStyles}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Foo</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAK-_6vLcEEhc7uPFD-ejwp8pQyD3mhV74',
})(MapContainer)
