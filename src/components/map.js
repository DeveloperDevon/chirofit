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
          intialCenter={{
            lat: 38.752929,
            lng: -121.287187,
          }}
          center={{
            lat: 38.752929,
            lng: -121.287187,
          }}
        >
          <Marker
            title="Chirofit Roseville"
            position={{
              lat: 38.752929,
              lng: -121.287187,
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
