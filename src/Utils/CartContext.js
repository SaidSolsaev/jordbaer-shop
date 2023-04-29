import React from 'react'
import { createContext, useState } from 'react'
import { getProductData } from '../data/OurProducts'

export const CartContext = createContext({
    items: [],
    getProrductQty: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalSum: () => {},
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProrductQty(id){
        const qauntitty = cartProducts.find(product => product.id === id)?.qty;
        
        if (qauntitty === undefined){
            return 0
        }
        
        
        return qauntitty
        
        
    }

    function addOneToCart(id){
        const qty = getProrductQty(id);
        
        if (qty === 0){
            setCartProducts([
                ...cartProducts,
                {
                    id: id,
                    qty: 1
                } 
            ])
        } else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id 
                    ? {...product, qty: product.qty + 1}
                    : product
                )
            )
        }
    }
    

    function deleteFromCart(id){
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currProduct => {
                return currProduct.id !== id;
            })
        )
    }

    function removeOneFromCart(id){
        const qty = getProrductQty(id);

        if (qty === 1){
            deleteFromCart(id);
        }else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id 
                    ? {...product, qty: product.qty - 1}
                    : product
                )
            )
        }
    }

    function getTotalSum(){
        let totalSum = 0

        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            
            let sale = 0;
            if (cartItem.qty === 3){
                sale = 20;
            }
            
            return totalSum += ((productData.price * cartItem.qty) - sale);
        });

        return totalSum;
    }

    const contextValue = {
        items: cartProducts,
        getProrductQty,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalSum,
        
    }
    
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;