import Head from 'next/head'
import styles from '../styles/Home.module.css'
import $ from "jquery"
import TextInput from "../components/inputSession"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invoice generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}
        // onDragStart={() => console.log('hi')}
        // onDragOver={(e) => console.log($('.editArea').css())}
        // onDragLeave={() => console.log('bye')}
        >

        <div className={styles.editArea}
          draggable>
          <h1 className={styles.title} >  Invoice Generator </h1>
          <TextInput
          label="hi"></TextInput>
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
