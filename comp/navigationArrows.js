import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function NavArrows() {
    return (
        <div className={styles.arrows}>
            <a href="/about">
                <span>
                    <img
                        className={styles.downarrow}
                        src="/icons/downwardArrow.png"
                    ></img>
                </span>
            </a>
        </div>
    );
}
