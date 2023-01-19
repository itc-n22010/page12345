import Link from 'next/link'
import styles from '../styles/page1.module.css'

export default function Nav () {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link href='/' legacyBehavior><a>優木</a></Link>
        </li>
        <li>
          <Link href='/' legacyBehavior><a>せつ菜</a></Link>
        </li>
        <li>
          <Link href='/' legacyBehavior><a>lovelive</a></Link>
        </li>
        <li>
          <Link href='/' legacyBehavior><a>NIJIGAKU</a></Link>
        </li>
      </ul>
    </nav>
  )
}
