import React, {useState} from "react";

import ModalLayout from "../ModalLayout/ModalLayout";

import "./modalAddAuction.scss";

export const ModalAddAuction = ({
    active,
    close,
    setAuctionItems
}) => {
    const [newAuctionName, setNewAuctionName] = useState('')
    const addNewAuction = () => {
        setAuctionItems((prevValue) => [...prevValue, {
            number: prevValue.length + 1,
            name: newAuctionName,
            receptionDate: '17.04.23-18.04.23',
            startDate: '18.04.23',
            status: 'Сбор заявок'
        }])
        setNewAuctionName('')
        close(false)
    }
    return (
        <ModalLayout active={active} close={close}>
            <div className='modalAddAuction'>
                <h3 className='modalAddAuction__title'>Добавить новый аукцион</h3>
                <div className='modalAddAuction__inputWrapper'>
                    <span>Название аукциона*</span>
                    <input value={newAuctionName} placeholder='Название аукциона' onChange={(e) => setNewAuctionName(e.target.value)}/>
                </div>
                <button onClick={addNewAuction} className={newAuctionName ? "modalAddAuction__create" : "modalAddAuction__create disable"}>
                    Добавить новый аукцион
                </button>
            </div>
        </ModalLayout>
    );
};

export default ModalAddAuction;
