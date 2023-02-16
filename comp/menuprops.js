import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export function MenuProps() {
    const [popup, setPopup] = useState(false);

    return (
        <div className={styles.menuprops}>
            <div className={styles.burgericon}>
                <img
                    src="/icons/menu-icon.png"
                    onClick={() => setPopup(!popup)}>
                </img>

                {popup ? (
                    <div className={styles.popup}>
                        
                        <img src="/menuBackground.png"></img>

                        <div className={styles.x}>
                            <h1 onClick={() => setPopup(false)}>X</h1>
                        </div>
                        
                        <div classname={styles.list}>
                            <ul className={styles.listitem}>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
