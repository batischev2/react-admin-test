import React, { useState } from "react";

import NavigationItem from "../NavigationItem/NavigationItem";
import SocialItem from "../SocialItem/SocialItem";

import instagram from "../../assets/images/socials/instagram.png";
import whatsapp from "../../assets/images/socials/whatsapp.png";
import faceBook from "../../assets/images/socials/facebook.png";
import profile from "../../assets/images/profile-user.png";
import burger from "../../assets/images/burger-bar.png";
import close from "../../assets/images/closeBurger.png"

import "./header.scss";

const Header = () => {
    const navigationItems = ["Аукционы", "Поставщики", "Одобрение заявок"]
    const socials = [
            {
              name: "faceBook",
              img: faceBook,
              href: "#"
            },
            {
                name: "instagram",
                img: instagram,
                href: "#"
            },
            {
                name: "whatsapp",
                img: whatsapp,
                href: "#"
            },
        ]
    const [burgerOpen, setBurgerOpen] = useState(false)
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__logo">Logo</h1>
                <nav className="header__nav">
                    {navigationItems.map((item) => {
                      return <NavigationItem title={item} key={item} />
                    })}
                </nav>
                <div className="header__info">
                    <span className="header__infoPhone">+7 (861) 111-11-11</span>
                    <div className="header__infoSocials">
                        {socials.map((social) => {
                            return <SocialItem href={social.href} img={social.img} key={social.name} />
                        })}
                    </div>
                    <div className="header__infoProfile">
                        <img src={profile} alt="profile" />
                    </div>
                </div>
                <div className="header__burger" onClick={() => setBurgerOpen(!burgerOpen)}>
                    {burgerOpen ? <img className='burgerClose' src={close} alt='close'/> : <img className='burgerOpen' src={burger} alt='burger' /> }
                </div>
                {burgerOpen &&
                    <div className='header__dropDown'>
                        <nav className="header__dropDownNavMenu">
                            {navigationItems.map((item) => {
                                return <NavigationItem title={item} key={item} />
                            })}
                        </nav>
                        <div className="header__infoSocials">
                            {socials.map((social) => {
                                return <SocialItem href={social.href} img={social.img} key={social.name} />
                            })}
                        </div>
                        <span className="header__infoPhone">+7 (861) 111-11-11</span>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;
