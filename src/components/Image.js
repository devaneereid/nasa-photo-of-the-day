import React from "react";

const Image = props => {
    return (
        <img className="nasa_img" alt="nasa pics" src={props.image}/>
    )
}
export default Image;