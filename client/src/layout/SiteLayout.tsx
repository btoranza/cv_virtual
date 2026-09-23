import { Link, Outlet } from 'react-router-dom';
import {
  CodeIcon,
  GithubLogoIcon,
  HeartIcon,
  HouseSimpleIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeToggle from '../components/ThemeToggle';
import styles from './SiteLayout.module.scss';

export default function SiteLayout() {
  const { content } = useLanguage();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.identity}>
          <span className={styles.brandIcon} aria-hidden='true'>
            <CodeIcon size={26} weight='fill' className={styles.brandFill} />
            <CodeIcon size={26} weight='regular' className={styles.brandOutline} />
          </span>
          <span className={styles.heartIcon} aria-hidden='true'>
            <HeartIcon size={16} weight='fill' className={styles.heartFill} />
            <HeartIcon size={16} weight='regular' className={styles.heartOutline} />
          </span>
          <span className={styles.name}>{content.name.toUpperCase()}</span>
          <span className={styles.role}>{content.role}</span>
        </div>
        <nav className={styles.nav}>
          <Link to='/' className={styles.home} aria-label='Home'>
            <span className={styles.homeIcon}>
              <HouseSimpleIcon size={26} weight='fill' className={styles.homeFill} />
              <HouseSimpleIcon size={26} weight='regular' className={styles.homeOutline} />
            </span>
          </Link>
          <span className={styles.mark} aria-hidden='true' />
          <Link to='/resume'>Resume</Link>
          <span className={styles.navDivider} aria-hidden='true'>
            |
          </span>
          <Link to='/projects'>Projects</Link>
          <span className={styles.navDivider} aria-hidden='true'>
            |
          </span>
          <Link to='/contact'>Contact</Link>
          <div className={styles.languageSwitcher}>
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div>
          <p className={styles.footerLabel}>Phone</p>
          <a
            href={`tel:${content.contact.phone.replace(/\s+/g, '')}`}
            className={styles.footerValue}
          >
            {content.contact.phone}
          </a>
        </div>
        <div>
          <p className={styles.footerLabel}>Email</p>
          <a
            href={`mailto:${content.contact.email}`}
            className={styles.footerValue}
          >
            {content.contact.email}
          </a>
        </div>
        <div>
          <p className={styles.footerLabel}>Find Me Online</p>
          <div className={styles.social}>
            <a
              href={`https://${content.contact.linkedin}`}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socialLink}
              aria-label='LinkedIn'
            >
              <LinkedinLogoIcon size={22} weight='fill' />
            </a>
            <a
              href={content.contact.github}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.socialLink}
              aria-label='GitHub'
            >
              <GithubLogoIcon size={22} weight='fill' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
