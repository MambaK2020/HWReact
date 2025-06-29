import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../components/CatImage.module.css'

const CatImage = () => {
  const [imageUrl, setImageUrl] = useState('')

  const fetchCatImage = async () => {
    const response = await axios.get(
      'https://api.thecatapi.com/v1/images/search'
    )
    const imageUrl = response.data[0].url
    setImageUrl(imageUrl)
  }

  useEffect(() => {
    fetchCatImage()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Cat 🐱</h1>
      {imageUrl && (
        <img src={imageUrl} alt="A random cat" className={styles.image} />
      )}
      <button className={styles.button} onClick={fetchCatImage}>
        NEW CAT
      </button>
    </div>
  )
}

export default CatImage
