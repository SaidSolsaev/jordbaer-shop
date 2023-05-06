import React, { useContext, useState } from 'react'
import {Button, Container, Navbar, Modal, Form} from "react-bootstrap"
import { addProduct, ProductsData } from '../data/OurProducts';

export default function AdminPage() {
    const [title, setTitle] = useState("");
    const [show, setShow] = useState(false)

    const handleAddProd = () => {
        addProduct("saga" , 109.00)
        console.log(ProductsData)
    }

    const handleOpen = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (

        <Container style={{marginTop: "60px"}}>
            
            <Button onClick={handleOpen}>Add Product</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Tittel</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Navnet til produkt"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Pris</Form.Label>
                            <Form.Control 
                                type='number'
                                placeholder="Hva koster produktet"
                            />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Bilde</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Avbryt
                    </Button>
                    <Button variant="primary" onClick={handleAddProd}>
                        Legg til produkt
                    </Button>
                </Modal.Footer>
      </Modal>
            
        </Container>
    )
    }
