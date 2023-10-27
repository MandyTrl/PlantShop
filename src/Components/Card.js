function Card() {
	const plantsAdd = [
		{ name: 'Monstera', price: '8' },
		{ name: 'Lierre', price: '10' },
		{ name: 'Bouquet de Fleurs', price: '18' },
	]

	let total = 0

	for (let i = 0; i < plantsAdd.length; i++) {
		total = total + +plantsAdd[i].price
	}

	return (
		<div className="card">
			<h3>Récapitulatif de votre panier</h3>
			<div className="list-card">
				<ul>
					<li>{plantsAdd[0].name}</li>
					<li>{plantsAdd[1].name}</li>
					<li>{plantsAdd[2].name}</li>
				</ul>
				<ul>
					<li>{plantsAdd[1].price}€</li>
					<li>{plantsAdd[2].price}€</li>
					<li>{plantsAdd[0].price}€</li>
				</ul>
			</div>

			<div className="total">Total {total}€</div>
		</div>
	)
}

export default Card
