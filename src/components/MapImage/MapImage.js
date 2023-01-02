import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "./map-image.scss"
const MapImage = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  const zoomLevel = 15;
  return (
    <div className="google-map">
      <GoogleMapReact
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        ></LocationPin>
      </GoogleMapReact>
    </div>
  );
};

export default MapImage;
