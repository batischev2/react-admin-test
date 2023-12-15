import React from "react";

import { ButtonUi, ButtonUiType } from "../../shared/UI/ButtonUi";

import Form from 'react-bootstrap/Form';

import styles from "./authPage.module.scss"

export const AuthPage = () => {
    return (
        <div className={styles.auth}>
            <h1 className={styles.auth__title}>Аукционная площадка для проведения закупок ГК Проф-Пресс</h1>
            <div className={styles.auth__form}>
                <Form.Control
                    type="text"
                    id="inputLogin"
                    placeholder="login"
                />
                <Form.Control
                    type="password"
                    id="inputPassword"
                    placeholder="password"
                />
                <ButtonUi title={'Войти'} type={ButtonUiType.PRIMARY} />
            </div>
        </div>
    )
}
