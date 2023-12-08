import styles from './page.module.css'
import Link from "next/link"

const links = [
  {text: "Page 1", href: "/page1"},
  {text: "Page 2", href: "/page2"},
]
export default function Home() {
  return (
    <main className={styles.main}>
      <Links/>
    </main>
  )

  function Links() {
    return (<div className={styles.grid}>
      {links?.map((link, key) =>
        <Link key={key} href={link.href} className={styles.card}>
          <h2>{link.text}</h2>
          <p>Click me</p>
        </Link>
      )}
    </div>)
  }
}


