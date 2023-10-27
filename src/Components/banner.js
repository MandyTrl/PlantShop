import bannerImg from '../ressources/assets/plantshop.avif'

function Banner() {
	const title = 'La maison jungle'
	return (
		<div>
			<img src={bannerImg} alt="banner-lmj" className="banner-lmj" />
			<div className="banner">
				<h1>{title}</h1>
				<p className="description">
					Ici achetez toutes les plantes dont vous avez toujours rêvé 🪴
				</p>
			</div>
		</div>
	)
}

export default Banner
