import logo from "./logo.svg";
import "./App.css";
import React from "react";

const drawImage = () => {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  let fileInput = document.getElementById("file");
  var img = new Image();
  var URL = window.webkitURL || window.URL;
  var url = URL.createObjectURL(fileInput.files[0]);
  img.src = url;
  console.log(img);
  img.onload = function () {
    let width = 500;
    let height = img.height * (500 / img.width);
    ctx.drawImage(img, 0, 0, width, height);
  };
};

const downloadImage = () => {
  var data = document.getElementById("canvas").toDataURL().replace("image/png", "image/octet-stream");
  window.location.href = data;
};

class App extends React.Component {
  uploadFile = () => {
    drawImage();
  };

  saveFile = () => {
    downloadImage();
  };

  render() {
    return (
      <div className="App">
        <input type="file" id="file" />
        <button type="submit" value="Upload Image" onClick={this.uploadFile}>
          {" "}
          Upload
        </button>
        <br />
        <button onClick={this.saveFile}>Save</button>

        <br />
        <canvas id="canvas" style={{ width: "500px", height: "500px", backgroundColor: "black" }}></canvas>
        <br />
      </div>
    );
  }
}

export default App;
