import React, {useState, useEffect} from "react";

import ModalLayout from "../ModalLayout/ModalLayout";

import closeImg from "../../assets/images/closeBurger.png"

import "./modal.scss";

export const Modal = ({
    active,
    close,
    currentAuction,
    setAuctionItems,
    type
}) => {
    const [newAuctionName, setNewAuctionName] = useState('')
    const [addAuctionName, setAddNewAuctionName] = useState('')
    useEffect(() => {
        currentAuction ? setNewAuctionName(currentAuction.name) : setNewAuctionName('')
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

    const addNewAuction = () => {
        setAuctionItems((prevValue) => [...prevValue, {
            number: prevValue.length + 1,
            name: addAuctionName,
            receptionDate: '17.04.23-18.04.23',
            startDate: '18.04.23',
            status: 'Сбор заявок'
        }])
        setAddNewAuctionName('')
        close(false)
    }

    return (
        <ModalLayout active={active} close={close}>
            <div className='modal__wrapper'>
                <img className='modal__close' src={closeImg} alt='close' onClick={() => close(false)} />
                {type === 'edit' &&
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
                        <div className='modalEditAuction__inputWrapper'>
                            <span>Комментарий к аукциону*</span>
                            <textarea placeholder='Комментарий к аукциону' />
                        </div>
                        <button onClick={editAuction} className={newAuctionName ? "modalAddAuction__create" : "modalAddAuction__create disable"}>
                            Сохранить изменения
                        </button>
                        <div className='modalEditAuction__warning'>
                            <span>Внимание</span>
                            <p>Если аукцион опубликован, участники будут оповещены о изменениях автоматически.</p>
                        </div>
                    </div>
                }
                {type === 'add' &&
                    <div className='modalAddAuction'>
                        <h3 className='modalAddAuction__title'>Добавить новый аукцион</h3>
                        <div className='modalAddAuction__inputWrapper'>
                            <span>Название аукциона*</span>
                            <input value={addAuctionName} placeholder='Название аукциона' onChange={(e) => setAddNewAuctionName(e.target.value)}/>
                        </div>
                        <div className='modalAddAuction__inputWrapper'>
                            <span>Комментарий к аукциону*</span>
                            <textarea placeholder='Комментарий к аукциону' />
                        </div>
                        <div className='modalAddAuction__bottom'>
                            <button onClick={addNewAuction} className={addAuctionName ? "modalAddAuction__create" : "modalAddAuction__create disable"}>
                                Добавить новый аукцион
                            </button>
                            <div className='modalAddAuction__addFile'>
                                <span>Документы аукциона:</span>
                                <p>Прикрепить файл</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </ModalLayout>
    );
};

export default Modal;
