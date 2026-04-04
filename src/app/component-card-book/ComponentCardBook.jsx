import styles from './ComponentCardBook.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function ComponentCardBook({ image, title, link }) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <Link href={link} className={styles.link}>
        Veja o conteúdo <FaLongArrowAltRight />
      </Link>
    </div>
  );
}
