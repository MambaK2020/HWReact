import React, { useState, useEffect } from 'react'
import Answer from './Answer'
import styles from '../styles/MathQuiz.module.css'

const MathQuiz = () => {

  const [a, setA] = useState(0)
  const [b,setB] = useState(0)
  const [correctAnswer, setCorrectAnswer]= useState(0)
  const[score,setScore] = useState(0)
  
  

  const generateNewTask = () => {

    const newA = Math.floor(Math.random()*10)+1
    const newB = Math.floor(Math.random() * 10) + 1
    setA(newA)
    setB(newB)

  }
useEffect(() => {
	generateNewTask()
}, [])


const updatePoints = (userInput) => {
	const correct = a + b
	if (parseInt(userInput) === correct) {
		setScore(prev => prev + 1)
	}

  generateNewTask()
}
  return (
		<div className={styles.container}>
			<h3>Ваши очки:{score}</h3>
			<p>
				{a}+{b} = ?
			</p>

			<Answer a={a} b={b} updatePoints={updatePoints} />
		</div>
	)
}

export default MathQuiz