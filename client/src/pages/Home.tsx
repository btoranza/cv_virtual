import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import styles from './Home.module.scss';

export default function Home() {
  const { content } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <h1 className={styles.hello}>
          {content.sectionTitles.hello.toUpperCase()} !
        </h1>
        <p className={styles.aboutText}>{content.intro}</p>

        <nav className={styles.actions}>
          <Link to='/resume' className={styles.button}>
            {content.nav.resume}
          </Link>
          <Link to='/projects' className={styles.button}>
            {content.nav.projects}
          </Link>
          <Link to='/contact' className={styles.button}>
            {content.nav.contact}
          </Link>
        </nav>
      </div>
    </section>
  );
}
