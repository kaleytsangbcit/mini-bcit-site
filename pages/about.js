import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { NavBar } from '../comp/navbar.js'

const inter = Inter({ subsets: ['latin'] })

export default function About() {

    const [carouselImage, setCarouselImage] = useState(0);

    const images = [
        "/0.jpg",
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.jpg",
        "/5.jpg", 
    ];

    const previousImage = () => {
        if (carouselImage > 0 && images.length - 1) {
            setCarouselImage((carouselImage - 1));
        }
      };
    
      const nextImage = () => {
        if (carouselImage < images.length - 1) {
            setCarouselImage((carouselImage + 1));
        }
      };

      const words = [
        { id: 0, value: "Achieve Excellence" },
        { id: 1, value: "Embrace Innovation" },
        { id: 2, value: "Champion Diversity" },
        { id: 3, value: "Pursue Collaboration" },
        { id: 4, value: "Engage With Respect" }
      ];


  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />        
        <meta meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.aboutmain}>


        <NavBar />


        <div className={styles.abouthead}>

            <div className={styles.aboutline}></div>
            
            <div className={styles.abouttitle}>
                <h1>About Us</h1>
            </div>
            
            <div className={styles.aboutline}></div>

        </div>
        

        <div className={styles.aboutcont}>

            <div>
                <p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
            </div>

            <div>
                <p>Our students gain the technical skills, real-world experience and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
            </div>

            <div>
                <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global success. </p>
            </div>

            <div>
                <h2>Information Sessions</h2>
            </div>

            <div>
                <p>Information sessions are a simple way to figure out the next step along your career path.  Learn more about the programs that interest you. </p>
            </div>

            <div>
                <h3>Big Info</h3>
            </div>      

            <div>
                <p>Big Info is the largest program expo and information session at BCIT, it’s your chance to find out about all our programs – from business, computing, and health to engineering, trades, and applied sciences. </p>
            </div>

            <div>
                <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
            </div>

            <div>
                <h2>Campus Tours</h2>
            </div>

            <div>
                <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life. </p>
            </div>
        </div>

        <div className={styles.carousel}>
            
            <div className={styles.imgcont}>
                <img className={styles.carouselImage} id="carouselImage" 
                        src={images[carouselImage]} 
                        alt="current-image"/>

            </div>

            <div className={styles.imgDescription}>

                <img className={styles.leftrightarrows} 
                    src="/icons/leftArrow.png" 
                    onClick={previousImage}>
                </img>

                <div className={styles.testOnImageHere} id="testOnImageHere">
                {/* <div id={styles["testOnImageHere"]}> */}
                    {/* {newWordsArray((item, index) => (
                         <div key={index}>
                            <div>{item.value}</div>
                        </div>
                    ))} */}

                    {words[carouselImage].value}
                </div>

                <img className={styles.leftrightarrows} 
                    src="/icons/rightArrow.png" 
                    onClick={nextImage}>
                </img>

            </div>
        </div>


        <div className={styles.abouthead2}>

            <div className={styles.aboutline}></div>
            
            <div>
                <h1>DEPARTMENTS</h1>
            </div>
            
            <div className={styles.aboutline}></div>
            
        </div>

        <div className={styles.aboutfooter}>
            <ul>
                <li>Applied & Natural Sciences</li>
                <li>Business & Media</li>
                <li>Computing & IT</li>
                <li>Engineerin</li>
                <li>Health Sciences</li>
                <li>Trades & Apprenticeships</li>
            </ul>
        </div>

     
        <div className={styles.arrows}>
          <a href="/">
            <span>
              <img className={styles.uparrow} src="/icons/upwardArrow.png"></img>
            </span>
          </a>

          <a href="/contact">
            <span>
              <img className={styles.downarrow} src="/icons/downwardArrow.png"></img>
            </span>
          </a>
        </div>
      
      </main>
    </>
  )
}
