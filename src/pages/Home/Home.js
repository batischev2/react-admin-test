import React from "react";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <BreadCrumbs links={[
                { name: "Главная", link: "/" },
            ]} />
            <h2 className="home__title">Аукционы</h2>
        </div>
    );
};

export default Home;
