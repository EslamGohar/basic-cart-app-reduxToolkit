import React from 'react'
import { Button, Container, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, deleteFromCart } from '../redux/slices/cart-slice'

export default function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const totalPrice = cart.reduce((acc, item) => {
    acc += item.price * item.quantity
    return acc
  }, 0)

  return (
	 <Container>
    <h1 className='py-5'>Here's Your Cart</h1>
    <Button variant="primary" className="mb-3" onClick={() => dispatch(clearCart())}>Clear Cart</Button>
    <h4>Total Price: {totalPrice.toFixed()}$</h4>
    <Table striped bordered hover size="sm" className='mt-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
       {cart.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td><Image src={item.images[0]} alt={item.title} style={{width: '100px', height: '90px'}} /></td>
            <td>{item.quantity}</td>
            <td>{item.price}$</td>
            <td><Button variant="danger" onClick={() => dispatch(deleteFromCart(item))}>Delete</Button></td>
          </tr>
       ))}
      </tbody>
    </Table>
   </Container>
  )
}
