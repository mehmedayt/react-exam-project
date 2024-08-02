/* eslint-disable react/prop-types */
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'red',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);



export default function CustomMap(){
  const defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844
    },
    zoom: 11
  };

  return (
    <div style={{ height: '50vh', width: '2000px', 'margin-top': '50px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB_atPx7epBiewkaHyP-fg3N9TWTGNoREk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={59.955413}
          lng={30.337844}
          text="Here"
        />
        
      </GoogleMapReact>
    </div>
  );
}