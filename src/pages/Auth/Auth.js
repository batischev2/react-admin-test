import React from "react";
import Button from 'react-bootstrap/Button';

import "./auth.scss"

const Auth = () => {
    return (
        <div className="auth">
            <h1 className="auth__title">Аукционная площадка для проведения закупок ГК Проф-Пресс</h1>
            <div className="auth__form">
                <input
                    placeholder="login"
                    type="text"
                />
                <input
                    placeholder="password"
                    type="password"
                />
                <Button variant="primary">Войти</Button>
            </div>
        </div>
    )
}

export default Auth
