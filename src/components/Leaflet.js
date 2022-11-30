import { MapContainer, TileLayer, Marker } from "react-leaflet";

//just some mock data, but remember you'll always need latitude and longitude

//Step 1. https://leafletjs.com/examples/quick-start/
//Step 2. https://react-leaflet.js.org/docs/start-setup/

export default function Leaflet(props) {
  return (
    <>
      {/* to see your map, you need to add height property */}
      {/* center is where the map will get started */}
      <MapContainer
        style={{
          border: "2px solid",
          borderRadius: "10px",
          height: "25vw",
          width: "100vw",
          maxWidth: "1000px",
          maxHeight: "800px",
          margin: "0px 0px",
        }}
        center={[props.latitude, props.longitude]}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.pitches.map((pitch) => (
          // the marker is every pointer you see on the map
          <Marker key={pitch.id} position={[props.latitude, props.longitude]}>
            {/* when we click on the marker, we see the popup */}
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
