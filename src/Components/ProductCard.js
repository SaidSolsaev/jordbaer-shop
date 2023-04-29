import React, { useContext } from 'react'
import { Card, Button, Form} from 'react-bootstrap'
import { CartContext } from '../Utils/CartContext'
import styled from 'styled-components'
import {BsTrashFill} from "react-icons/bs"
import {MdRemove, MdAdd} from "react-icons/md"


export default function ProductCard(props) {
    const product = props.product
    const cart = useContext(CartContext)
    const productQty = cart.getProrductQty(product.id);
    
    

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Img src={product.pic} />
                <Card.Text>{product.price.toFixed(2)} Kr</Card.Text>
                {productQty > 0 ? 
                    <>
                        <QtyContainer>
                            <Button onClick={() => cart.removeOneFromCart(product.id)}><MdRemove color='red'/></Button>
                            <Form.Label >{productQty}</Form.Label>
                            <Button onClick={() => cart.addOneToCart(product.id)} ><MdAdd color='green'/></Button>
                        </QtyContainer>
                        <DeleteBtn>
                            <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)}><BsTrashFill /></Button>
                        </DeleteBtn>
                    </>
                    :
                    <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>Legg til i handlekurv</Button>
                }
                
            </Card.Body>
        </Card>
    )
}


const QtyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    Button{
        // width: 40px;
        background: none;
        font-size: 20px;
        
        &:hover{
            border: 2px solid blue;
            background: none;
        }
    }

    label.form-label{
        font-size: 22px;
    }
`;

const DeleteBtn = styled.div`
    margin-top: 10px;

    
`;