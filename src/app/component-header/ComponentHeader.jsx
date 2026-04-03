import styles from './ComponentHeader.module.css';
import Image from 'next/image';
import logo from '../../../public/logo.jpeg';
import { FaSearch } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

export default function ComponentHeader({ theme, toggleTheme }) {
    return (
        <header className={styles.header}>
            <div className={styles.containerLogo}>
                <Image src={logo} alt="Logo" width={50} height={50} className={theme ? styles.iconInvert : ''}/>
                <h1 lang="en" className={styles.title}>Fábio Knowlodge</h1>
            </div>
            <div className={styles.containerSearch}>
                <FaSearch className={`${styles.iconSearch} ${theme ? styles.iconInvert : ''}`} />
                <input type="text" placeholder='Digite o título do livro ou assunto' className={styles.inputSearch}/>
            </div>
            <div className={styles.containerTheme}>
                <button onClick={toggleTheme} className={styles.buttonTheme}>
                    {theme ? <GoSun className={`${styles.iconTheme} ${styles.iconInvert}`} /> : <FaRegMoon className={styles.iconTheme} />}
                </button>
            </div>
        </header>
    )
}