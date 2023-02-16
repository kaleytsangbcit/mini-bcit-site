import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
// import Link from 'next/link'
import { NavBar } from '../comp/navbar.js'
import { MenuProps } from '../comp/menuprops.js'
// import { NavArrows } from '../comp/navigationArrows.js'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />        
        <meta meta property="og:title" content="Assignment #1 - Home Page" />
        <meta meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>

      <NavBar />


      <div className={styles.homecont}>
        <div className={styles.hometitle}>
          <h1>An investment in knowledge pays the best interest.</h1>
        </div>

        <div className={styles.line}></div>

        <div className={styles.hometext}>
          <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
        </div>

        <div className={styles.buttons}>
          <a href="/about"><button>More About Us</button></a>
          <a href="/contact"><button>Contact Us</button></a>
        </div>

        </div>

        <div className={styles.arrows}>
          <a href="/about">
            <span>
              <img className={styles.downarrow} src="/icons/downwardArrow.png"></img>
            </span>
          </a>
        </div>





      
      </main>
    </>
  )
}
