import React from 'react'
import styles from '../styles/UserItem.module.css'

const UserItem = ({name}) => {
  return (
    <div className={styles.item}>{name}</div>
  )
}

export default UserItem