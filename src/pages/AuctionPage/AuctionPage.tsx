import React, {useState} from "react";

import { BreadCrumbsUi } from "../../shared/UI/BreadCrumbsUi";
import {ButtonUi, ButtonUiType} from "../../shared/UI/ButtonUi";
import { DefaultDropDown } from "../../entities/DefaultDropDown";
import { DefaultPagination } from "../../entities/DefaultPagination";
import { AddAuctionModal } from "../../widgets/AddAuctionModal";
import { EditAuctionModal } from "../../widgets/EditAuctionModal";
import Form from 'react-bootstrap/Form';
import { AuctionItem } from "../../types";
import { filterItems } from "../../constants/data";

import loupe from "../../shared/images/loupe.png"
import filterImg from "../../shared/images/filter.png"
import close from "../../shared/images/close.png"
import edit from "../../shared/images/edit.png"

import styles from "./auctionPage.module.scss"

export const AuctionPage = () => {
    const [auctionItems, setAuctionItems] = useState<AuctionItem[]>([
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
    const [currentEditAuction, setCurrentEditAuction] = useState({
        number: 0,
        name: '',
        receptionDate: '',
        startDate: '',
        status: ''
    })

    const addNewAuction = (newAction: string) => {
        setAuctionItems((prevValue) => [...prevValue, {
            number: prevValue.length + 1,
            name: newAction,
            receptionDate: '17.04.23-18.04.23',
            startDate: '18.04.23',
            status: 'Сбор заявок'
        }])
    }

    const editAuctionItem = (newAuctionName: string, currentEditAuctionId: number) => {
        setAuctionItems((prevValue) => {
            return prevValue.map((item) => {
                if (item.number === currentEditAuctionId) {
                    return {...item, name: newAuctionName}
                }
                return item
            })
        })
    }
    return (
        <div className={styles.home}>
            <BreadCrumbsUi links={[
                { name: "Главная", link: "/" }
            ]} />
            <h2 className={styles.home__title}>Аукционы</h2>
            <div className={styles.home__info}>
                <div className={styles.info__top}>
                    <ButtonUi event={() => setOpenAddModal(true)} title={'+ Добавить аукцион'} type={ButtonUiType.PRIMARY} />
                    <div className={styles.info__search}>
                        <Form.Control
                            type="text"
                            placeholder="Найти аукцион"
                        />
                        <img src={loupe} alt='loupe' />
                    </div>
                </div>
                <div className={styles.info__filters}>
                    <img className={styles.info__filtersImg} src={filterImg} alt="filter" />
                    <div className={styles.info__filters__items}>
                        {filterItems.map((item) => {
                            return <DefaultDropDown key={item.title} title={item.title} options={item.options} />
                        })}
                    </div>
                    <ButtonUi
                        title={'Сбросить фильтры'}
                        type={ButtonUiType.PRIMARY}
                        img={<img src={close} alt="cross" />} />
                    <ButtonUi title={'Применить'} type={ButtonUiType.INFO} />
                </div>
                <div className={styles.info__tableWrapper}>
                    <table>
                        <thead>
                        <tr className={styles.tableItem}>
                            <td>№</td>
                            <td>Название аукциона</td>
                            <td>Прием заявок</td>
                            <td>Проведение</td>
                            <td>Статус</td>
                        </tr>
                        </thead>
                        <tbody>
                        {auctionItems.map((item) => {
                            return <tr className={styles.tableItem} key={item.number}>
                                <td>{item.number}</td>
                                <td className={styles.tableItem__name}>{item.name}</td>
                                <td>{item.receptionDate}</td>
                                <td>{item.startDate}</td>
                                <td>{item.status}</td>
                                <td className={styles.tableItem__edit}>
                                    <img src={edit} alt="edit" onClick={() => {
                                        setCurrentEditAuction(item)
                                        setOpenEditModal(true)
                                    }}/>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                    <DefaultPagination pageCount={10} currentPage={2} />
                </div>
            </div>
            <AddAuctionModal
                showModal={openAddModal}
                onHide={() => setOpenAddModal(false)}
                addNewItem={addNewAuction} />
            <EditAuctionModal
                showModal={openEditModal}
                onHide={() => setOpenEditModal(false)}
                currentAuction={currentEditAuction}
                editAuctionItem={editAuctionItem} />
        </div>
    );
};
