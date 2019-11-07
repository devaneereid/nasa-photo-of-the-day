import React from "react";
import styled from 'styled-components';

const TextStyles = styled.div`
    background: url('https://images.unsplash.com/photo-1506976892328-488a2fad4884?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    color: white;
    font-style: italic;
    border-radius: 15px;
    border: 4px solid #5b5b5c;
    box-shadow: 10px 10px 5px grey;
    height: 40vh;
    line-height: 1.4rem;
`;


const Title = (props) => {
    return (
      <TextStyles>
        <div>
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
          <p>{props.explanation}</p>
        </div>
        </TextStyles>
    )
}
export default Title;