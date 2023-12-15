import React from "react";

import styles from "./socialItemUi.module.scss";

interface SocialItemUiProps {
    img: string,
    href: string
}

export const SocialItemUi:React.FC<SocialItemUiProps> = ({img, href}) => {
    return (
        <a className={styles.socialItem} href={href}>
            <img src={img} alt='socialIcon' />
        </a>
    );
};

