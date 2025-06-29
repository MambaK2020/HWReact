import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">Main Page</Link>
      <Link className={styles.link} to="/articles">Articles</Link>
      <Link className={styles.link} to="/articles/1">Article 1</Link>
    </nav>
  )
}

export default Navbar