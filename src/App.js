import './App.css';
import Maps from './components/Maps';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [coordinates, setCoordinates] = useState([30.222346, -97.836521])
  const [map, setMap] = useState(null)


  const handleSetCoords = (coords) => {
    console.log('recieved:', coords)
    map.flyTo(coords)
  }

  return (
    <div className="App">
      <Maps  handleSetCoords={handleSetCoords}/>
      <MapContainer center={coordinates} zoom={13} scrollWheelZoom={true} whenCreated={map => setMap(map)}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

    </div>
  );
}

export default App;
