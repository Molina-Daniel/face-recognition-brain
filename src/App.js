import React, { Component } from "react";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "YOUR_API_KEY",
});

const particlesCustomization = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = { input: "", imageUrl: "" };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function (err) {}
    );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesCustomization} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

// bottom_row: 0.8364685
// left_col: 0.343296
// right_col: 0.76197344
// top_row: 0.06421221
