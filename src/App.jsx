import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css"; //ist für die Kartenanzeige notwendig

console.log();

function App() {
  const [button, setButton] = useState({});
  const [size, setSize] = useState(1);
  const [data_api, setData_api] = useState({});
  const [mag, setMag] = useState("significant"); // default magnituden filter
  const [time, setTime] = useState("day"); // default zeit filter

  console.log(mag);
  console.log(time);

  useEffect(() => {
    fetch(
      `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${mag}_${time}.geojson`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setData_api(res))
      .catch((err) => console.error("Fetch failed", err));
  }, [mag, time]);

  return (
    <div className="app">
      <Header mag={mag} setMag={setMag} time={time} setTime={setTime} />
      <Sidebar button={button} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map
          setButton={setButton}
          size={size}
          setSize={setSize}
          data_api={data_api}
          setData_api={setData_api}
        />
      </div>
    </div>
  );
}

export default App;
