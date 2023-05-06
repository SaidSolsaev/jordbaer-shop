import { useContext } from "react";
import { CartContext } from "../Utils/CartContext";
import { getProductData } from "../data/OurProducts";
import { Button, Col, Row } from "react-bootstrap";
import {BsTrashFill} from "react-icons/bs"

function CartProduct(props){
    const cart = useContext(CartContext);
    const id = props.id;
    const qty = props.qty;
    const productData = getProductData(id);
    const sumItems = cart.getProrductQty(id)

    function checkSale(){
        let sale = 0

        switch(sumItems){
            case 3:
                return sale = 10
            case 6:
                return sale = 20
        }
    
        return sale
        
    }

    return(
        <>
        
            <Row>
                <Col>
                    <p>{productData.title}</p>
                    <p>{(productData.price).toFixed(2)} Kr/stk</p>
                    <p>Rabatt: {checkSale().toFixed(2)} Kr</p>
                </Col>
                <Col>
                    <p>Antall: {qty}</p>
                </Col>

                <Col>
                    <p>{(qty * productData.price - checkSale()).toFixed(2)} Kr</p>
                </Col>
                
            </Row>
            <Button size="xl" variant="danger" onClick={() => cart.deleteFromCart(id)}><BsTrashFill /></Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;