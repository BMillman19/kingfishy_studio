import LayeredImage from "react-layered-image";
import React from "react";

import "./App.css";

const layers = [
  "carmine_background.png",
  "carmine_smoke.png",
  "carmine_action.png",
];

function App() {
  return (
    <div className="App">
      <LayeredImage
        layers={layers}
        aspectRatio={1}
        borderRadius={0}
        lightOpacity={0}
        style={{ width: 400 }}
      />
      <LayeredImage
        layers={layers}
        aspectRatio={1}
        borderRadius={0}
        lightOpacity={0}
        style={{ width: 400 }}
      />
      <LayeredImage
        layers={layers}
        aspectRatio={1}
        borderRadius={0}
        lightOpacity={0}
        style={{ width: 400 }}
      />
    </div>
  );
}

export default App;
