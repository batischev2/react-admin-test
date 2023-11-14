import React, {useState} from "react";

import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import DropDownFilter from "../../components/DropDownFilter/DropDownFilter";
import Modals from "../../components/Modals/Modals";

import Pagination from 'react-bootstrap/Pagination';

import Button from 'react-bootstrap/Button';

import loupe from "../../assets/images/loupe.png"
import filterImg from "../../assets/images/filter.png"
import cross from "../../assets/images/close.png"
import edit from "../../assets/images/edit.png"

import "./home.scss"

const Home = () => {
    const filterItems = ["Товарная группа", "Статус аукциона", "Новая заявка", "Выбрать период"]
    const [auctionItems, setAuctionItems] = useState([
        {
            number: 1,
            name: 'Аукцион на закупку в интересах компании ООО "Фабрика"',
            receptionDate: '17.04.23-18.04.23',
            startDate: '18.04.23',
            status: 'Черновик'
        },
        {
            number: 2,
            name: 'Аукцион на закупку в интересах компании ООО "Пресс"',
            receptionDate: '17.04.23-18.04.23',
            startDate: '18.04.23',
            status: 'Сбор заявок'
        },
        {
            number: 3,
            name: 'Аукцион на закупку в интересах компании ООО "Компания"',
            receptionDate: '17.04.23-18.04.23',
            startDate: '18.04.23',
            status: 'Идут торги'
        },
        {
            number: 4,
            name: 'Аукцион на закупку в интересах компании ООО "Кот"',
            receptionDate: '17.04.23-18.04.23',
            startDate: '18.04.23',
            status: 'В архиве'
        },
    ])
    const [openAddModal, setOpenAddModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [currentEditAuction, setCurrentEditAuction] = useState(null)
    return (
        <div className="home">
            <BreadCrumbs links={[
                { name: "Главная", link: "/" }
            ]} />
            <h2 className="home__title">Аукционы</h2>
            <div className="home__info">
                <div className="info__top">
                    <Button variant="primary" onClick={() => setOpenAddModal(true)}>
                        + Добавить аукцион
                    </Button>
                    <div className="info__search">
                        <input placeholder="Найти аукцион" type="text" />
                        <img src={loupe} alt='loupe' />
                    </div>
                </div>
                <div className="info__filters">
                    <img className="info__filtersImg" src={filterImg} alt="filter" />
                    <div className="info__filters__items">
                        {filterItems.map((item, index) => {
                            return <DropDownFilter key={index} title={item} />
                        })}
                    </div>
                    <Button variant="primary">
                        <img src={cross} alt="cross" />
                        Сбросить фильтры
                    </Button>
                    <Button variant="info">Применить</Button>
                </div>
                <div className="info__tableWrapper">
                    <table>
                        <thead>
                            <tr className="tableItem">
                                <td>№</td>
                                <td>Название аукциона</td>
                                <td className="center">Прием заявок</td>
                                <td className="center">Проведение</td>
                                <td className="center">Статус</td>
                            </tr>
                        </thead>
                        <tbody>
                            {auctionItems.map((item) => {
                              return <tr className="tableItem" key={item.number}>
                                  <td>{item.number}</td>
                                  <td className="tableItem__name">{item.name}</td>
                                  <td className="center">{item.receptionDate}</td>
                                  <td className="center">{item.startDate}</td>
                                  <td className="center">{item.status}</td>
                                  <td className="tableItem__edit">
                                      <img src={edit} alt="edit" onClick={() => {
                                          setCurrentEditAuction(item)
                                          setOpenEditModal(true)
                                      }}/>
                                  </td>
                              </tr>
                            })}
                        </tbody>
                    </table>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
            {openAddModal &&
                <Modals
                    type='add'
                    show={openAddModal}
                    onHide={() => setOpenAddModal(false)}
                    setAuctionItems={setAuctionItems}
                />
            }
            {currentEditAuction &&
                <Modals
                    type='edit'
                    show={openEditModal}
                    onHide={() => setOpenEditModal(false)}
                    currentAuction={currentEditAuction}
                    setAuctionItems={setAuctionItems}
                />
            }
        </div>
    );
};

export default Home;
