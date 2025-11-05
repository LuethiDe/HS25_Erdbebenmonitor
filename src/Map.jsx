import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  GeoJSON,
} from "react-leaflet";
import Button from "@mui/material/Button";

import data from "./assets/4.5_week.geojson.json";
import plate_boundaries from "./assets/plate_boundaries.geojson.json";

export const Map = ({ size, setButton }) => {
  const earthquakes = data.features; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[47.5, 7.5]}
      zoom={2}
      style={{ height: "90vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <GeoJSON
        data={plate_boundaries}
        style={{
          color: "#F0s7000",
          weight: 2,
        }}
      />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={d.properties.mag ** size} // Größe basierend auf Magnitude
          pathOptions={{
            color: "#FF9050",
            fillColor: "#FF9050",
            fillOpacity: 0.5,
          }}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
              <Button
                onClick={() => setButton(d)}
                variant="outlined"
                size="small"
                color="success"
              >
                Mehr Infos
              </Button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
