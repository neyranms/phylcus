import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsGrid3X3GapFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neyran portfolio</title>
        <meta name="a website about Neyran Melo" content="news soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Neyran Melo
          <a>
          
          <span className={styles.logo}>
            <Image src="/perfil.png" alt="perfil" width={220} height={250} />
          </span>
        </a>
        </h1>

        <p className={styles.description}>Fullstack Developer{''}
          <code className={styles.code}>Project Manager</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/neyranms" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Projects completed, in progress or with errors unknown to humanity.</p>
          </a>

          <a href="www.linkedin.com/in/neyran" className={styles.card}>
            <h2>Linkedin &rarr;</h2>
            <p>Open professional contact for new opportunities in this World, Mars and Moon.</p>
          </a>

          <a
            href="https://discord.gg/xx5XDKkDQg"
            className={styles.card}
          >
            <h2>Join in Discord &rarr;</h2>
              email: neyran22@gmail.com
              cel:+55 11 9 8284-6109
          </a>

          <a
            href="https://linktr.ee/neyranx"
            className={styles.card}
          >
            <h2>Social Media &rarr;</h2>
            <p>
            videos, photos, edits and broadcasts uploaded on web platforms.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}