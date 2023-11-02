import { useEffect, useState } from 'react'
import '../ressources/App.css'
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

function App() {
	const savedCart = localStorage.getItem('Card')
	const [shoppingCart, setShoppingCart] = useState(
		savedCart ? JSON.parse(savedCart) : []
	)

	useEffect(() => {
		localStorage.getItem('Card')
		localStorage.setItem('Card', JSON.stringify(shoppingCart))
	}, [shoppingCart])

	return (
		<div className="App">
			<Banner />
			<div className="main">
				<Cart shoppingCart={shoppingCart} updateCart={setShoppingCart} />
				<ShoppingList
					shoppingCart={shoppingCart}
					updateCart={setShoppingCart}
				/>
			</div>
			<Footer />
		</div>
	)
}

export default App
