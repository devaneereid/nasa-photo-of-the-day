// import React, { useState, useEffect} from "react";
// import axios from "axios";
// import Image from "../components/Image";

// const nasaData = props => {
//     const [nasaData, setNasaData] = useState([]);
//     const [query, setQuery] = useState("react");

//     useEffect(() => {
//         axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZWeqLrfDAmdeg9wbb0ACuutsgVNuc3W4W15QaWkT`)
//         .then(response => {
//             console.log(res => setNasaData(res.nasaData));
//         })
//         .catch(error => {
//             console.log("Check for errors:", error);
//         })
// }, []);


// return (
   
//         <input value={query}></input>
//         {nasaData.map((item, index) => {
//             return <Image key={index} date={item}>
   
// )};   

// export default nasaData;
