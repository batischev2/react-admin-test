import React from "react";

import arrow from "../../assets/images/select.svg"

import "./navigationItem.scss";

const NavigationItem = ({title}) => {
    return (
        <div className="navigationItem">
            <h5>{title}</h5>
            <img src={arrow} alt="arrow" />
        </div>
    );
};

export default NavigationItem;
