import React, {useState, useEffect} from "react";

import { ButtonUi, ButtonUiType } from "../../shared/UI/ButtonUi";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

type auctionItem = {
    number: number,
    name: string,
    receptionDate: string,
    startDate: string,
    status: string
}

interface AddAuctionModalProps {
    showModal: boolean,
    onHide: () => void,
    currentAuction: auctionItem,
    editAuctionItem: (newAuctionName:string, currentEditAuctionId:number) => void
}

export const EditAuctionModal:React.FC<AddAuctionModalProps> = ({showModal, onHide, currentAuction, editAuctionItem}) => {
    const [newAuctionName, setNewAuctionName] = useState('')

    useEffect(() => {
        currentAuction ? setNewAuctionName(currentAuction.name) : setNewAuctionName('')
    }, [currentAuction])

    const editAuction = () => {
        editAuctionItem(newAuctionName, currentAuction.number)
        onHide()
    }
    return (
        <Modal
            show={showModal}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
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
                <ButtonUi title={'Сохранить изменения'} type={ButtonUiType.PRIMARY} event={editAuction}/>
            </Modal.Footer>
        </Modal>
    )
}
