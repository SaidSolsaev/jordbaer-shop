import React, { useContext, useState } from 'react'
import {Button, Container, Navbar, Modal, Row, Col} from "react-bootstrap"
import { CartContext } from '../Utils/CartContext'
import CartProduct from '../Components/CartProduct'
import {FaShoppingCart} from "react-icons/fa"
import styled from 'styled-components'
import {BsArrowDown} from "react-icons/bs"
import {getProductData} from "../data/OurProducts"


export default function Success() {
    const cart = useContext(CartContext);
    const getLocalStorage = () => {
        const cartData = localStorage.getItem('cartdata')
        if (cartData) {
          return JSON.parse(cartData)
        } else {
          return []
        }
    }
    
    const [orderList, setOrderList] = useState(getLocalStorage())

    return (
        <div>
            
            

            
        </div>
    )
}
