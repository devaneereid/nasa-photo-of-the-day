import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Image from "../src/components/Image";

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [photo, setPhoto] = useState();
  
  useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZWeqLrfDAmdeg9wbb0ACuutsgVNuc3W4W15QaWkT`)
        .then(response => {
            console.log(response.data);
            setPhoto(response.data.url);
        })
        .catch(error => {
            console.log("Check for errors:", error);
        })
    }, []);


  return (
    <div className="App">
        <h1>Nasa Photo of the Day!</h1>
      <Image image={photo}/>
          <div className="entry">
                {nasaData.map((dhurl, index) => {
                  return <Image
          
                    title={nasaData.image.title}
                    dhurl={nasaData.dhurl}
                    />
              // <button onClick={() => setPhoto("nasa_img")}>Nasa Images</button>
                 })}
          </div>
        </div>
  )}

export default App;
