import React, { useState } from 'react'

const Answer = ({ a, b, updatePoints }) => {


  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e)=>{

    e.preventDefault()
    updatePoints(inputValue)
    setInputValue('')

  }


	return (
		
			<form onSubmit={handleSubmit}>
				<input
					type='number'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Введите ответ'
				/>
				<button type='submit'>Ответить</button>
			</form>
		
	)
}

export default Answer