import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { MenuProps } from "../comp/menuprops.js";

export function NavBar() {
    return (
        <div className={styles.navbar}>
            <MenuProps />

            <div className={styles.graudationicon}>
                <a href="/about">
                <img src="/icons/graduation-hat.png"></img>
                </a>
            </div>
        </div>
    );
}
