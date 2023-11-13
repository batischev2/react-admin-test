import React from "react";

import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__wrapper">
                <div className="footer__info">
                    <div className="footer__infoTop">
                        <p>
                            Возникли вопросы по работе с сервисом, отправьте
                            заявку на консультацию
                        </p>
                        <span>прикрепить файл</span>
                        <button>Получить консультацию</button>
                    </div>
                    <div className="footer__infoBottom">
                        <p>OOO "Издательский дом "Проф-Пресс", 2023</p>
                        <p>Политика конфиденциальности</p>
                        <p>Разработка сайта</p>
                    </div>
                </div>
                <div className="footer__items">
                    <div className="footer__item">
                        <div className="footer__itemTop">
                            <h3>Правила площадки</h3>
                            <a href="/">Правила участия</a>
                        </div>
                        <div className="footer__itemBottom">
                            <span>Г. Ростов-на-Дону, ул.<br/>Доватора, 111/11</span>
                            <span>пн-пт 8:00-18:00</span>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__itemTop">
                            <h3>Полезное</h3>
                            <a href="/">Размещение предложения</a>
                            <a href="/">Видео</a>
                            <a href="/">Статьи</a>
                        </div>
                        <div className="footer__itemBottom">
                            <span>+7 (861) 111-11-11</span>
                            <span>+7 (861) 111-11-11</span>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__itemTop">
                            <h3>Специалистам</h3>
                            <a href="/">Технические каталоги</a>
                            <a href="/">Готовые решения</a>
                            <a href="/">Нормы/ГОСТы</a>
                            <a href="/">Сотрудничество</a>
                        </div>
                        <div className="footer__itemBottom">
                            <span>vash-email@mail.ru</span>
                            <span>vash-email@mail.ru</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
