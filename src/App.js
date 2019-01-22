import React from 'react';
import { render } from 'react-dom';

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        {
          onClick: this.handleTitleClick
        },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Peper",
        animal: "Bird",
        breed: "Cockateil"
      }),
      React.createElement(Pet, {
        name: "Fibi",
        animal: "Cat",
        breed: "Mixed"
      })
    ]);
  }
}

render(
  React.createElement(App, {}, null),
  document.getElementById("root")
);
