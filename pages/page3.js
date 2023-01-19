import styles from '../styles/page3.module.css'

export default function page3 () {
  return (
    <div className={styles.box}>
      <div className={styles.head}>
        <h1>Cafe Prep</h1>
      </div>
      <nav className={styles.body}>
        <h2>Drink</h2>
        <ul>
          <li>Coffee</li>
          <li>Latte</li>
          <li>Espresso</li>
        </ul>
      </nav>
    </div>
  )
}
