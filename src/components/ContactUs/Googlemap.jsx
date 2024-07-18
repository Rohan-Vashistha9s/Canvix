import React from 'react'
import GoogleMapReact from 'google-map-react';





const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Googlemap(){
  const defaultProps = {
    center: {
      lat: 28.634589,
      lng: 77.219321
    


    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}