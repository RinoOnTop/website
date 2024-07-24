import { motion } from "framer-motion";
import Head from 'next/head'; // Import Head from next/head
import styles from '../styles/BackgroundText.module.css';

export default function Custom404() {
    return (
        <div className="select-none">
            <div className={styles.background}>
                <div className={styles.textPattern}>
                    {Array(40).fill(0).map((_, i) => (
                        <span key={i}>Work in progress Work in progress Work in progress Work in progress Work in progress Work in progress Work in progress Work in progress Work in progress Work in progress Work in progress Work in progress</span>

                    ))}

                </div>
                <div className={styles.centerText}>
                    This page is under construction.
                    <h3 className="text-white text-3x1 flex-auto text-xl ">If you think this is a bug, Contact me on</h3>
                    <a href="https://discord.com/users/896089166738247721" className={styles.centerAltText} target="_blank" rel="noopener noreferrer">
                        Discord
                    </a>
                    <div>
                        <a href="/.." className="text-white mt-7 pt-7 hover:text-sky-500 text-xl">Back to main Site</a>
                    </div>

                </div>

            </div>
        </div>
    )
}
