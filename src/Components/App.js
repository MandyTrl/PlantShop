import '../ressources/App.css'
import Banner from './Banner'
import Cart from './Card'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

function App() {
	return (
		<div className="App">
			<Banner />
			<div className="main">
				<Cart />
				<ShoppingList />
			</div>
			<Footer />
		</div>
	)
}

export default App
