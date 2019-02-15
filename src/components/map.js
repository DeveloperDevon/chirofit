import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
}

export class MapContainer extends Component {
  render() {
    return (
      <div id="map-container">
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={14}
          style={mapStyles}
          center={{
            lat: 38.7449948,
            lng: -121.307061,
          }}
        >
          <Marker
            title="Chirofit Roseville"
            position={{
              lat: 38.7449948,
              lng: -121.307061,
            }}
          />
          <InfoWindow visible={true}>
            <div>
              <h1>Chirofit Roseville!</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

const MapRendered = GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_API_KEY,
})(MapContainer)

export default MapRendered
