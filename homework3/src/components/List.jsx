import React, { useState } from 'react'
import styles from '../styles/List.module.css'





const List = () => {

const [people, setPeople] = useState([
	{ id: 1, name: 'Иван', age: 20 },
	{ id: 2, name: 'Мария', age: 22 },
	{ id: 3, name: 'Алексей', age: 21 },
	{ id: 4, name: 'Марина', age: 19 },
	{ id: 5, name: 'Даша', age: 23 },
	{ id: 6, name: 'Глеб', age: 24 },
	{ id: 7, name: 'Дима', age: 18 },
	{ id: 8, name: 'Гриша', age: 20 },
	{ id: 9, name: 'Серафим', age: 21 },
]);

const handleDelete = (id) => {

  const updatePeople = people.filter(person => person.id !==id)
  setPeople(updatePeople)
}

  return (
    <div className={StyleSheet.container}>
      <h2>Список людей</h2>
      {people.map((person)=>(
        <div key ={person.id} className={styles.item}>
          <span>{person.name}, {person.age} лет</span>
          <button className={styles.button} onClick={() => handleDelete(person.id)}>Удалить</button>
    </div>
  ))}
</div>
  )}

export default List