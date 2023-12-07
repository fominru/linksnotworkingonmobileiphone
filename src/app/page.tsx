import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="/page1" className={styles.card}>
          <h2>Page 1</h2>
          <p>Click me</p>
        </Link>
      </div>
    </main>
  )
}
