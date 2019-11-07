import React, { useState } from "react";
import styled from 'styled-components';

const DateStyles = styled.h3`
    font-size: 1.4rem;
    color: navy;
`;

const SelectStyles = styled.div`
    padding-bottom: 30px;
`;

const BtnStyles = styled.button`
`;


const SelectDate = (props) => {
    const [startDate] = useState("2019-11-07");

    return (
        <div className="dateContainer">
            <DateStyles>
                <h3>Select Date</h3>
            </DateStyles>
                    
            <SelectStyles>
                <input className="select-date" type="date" value={props.startDate} />
            <BtnStyles>
                 <button onClick={startDate.select}>Submit</button></BtnStyles>
            </SelectStyles>
        </div>
    );
};
export default SelectDate;