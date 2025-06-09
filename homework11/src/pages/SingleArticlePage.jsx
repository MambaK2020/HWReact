import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './SingleArticlePage.module.css'


const SingleArticlePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Single Article Page</h1>
      <p className={styles.text}>Article ID: {id}</p>
      <button className={styles.button} onClick={()=> navigate('/articles')}>Back to the list of articles</button>
    </div>
  )
}

export default SingleArticlePage
