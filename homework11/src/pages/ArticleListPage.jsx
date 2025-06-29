import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ArticleListPage.module.css'

const ArticleListPage = () => {
  return (
    <div className={styles.container}>
      <h1>Articles List</h1>
      <ul className={styles.list}>
        <li><Link to="/articles/1">Article 1</Link></li>
        <li><Link to="/articles/2">Article 2</Link></li>
        <li><Link to="/articles/3">Article 3</Link></li>
      </ul>
    </div>
  )
}

export default ArticleListPage
