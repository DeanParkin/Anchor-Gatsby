import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';




const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )


export default function Map({ location, zoomLevel }) {
    return (
        <>
            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                    />
                </GoogleMapReact>   
            </div>
        </>
    )
}
