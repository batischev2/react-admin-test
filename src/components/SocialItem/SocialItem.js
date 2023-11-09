import React from "react";

import "./socialItem.scss";

const SocialItem = ({img, href}) => {
    return (
        <a className="socialItem" href={href}>
            <img src={img} alt='socialIcon' />
        </a>
    );
};

export default SocialItem;
