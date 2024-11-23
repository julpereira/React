'use client';
import { useState } from "react";
import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/image/logo.png" alt="Logo" className={styles.logo} />
            </div>
            <button className={styles.menuToggle} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link href="/inicio">Início</Link></li>
                    <li className={styles.navItem}><Link href="/sobre">Sobre</Link></li>
                    <li className={styles.navItem}><Link href="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}