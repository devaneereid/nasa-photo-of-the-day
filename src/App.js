import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Image from "../src/components/Image";
import Title from "../src/components/Title";

function App() {
  const [photo, setPhoto] = useState([]);
  const [header, setTitle] = useState([]);
  
  useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=dqjvggktcKkSM6HDY3PLXRBxzNe0br66p0ezIrre`)
        .then(response => {
            console.log(response.data);
            setPhoto(response.data.url);
            setTitle(response.data);
        })
        .catch(error => {
            console.log("Check for errors:", error);
        })
    }, []);

  return (
    <div className="App">   
        <h1>Nasa Photo of the Day <span role="img" aria-label="rocket">🚀</span> !</h1>
            <>
          <Image image= {photo} />
            </>
            <>
          <Title title= {header.title} 
          date= {header.date}
          explanation= {header.explanation}/>
          </>
       </div>
    );
  }
  
  
export default App;
