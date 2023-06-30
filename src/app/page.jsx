import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>
      Better design for your digital products.
      </h1>
      <p className={styles.desc}>
      With a simple button click, We bring your Ideas To Life, Turning them into Reality.
      </p>
      <button className={styles.btn}>Contact</button>
      
    </div>
    <div className={styles.item}>
      <Image width={500} height={500} src="https://images.pexels.com/photos/17269311/pexels-photo-17269311/free-photo-of-fashion-people-woman-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className={styles.img} />
    </div>
  </div>
  )
}
