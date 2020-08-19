import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Invoice generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.editArea}
          style={{ width: this.state.boardWidth }}
          draggable
          onDragStart={() => console.log('hi')}
          onDragOver={() => console.log('in progress')}
          onDragLeave={() => console.log('bye')}
        >
          <h1 className={styles.title}>  Invoice Generator </h1>
        </div>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Isabella </a>
      </footer>
    </div>
  )
}
