import React from 'react'
import products from '../products'
import Product from '../components/Products'
import { Row ,Col } from 'react-bootstrap'
const HomeScreen = () => {
    return (
        <div>
            <h1> Latest Products</h1>
            <Row>
                { products.map( product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product  product={product}/>
                        {/* <h3> {product.name}</h3> */}
                    </Col>
                    
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
