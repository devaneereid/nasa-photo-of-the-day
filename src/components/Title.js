import React from "react";
import styled from 'styled-components';

const TextStyles = styled.div`
    background: url('https://images.unsplash.com/photo-1506976892328-488a2fad4884?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    color: white;
    font-style: italic;
    border-radius: 15px;
    border: 4px solid #5b5b5c;
    box-shadow: 10px 10px 5px grey;
    line-height: 2rem;
`;
const HoverStyle = styled.h2`
  ${TextStyles}:hover & {
    color: #deda9b;
  }
`;

const Title = (props) => {
    return (
      <TextStyles>
        <div>
          <HoverStyle>
              <h2>{props.title}</h2>
                </HoverStyle>
                  <h3>{props.date}</h3>
                    <p>{props.explanation}</p>
                  <p>Copyright: {props.copyright}</p>
                </div>
        </TextStyles>
    )
}
export default Title;