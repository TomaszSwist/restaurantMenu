import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = props => {
	const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => <li>{item.name}</li>)

	return (
		<Modal onHideCart={props.onHideCart}>
			<ul className={classes['cart-items']}>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>$30.00</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	)
}

export default Cart
