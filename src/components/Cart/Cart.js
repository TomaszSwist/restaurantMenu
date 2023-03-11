import classes from './Cart.module.css'

const Cart = () => {
	const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => <li>{item.name}</li>)

	return (
		<div>
			<ul className={classes['cart-items']}>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>$30.00</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</div>
	)
}

export default Cart