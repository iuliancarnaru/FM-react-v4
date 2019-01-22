import React from "react";
import { render } from "react-dom";
import pf from 'petfinder-client';
require('dotenv').config();
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    }
  }
  componentDidMount() {
    petfinder.pet.find({ output: "full", location: "Seatle, WA"})
      .then(data => {
        let pets;

        if(data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        };

        this.setState({
          pets
        });
      })
  }

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
