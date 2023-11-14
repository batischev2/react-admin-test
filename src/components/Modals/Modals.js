import React, {useState, useEffect} from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const Modals = ({
    show,
    onHide,
    currentAuction,
    setAuctionItems,
    type
}) => {
    const [newAuctionName, setNewAuctionName] = useState('')
    const [addAuctionName, setAddNewAuctionName] = useState('')
    useEffect(() => {
        currentAuction ? setNewAuctionName(currentAuction.name) : setNewAuctionName('')
    }, [currentAuction])

    const editAuction = () => {
        setAuctionItems((prevValue) => {
            return prevValue.map((item) => {
                if (item.number === currentAuction.number) {
                    return {...item, name: newAuctionName}
                }
                return item
            })
        })
        onHide()
    }

    const addNewAuction = () => {
        if (!addAuctionName) return
        setAuctionItems((prevValue) => [...prevValue, {
            number: prevValue.length + 1,
            name: addAuctionName,
            receptionDate: '17.04.23-18.04.23',
            startDate: '18.04.23',
            status: 'Сбор заявок'
        }])
        setAddNewAuctionName('')
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {type === 'add' &&
                <>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Добавить новый аукцион
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Название аукциона*</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Название аукциона*"
                                    value={addAuctionName}
                                    onChange={(e) => setAddNewAuctionName(e.target.value)}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Комментарий к аукциону</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={addNewAuction}>Добавить новый аукцион</Button>
                    </Modal.Footer>
                </>
            }
            {type === 'edit' &&
                <>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Редактировать аукцион №{currentAuction.number}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Название аукциона*</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Название аукциона*"
                                    value={newAuctionName}
                                    onChange={(e) => setNewAuctionName(e.target.value)}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Комментарий к аукциону</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={editAuction}>Сохранить изменения</Button>
                    </Modal.Footer>
                </>
            }
        </Modal>
    );
};

export default Modals;
