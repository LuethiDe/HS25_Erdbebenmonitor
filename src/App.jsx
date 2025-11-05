import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css"; //ist für die Kartenanzeige notwendig

console.log();

function App() {
  const [button, setButton] = useState({});
  return (
    <div className="app">
      <Header />
      <Sidebar button={button} />
      <div className="mainArea">
        <Map setButton={setButton} />
      </div>
    </div>
  );
}

export default App;
