import { useState } from 'react'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	const [error, setError] = useState('')

	const handleMailError = (e) => {
		if (!e.includes('@')) {
			setError('L\'adresse e-mail doit contenir "@"')
		} else {
			setError('')
		}
	}

	const add2Newsletter = () => {
		if (!error)
			alert(
				`Votre adresse : ${inputValue} a bien été ajouté à notre carnet de plantofiles !`
			)
	}

	return (
		<footer>
			<form>
				<h3>📬 Newsletter</h3>
				<p className="nl">
					Abonnez-vous à la newsletter et découvrez tous nos conseils pour
					prendre soin de vos plantes 🌱✨
				</p>
				<div className="form-container">
					<label for="email"> Email </label>
					<div className="mail">
						<input
							type="email"
							name="email"
							placeholder="Saisissez_votre_adresse@mail.fr"
							onChange={(e) => setInputValue(e.target.value)}
							onBlur={(e) => handleMailError(e.target.value)}
						/>
						{error && <p className="error-message">{error}</p>}
					</div>

					<button onClick={() => add2Newsletter()}>Ajoutez-moi !</button>
				</div>
			</form>

			<div className="container-mention">
				<p>Mentions légales</p>
				<p className="mentions-legales">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					faucibus libero sit amet lorem varius consequat. Nunc at risus ut
					neque consectetur maximus. Proin rhoncus sapien id nisi semper
					interdum. Nullam laoreet diam eget magna cursus posuere. Morbi et nisl
					nec libero luctus vehicula venenatis ac dolor. <br></br>
					<br></br>
					Suspendisse justo metus, iaculis sed lacus et, congue luctus tellus.
					Ut accumsan hendrerit sem, vitae egestas nulla mattis eget. Vestibulum
					semper vel dolor a vestibulum. Suspendisse tortor orci, pretium at
					feugiat et, fringilla quis nibh. Nulla ornare purus nisl, eget
					efficitur lectus ultricies nec. Pellentesque vitae nibh sed ipsum
					ultrices fermentum. Morbi consequat hendrerit leo, vel placerat ante
					blandit vitae. In consectetur felis vel dolor bibendum convallis. In
					mollis eros eros, quis posuere arcu commodo sit amet.
				</p>
			</div>
		</footer>
	)
}

export default Footer
