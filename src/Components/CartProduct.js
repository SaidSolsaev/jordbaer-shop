import { useContext } from "react";
import { CartContext } from "../Utils/CartContext";
import { getProductData } from "../data/OurProducts";
import { Button } from "react-bootstrap";
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
            <h2>{productData.title}</h2>
            <p>Antall: {qty}</p>
            <p>{(productData.price).toFixed(2)} Kr</p>
            <p>Rabatt: {checkSale().toFixed(2)} Kr</p>
            <p>Totalt: {(qty * productData.price - checkSale()).toFixed(2)} Kr</p>
            <Button variant="danger" size="sm" onClick={() => cart.deleteFromCart(id)}><BsTrashFill /></Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;