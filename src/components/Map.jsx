import React from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";

//const position = [53.3853349, -6.2614152, 17]

const position = [-37.8136, 144.9631]

function Map() {
    return (
        <MapContainer center={position} zoom={6} style={{ height: "500px", borderRadius: "2.5rem", zIndex: 0 }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>A marker representing the service operations from this location.</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map