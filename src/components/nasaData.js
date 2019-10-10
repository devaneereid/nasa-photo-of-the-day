import React from "react";
import axios from "axios";

export default NasaData(); {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZWeqLrfDAmdeg9wbb0ACuutsgVNuc3W4W15QaWkT`)
        .then(response => {
            console.log(response.data);
            setNasaData(response.data)
        })
        .catch(error => {
            console.log("Check for errors:", error);
        })
    }, []);
    


}