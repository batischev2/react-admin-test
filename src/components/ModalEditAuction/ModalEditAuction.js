import React, {useState, useEffect} from "react";

import ModalLayout from "../ModalLayout/ModalLayout";

import "./modalEditAuction.scss";

export const ModalEditAuction = ({
    active,
    close,
    currentAuction,
    setAuctionItems
}) => {
    const [newAuctionName, setNewAuctionName] = useState('')
    useEffect(() => {
        setNewAuctionName(currentAuction.name)
    }, [currentAuction])

    const onChangeHandler = (e) => {
        setNewAuctionName(e.target.value)
    }

    const editAuction = () => {
        setAuctionItems((prevValue) => {
            return prevValue.map((item) => {
                if (item.number === currentAuction.number) {
                    return {...item, name: newAuctionName}
                }
                return item
            })
        })
        close(false)
    }

    return (
        <ModalLayout active={active} close={close}>
            <div className='modalEditAuction'>
                <h3 className='modalEditAuction__title'>Редактировать аукцион </h3>
                <div className='modalEditAuction__inputWrapper'>
                    <span>Название аукциона*</span>
                    <input
                        value={newAuctionName}
                        type='text'
                        placeholder='Название аукциона'
                        onChange={onChangeHandler}
                    />
                </div>
                <button onClick={editAuction} className={newAuctionName ? "modalAddAuction__create" : "modalAddAuction__create disable"}>
                    Сохранить изменения
                </button>
            </div>
        </ModalLayout>
    );
};

export default ModalEditAuction;
