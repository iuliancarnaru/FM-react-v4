import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }

  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="havanese" />
        <Pet name="Peper" animal="bird" breed="cockatier" />
        <Pet name="Doink" animal="cat" breed="mixed" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
