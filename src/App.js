import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Image from "../src/components/Image";
import Title from "../src/components/Title";
// import SelectDate from "../src/components/SelectDate";

function App() {
  const [photo, setPhoto] = useState([]);
  const [text, setText] = useState([]);
  // const [date, setDate] = useState([]);
  
  useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=dqjvggktcKkSM6HDY3PLXRBxzNe0br66p0ezIrre`)
        .then(response => {
            console.log(response.data);
            setPhoto(response.data.url);
            setText(response.data);
            // setDate(response.data)
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
            {/* <SelectDate date={date} /> */}
          <Title title= {text.title} 
          date= {text.date}
          explanation=  {text.explanation}/>
          </>
       </div>
    );
  }
  
  
export default App;
