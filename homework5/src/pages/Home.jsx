import React from 'react'
import g12 from '../assets/svg/g12.svg'
import apple from '../assets/svg/apple.svg'
import google from '../assets/svg/google.svg'
import twitter from '../assets/svg/twitter.svg'
import pushapple from '../assets/svg/pushapple.svg'
import pushgoogle from '../assets/svg/pushgoogle.svg'
import pushtwitter from '../assets/svg/pushtwitter.svg'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.frame2}>
        <img className={styles.logo} src={g12} alt="logo" />
        <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
        <h3 className={styles.paragraph}>
          Sign in with
        </h3>
        <div>
          <img src={apple} alt="appleIcon" />
          <img src={google} alt="googleIcon" />
          <img src={twitter} alt="twitterIcon" />
        </div>
      </div>

      <div>
        <img src={g12} alt="logo" />
        <h1>LIFE IS WASTED ON THE LIVING</h1>
        <h3>
          Sign in with
        </h3>
        <div>
          <img src={pushapple} alt="appleIcon" />
          <img src={google} alt="googleIcon" />
          <img src={twitter} alt="twitterIcon" />
        </div>
      </div>

      <div>
        <img src={g12} alt="logo" />
        <h1>LIFE IS WASTED ON THE LIVING</h1>
        <h3>
          Sign in with
        </h3>
        <div>
          <img src={apple} alt="appleIcon" />
          <img src={pushgoogle} alt="googleIcon" />
          <img src={twitter} alt="twitterIcon" />
        </div>
      </div>

      <div>
        <img src={g12} alt="logo" />
        <h1>LIFE IS WASTED ON THE LIVING</h1>
        <h3>
          Sign in with 
        </h3>
        <div>
          <img src={apple} alt="appleIcon" />
          <img src={google} alt="googleIcon" />
          <img src={pushtwitter} alt="twitterIcon" />
        </div>
      </div>
    </div>
  )
}

export default Home
