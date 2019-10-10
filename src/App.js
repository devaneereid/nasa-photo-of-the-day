import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Image from "../src/components/Image";


function App() {
  const [data, setData] = useState([]);
  const [pic, setPic] = useState("Images");
  
  useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZWeqLrfDAmdeg9wbb0ACuutsgVNuc3W4W15QaWkT`)
        .then(response => {
            console.log(response.data);
            setData(response.data.message);
        })
        .catch(error => {
            console.log("Check for errors:", error);
        })
    }, []);


  return (
    <div className="App">
      <h1>Nasa Photo of the Day!</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
       <button onClick={() => setPic("media_type")}>Nasa Images</button>
        <div className="entry">
                {nasaData.map((item, index) => {
                    return <Image
                        key={index}
                        title={data.title}
                        imgUrl={data.imgUrl}
                        />
                    })}
            <div>
          <Header title={data.title}/>
          <Image pic={data.image}/>
        </div>
        </div>
    </div>
  )}

export default App;
