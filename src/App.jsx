import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css"; //ist für die Kartenanzeige notwendig

console.log();

function App() {
  const [button, setButton] = useState({});
  const [size, setSize] = useState(1);
  return (
    <div className="app">
      <Header />
      <Sidebar button={button} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map setButton={setButton} size={size} setSize={setSize} />
      </div>
    </div>
  );
}

export default App;
