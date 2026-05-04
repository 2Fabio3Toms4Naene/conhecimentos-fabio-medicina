import styles from './Component-introduction.module.css';
import stylesComponentHeader from '../component-header/ComponentHeader.module.css';
import logo from '../../../public/logo.jpeg';
import Image from 'next/image';

export default function ComponentIntroduction({ theme }) {
  return (
    <article className={styles.containerIntrodunction}>
      <div className={styles.containerTitle}>
        <Image
          src={logo}
          alt="Logo"
          className={`${stylesComponentHeader.logoHeader} ${theme ? stylesComponentHeader.iconInvert : ''}`}
          width={50}
          height={50}
        />
        <h1 className={styles.title}>Organize seu conhecimento</h1>
      </div>
      <p className={styles.description}>
        Guarde, organize e acesse seu conhecimento de forma simples e eficiente.
      </p>
    </article>
  );
}
