import React from "react";

const Image = props => {
    return (
        <div className="nasa_card" key={props.id}>
            <img className="nasa_img" alt="nasa pics" src={props.image}/>
        </div>
    )
}
export default Image;