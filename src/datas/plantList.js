import monstera from '../ressources/assets/monstera.jpg'
import ficuslyrata from '../ressources/assets/ficuslyrata.avif'
import pothosargente from '../ressources/assets/potoargente.avif'
import yucca from '../ressources/assets/yucca.jpeg'
import olivier from '../ressources/assets/olivier.avif'
import geranium from '../ressources/assets/geranium.png'
import basilic from '../ressources/assets/basilic.jpg'
import aloe from '../ressources/assets/aloe.webp'
import succulent from '../ressources/assets/succulent.jpeg'

const plantList = [
	{
		name: 'Monstera',
		category: 'Classique',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
		price: 23,
	},
	{
		name: 'Ficus lyrata',
		category: 'Classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: ficuslyrata,
		price: 20,
	},
	{
		name: 'Pothos argenté',
		category: 'Classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothosargente,
		price: 17,
	},
	{
		name: 'Yucca',
		category: 'Classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: yucca,
		price: 15,
	},
	{
		name: 'Olivier',
		category: 'Extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 33,
	},
	{
		name: 'Géranium',
		category: 'Extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: geranium,
		price: 10,
	},
	{
		name: 'Basilique',
		category: 'Extérieur',
		id: '7ie',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: basilic,
		price: 5,
	},
	{
		name: 'Aloe',
		category: 'Plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: aloe,
		price: 7,
	},
	{
		name: 'Succulente',
		category: 'Plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
	},
]

export default plantList
