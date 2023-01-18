import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/products-slice';
import { addToCart } from '../redux/slices/cart-slice';

function Products() {
	const dispatch = useDispatch()
	const products = useSelector((state) => state.products)

	useEffect(() => { // Once the user opens/render the page
	  dispatch(fetchProducts())
	}, [])
	
  return (
	<Container className="py-5">
		<Row className="py-5">
			{products.map((product) => (
				<Col key={product.id}>
					<Card style={{ width: '18rem', marginTop:'15px', border: '1px solid #ccc' }}>
						<Card.Img style={{height: '200px'}} variant="top" src={product.images[0]} />
						<Card.Body>
							<Card.Title>{product.title}</Card.Title>
							<Card.Text>
								{product.description}
							</Card.Text>
							<Card.Text>
								{product.price}$
							</Card.Text>
							<Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	</Container>
  )
}

export default Products