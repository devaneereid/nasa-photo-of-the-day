import React from "react";


const Title = (props) => {
    return (
        <div>
          <h1>{props.title}</h1>
          <h3>{props.date}</h3>
          <p>{props.explanation}</p>
        </div>
    )
}
export default Title;