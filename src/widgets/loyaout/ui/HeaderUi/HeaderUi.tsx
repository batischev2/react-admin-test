import React, { useState } from "react";

import { TabItemNavigationUi } from "../../../../shared/UI/TabItemNavigationUi";
import { SocialItemUi } from "../../../../shared/UI/SocialItemUi";
import { navigationItems, socials } from "../../../../constants/data";

import profile from "../../../../shared/images/profile-user.png";
import burger from "../../../../shared/images/burger-bar.png";
import close from "../../../../shared/images/closeBurger.png"

import styles from "./headerUi.module.scss";

export const HeaderUi = () => {

    const [burgerOpen, setBurgerOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.header__logo}>Logo</h1>
                <nav className={styles.header__nav}>
                    {navigationItems.map((item) => {
                        return <TabItemNavigationUi title={item} key={item} />
                    })}
                </nav>
                <div className={styles.header__info}>
                    <span className={styles.header__infoPhone}>+7 (861) 111-11-11</span>
                    <div className={styles.header__infoSocials}>
                        {socials.map((social) => {
                            return <SocialItemUi href={social.href} img={social.img} key={social.name} />
                        })}
                    </div>
                    <div className={styles.header__infoProfile}>
                        <img src={profile} alt="profile" />
                    </div>
                </div>
                <div className={styles.header__burger} onClick={() => setBurgerOpen(!burgerOpen)}>
                    {burgerOpen ?
                        <img className={styles.burgerClose} src={close} alt='close'/> :
                        <img className={styles.burgerOpen} src={burger} alt='burger' /> }
                </div>
                {burgerOpen &&
                    <div className={styles.header__dropDown}>
                        <nav className={styles.header__dropDownNavMenu}>
                            {navigationItems.map((item) => {
                                return <TabItemNavigationUi title={item} key={item} />
                            })}
                        </nav>
                        <div className={styles.header__infoSocials}>
                            {socials.map((social) => {
                                return <SocialItemUi href={social.href} img={social.img} key={social.name} />
                            })}
                        </div>
                        <span className={styles.header__infoPhone}>+7 (861) 111-11-11</span>
                    </div>
                }
            </div>
        </header>
    );
};
