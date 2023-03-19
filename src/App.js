import { useState } from 'react'
import Cart from './components/Cart/Cart'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'

function App() {
	const [cartClicked, setCartClicked] = useState(false)

	const showCartHandler = () => {
		setCartClicked(true)
	}
	const hideCartHandler = () => {
		setCartClicked(false)
	}

	return (
		<CartProvider>
			{cartClicked && <Cart onHideCart={hideCartHandler}/>}
			<Header onShowCart={showCartHandler}/>
			<main>
				<Meals />
			</main>
		</CartProvider>
	)
}

export default App
