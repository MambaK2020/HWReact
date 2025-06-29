import React, { useState } from 'react'
import styles from './styles/CityCelector.module.css'


const CityCelector = ({cities,onCitySelect}) => {
	const [selectedCityName, setSelectedCityName] = useState('')

	const handleChange = event => {
		const name = event.target.value
		setSelectedCityName(name)

		const foundCity = cities.find(city => city.name === name)
		onCitySelect(foundCity)
	}
	return (
		<div className={styles.main}>
			<h1 className={styles.title}>Выберите город:</h1>
			<form className={styles.form}>
				<select className={styles.select} value={selectedCityName} onChange={handleChange}>
					<option value=''>Выбери</option>
					{cities.map(city => (
						<option key={city.name} value={city.name}>
							{city.name}
						</option>
					))}
				</select>
			</form>
		</div>
	)
}

export default CityCelector