import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { NavBar } from '../comp/navbar.js'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);

    const [firstnameError, setFirstnameError] = useState('');
    const [lastnameError, setLastnameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstname(event.target.value);
        if (!/^[A-Z][a-zA-Z]+$/.test(event.target.value)) {
          setFirstnameError('Firstname error. First letter must be capital. Must use alphetical only.');
        } else {
          setFirstnameError('');
        }
    };

    const handleLastNameChange = (event) => {
        setLastname(event.target.value);
        if (!/^[A-Z][a-zA-Z]+$/.test(event.target.value)) {
          setLastnameError('Lastname error. First letter must be capital. Must use alphetical only.');
        } else {
          setLastnameError('');
        }
    };
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (!/.com/.test(event.target.value)) {
          setEmailError('Email is invalid');
        } else {
          setEmailError('');
        }
    };

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   if (firstnameError === '' && lastnameError === '' && emailError === '') {
    //     setValidated(true);
    //   } else {
    //     setValidated(false);
    //   }
    // };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />        
        <meta meta property="og:title" content="Assignment #1 - Contact Us Page" />
        <meta meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.contactmain}>

        <NavBar />


        <div className={styles.abouthead}>

            <div className={styles.aboutline}></div>
            
            <div>
                <h1>Contact Us</h1>
            </div>
            
            <div className={styles.aboutline}></div>

        </div>

        <div className={styles.contacttext}>
            <p>Want to disucss? Lets chat!</p>
        </div>

        <div className={styles.formsection} >
            <form className={styles.form} >
                <fieldset className={styles.tableborder}>
                    <table className={styles.tableline}>
                        <thead className={styles.upperform}>
                            <tr className={styles.formbox}>
                                <td className={styles.formcont}>
                                  <div className={styles.formeven}>
                                    <label className={styles.formlabel} for="name">First Name:</label>
                                        <input className={styles.input} type="text" id="firstname" name="firstname" 
                                            placeholder="First Name here" 
                                            value={firstname}
                                            onChange={handleFirstNameChange}/>
                                  </div>

                                  <div div className={styles.formeven}>
                                    <label className={styles.formlabel} for="name">Last Name:</label>
                                        <input className={styles.input} type="text" id="lastname" name="lastname" 
                                            placeholder="Last Name here"
                                            value={lastname} 
                                            onChange={handleLastNameChange}/>
                                  </div> 
                                </td>
                            </tr>
                        </thead>

                        <thead className={styles.lowerform}>
                            <tr className={styles.formbox}>
                                <td className={styles.formcont2}>
                                    <label className={styles.formlabel} for="name">Email:</label>
                                        <input className={styles.input} type="email" id="email" name="email" 
                                            placeholder="Email Here"
                                            value={email} 
                                            onChange={handleEmailChange}/>
                                </td>
                            </tr>
                        </thead>
                    </table>
              </fieldset> 
            </form>

          <div className={styles.errormsg}>
              {firstnameError && <div>{firstnameError}</div>}
              {lastnameError && <div>{lastnameError}</div>}
              {emailError && <div>{emailError}</div>}
          </div>

          <div className={styles.submit}>
              {/* {validated ? 
                <div>
                <button className={styles.submitbutton} type="submit">Submit</button>
                </div>: null
              } */}

              {emailError === '' && firstnameError === '' && lastnameError === '' && 
              <button className={styles.submitbutton} type="submit">Submit</button>}
              
          </div>


        </div>

        <div className={styles.arrows}>
          <a href="/about">
            <span>
              <img className={styles.uparrow} src="/icons/upwardArrow.png"></img>
            </span>
          </a>
        </div>
        
      
      </main>
    </>
  )
}
