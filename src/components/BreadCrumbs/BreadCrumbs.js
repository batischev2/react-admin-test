import React from "react";
import { Link } from "react-router-dom";

import "./breadCrumbs.scss";

const BreadCrumbs = ({links}) => {
    return (
        <div className="breadcrumbs">
            {links.map((link, index) => {
                return (
                    <Link key={index} to={link.link}>
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default BreadCrumbs;
