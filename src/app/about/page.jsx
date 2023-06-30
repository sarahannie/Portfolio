import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image />
      </div>
      <div className={styles.text}>Text</div>
    </div>
  )
}

export default About