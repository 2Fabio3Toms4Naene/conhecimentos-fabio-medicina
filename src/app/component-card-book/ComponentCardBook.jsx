import styles from './ComponentCardBook.module.css';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ComponentCardBook({ image, title }) {
    return (
        <div className={styles.card}>
            <Image src={image} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <a href="#" className={styles.link}>Veja o conteúdo <FaLongArrowAltRight /></a>
        </div>
    );
}