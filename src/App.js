import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Image from "../src/components/Image";
import SelectDate from "../src/components/SelectDate";
import nasaData from "../src/components/nasaData";
import Title from "../src/components/Title";

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [photo, setPhoto] = useState();
  
  useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZWeqLrfDAmdeg9wbb0ACuutsgVNuc3W4W15QaWkT`)
        .then(response => {
            console.log(response.data);
            setPhoto(response.data.url);
            setNasaData(response.data);
        })
        .catch(error => {
            console.log("Check for errors:", error);
        })
    }, []);


  return (
    <div className="App">
        <h1>Nasa Photo of the Day!</h1>
      
      <Image image={photo} />
    </div>

  );
  }
  

export default App;
