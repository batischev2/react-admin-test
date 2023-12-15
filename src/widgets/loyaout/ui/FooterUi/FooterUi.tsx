import React from "react";

import { ButtonUi, ButtonUiType } from "../../../../shared/UI/ButtonUi";

import styles from "./footerUi.module.scss";

export const FooterUi = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__info}>
                    <div className={styles.footer__infoTop}>
                        <p>
                            Возникли вопросы по работе с сервисом, отправьте
                            заявку на консультацию
                        </p>
                        <span>прикрепить файл</span>
                        <ButtonUi title={'Получить консультацию'} type={ButtonUiType.PRIMARY} />
                    </div>
                    <div className={styles.footer__infoBottom}>
                        <p>OOO "Издательский дом "Проф-Пресс", 2023</p>
                        <p>Политика конфиденциальности</p>
                        <p>Разработка сайта</p>
                    </div>
                </div>
                <div className={styles.footer__items}>
                    <div className={styles.footer__item}>
                        <div className={styles.footer__itemTop}>
                            <h3>Правила площадки</h3>
                            <a href="/src/modules/pages">Правила участия</a>
                        </div>
                        <div className={styles.footer__itemBottom}>
                            <span>Г. Ростов-на-Дону, ул.<br/>Доватора, 111/11</span>
                            <span>пн-пт 8:00-18:00</span>
                        </div>
                    </div>
                    <div className={styles.footer__item}>
                        <div className={styles.footer__itemTop}>
                            <h3>Полезное</h3>
                            <a href="/src/modules/pages">Размещение предложения</a>
                            <a href="/src/modules/pages">Видео</a>
                            <a href="/src/modules/pages">Статьи</a>
                        </div>
                        <div className={styles.footer__itemBottom}>
                            <span>+7 (861) 111-11-11</span>
                            <span>+7 (861) 111-11-11</span>
                        </div>
                    </div>
                    <div className={styles.footer__item}>
                        <div className={styles.footer__itemTop}>
                            <h3>Специалистам</h3>
                            <a href="/src/modules/pages">Технические каталоги</a>
                            <a href="/src/modules/pages">Готовые решения</a>
                            <a href="/src/modules/pages">Нормы/ГОСТы</a>
                            <a href="/src/modules/pages">Сотрудничество</a>
                        </div>
                        <div className={styles.footer__itemBottom}>
                            <span>vash-email@mail.ru</span>
                            <span>vash-email@mail.ru</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
