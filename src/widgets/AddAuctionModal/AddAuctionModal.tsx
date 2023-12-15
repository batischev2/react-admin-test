import React, {useState} from "react";

import { ButtonUi, ButtonUiType } from "../../shared/UI/ButtonUi";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface AddAuctionModalProps {
    showModal: boolean,
    onHide: () => void,
    addNewItem: (name: string) => void
}

export const AddAuctionModal:React.FC<AddAuctionModalProps> = ({showModal, onHide, addNewItem}) => {
    const [addAuctionName, setAddNewAuctionName] = useState('')

    const addNewAuction = () => {
        if (!addAuctionName) return
        addNewItem(addAuctionName)
        setAddNewAuctionName('')
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
                <ButtonUi title={'Добавить новый аукцион'} type={ButtonUiType.PRIMARY} event={addNewAuction}/>
            </Modal.Footer>
        </Modal>
    )
}
