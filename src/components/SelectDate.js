import React, { useState } from "react";

const SelectDate = props => {
    const [startDate, setStartDate] = useState("2019-10-10");

    return (
        <div className="dateContainer">
            <h3>Select Date</h3>
            <input className="select-date" type="date" value={startDate} />
            <button>Submit</button>
        </div>
    );
};
export default SelectDate;