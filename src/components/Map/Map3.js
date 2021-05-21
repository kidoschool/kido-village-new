import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import mapIcoUrl from "../../assets/blue-dot.png";

export class Map3 extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

_mapLoaded(mapProps, map) {
  const mapStyle = require('./MapStyle.json');
  map.setOptions({
     styles: mapStyle
  })
}
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

   const icon={
      url: mapIcoUrl
    }

    

    return (
      
      <div
        style={{
          position: "relative",
          height: "650px",
          width: "100%",
        }}
      >
        <Map onReady={(mapProps, map) => this._mapLoaded(mapProps, map)} google={this.props.google} zoom={this.props.map_zoom}  defaultZoom={1} initialCenter={this.props.map_centre} center={this.props.map_centre} zoomControl={false} mapTypeControl={false} scaleControl={false} fullscreenControl={false} scrollwheel={false} disableDoubleClickZoom={true} >
        {Object.entries(this.props.centerContents1["centers"]).map((item,k) => {
            return <Marker icon={icon} position={{lat: item[1].lat, lng: item[1].lng}} onClick={this.onMarkerClick} name={item[1].id  }>
              <InfoWindow marker={item[1].id} visible={this.state.showingInfoWindow} ><div><h3>{this.state.selectedPlace.name}</h3></div></InfoWindow>
              </Marker>
            })
        }
        {/* <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} ><div><h3>{this.state.selectedPlace.name}</h3></div></InfoWindow> */}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCIJkPLyzo5XZODdhxAa_XYbk2ESQpJyZw",
  v: "3.30"
})(Map3);
;