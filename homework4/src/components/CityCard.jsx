import React from 'react'
import styles from './styles/CityCard.module.css'

const CityCard = ({city}) => {

  return (
		<div className={styles.card}>
			<h3 className={styles.title}>{city.name}</h3>
			<img className={styles.img} scr={city.imageUrl} alt={city.name} />
			<p className={styles.description}>{city.description}</p>
      <ul className={styles.factsList}>
      {city.facts.map((facts, index)=>(
        <li key={index}>{facts}</li>
      ))
    }
      </ul>
		</div>
	)
}

export default CityCard