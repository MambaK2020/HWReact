import React, { useRef, useEffect } from 'react'

const ValueDisplay = ({ value }) => {
  const previousValue = useRef()

  useEffect(() => {
    previousValue.current = value
  }, [value])

  return (
    <div>
      <p>Текущие значение: {value}</p>
      <p>Предыдущие значение: {previousValue.current}</p>
    </div>
  )
}

export default ValueDisplay
