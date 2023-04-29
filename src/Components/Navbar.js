import React, { useContext, useState } from 'react'
import {Button, Container, Navbar, Modal} from "react-bootstrap"
import { CartContext } from '../Utils/CartContext'
import CartProduct from './CartProduct'
import {FaShoppingCart} from "react-icons/fa"
import styled from 'styled-components'
import {BsArrowDown} from "react-icons/bs"

export default function NavbarComponent() {
    const [show, setShow] = useState(false)
    const cart = useContext(CartContext)
    const handleClose = () => {
        setShow(false);
    }

    const handleOpen = () => {
        setShow(true);
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.qty, 0);

    return (
        <Container>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Jordbær</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button style={{border: "none", background: "none", color: "#333", fontSize: "22px"}} onClick={handleOpen}><FaShoppingCart /></Button>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Handlekurv</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p align="center">Varer i handlekurven:</p>
                            {cart.items.map((currProd, idx) => (
                                <CartProduct key={idx}  id={currProd.id} qty={currProd.qty}/>
                            ))}
                            <h1>Sum: {cart.getTotalSum().toFixed(2)} Kr</h1>

                            <Button variant='success'>
                                Bestill
                            </Button>
                        </>
                        :
                        <EmptyCartContainer>
                            <h1 align="center">Handlekurven er tom</h1>
                            <div className='arrow'>
                                <span className='down-arrow'><BsArrowDown  /></span>
                            </div>
                            <Button variant='success' style={{marginRight: "auto", marginLeft: "auto"}}  href='/'>Handle</Button>
                        </EmptyCartContainer>
                    }
                </Modal.Body>
            </Modal>
        </Container>
    );
};

const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .arrow{
        height: 40px;
    }
    svg{
        color: green;
        font-size: 20px;
        animation: jumpInfinite .8s infinite;
    }

    @keyframes jumpInfinite {
        0% {
          margin-top: 0;
        }
        50% {
          margin-top: 20px;
        }
        100% {
          margin-top: 0;
        }
      }
`;