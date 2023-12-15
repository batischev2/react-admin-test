import React from "react";

import arrow from "../../images/select.svg"

import styles from "./tabItemNavigation.module.scss";

interface TabItemNavigationUiProps {
    title: string,
}

export const TabItemNavigationUi:React.FC<TabItemNavigationUiProps> = ({title}) => {
    return (
        <div className={styles.navigationItem}>
            <h5>{title}</h5>
            <img src={arrow} alt="arrow" />
        </div>
    );
};
