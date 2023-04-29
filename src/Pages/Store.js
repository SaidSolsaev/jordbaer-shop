import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ProductsData } from '../data/OurProducts'
import ProductCard from '../Components/ProductCard'

export default function Store() {
    return (
        <>
            <h1 align="center" className='p-4'>Våre produkter</h1>
            <Row className='g-4' xs={1} md={4}>
                {ProductsData.map((product, idx) => (
                    <Col key={idx} align="center">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </>
        
    )
}
