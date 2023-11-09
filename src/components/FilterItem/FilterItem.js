import React from "react";

import arrow from "../../assets/images/select.svg"

import "./filterItem.scss";

const FilterItem = ({title}) => {
    return (
        <div className="filterItem">
            <p>{title}</p>
            <img src={arrow} alt="arrow" />
        </div>
    );
};

export default FilterItem;
