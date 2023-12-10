import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const MapAPP = () => {
  return (
    <>
      <div>
        <h2>map</h2>
      </div>
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDvPKKpWCXHohiNxsuCv-6vghOmvRnxPjo",
})(MapAPP);
