import React from "react";
import styled from 'styled-components';

// const Rotate = styled.div`
//     from {
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(360deg);
//     }
// `;
const NasaCard = styled.div`
    // background: #553575;
    padding: 40px 20px;
    color: purple;
    border-radius: 15px;
    
    transition: transform 0.2s ease-in;
    &:hover {
        transform: translate(-5px) scale(1.10);
    }
`;


const Image = props => {
    return (
        <NasaCard>
        <div className="nasa_img" key={props.id}>
            <img className="nasa_img" alt="nasa pics" src={props.image}/>
        </div>
        </NasaCard>
    )
}
export default Image;