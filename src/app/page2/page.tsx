import styles from './page2.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>Main</h2>
          <p>Click me</p>
        </Link>
      </div>
    </main>
  )
}
