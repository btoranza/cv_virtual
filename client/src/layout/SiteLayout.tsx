import { useRef } from 'react';
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
import ScrollToTopButton from '../components/ScrollToTopButton';
import styles from './SiteLayout.module.scss';

export default function SiteLayout() {
  const { content } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.identity}>
          <CodeIcon size={32} weight='bold' className={styles.brandIcon} />
          <span className={styles.heartIcon} aria-hidden='true'>
            <HeartIcon size={22} weight='fill' className={styles.heartFill} />
            <HeartIcon
              size={22}
              weight='regular'
              className={styles.heartOutline}
            />
          </span>
          <span className={styles.name}>{content.name.toUpperCase()}</span>
          <span className={styles.role}>{content.role}</span>
        </div>
        <nav className={styles.nav}>
          <Link to='/' className={styles.home} aria-label={content.nav.home}>
            <span className={styles.homeIcon}>
              <HouseSimpleIcon
                size={26}
                weight='fill'
                className={styles.homeFill}
              />
              <HouseSimpleIcon
                size={26}
                weight='regular'
                className={styles.homeOutline}
              />
            </span>
          </Link>
          <span className={styles.mark} aria-hidden='true' />
          <Link to='/resume' className={styles.navLink}>
            {content.nav.resume}
          </Link>
          <span className={styles.navDivider} aria-hidden='true'>
            |
          </span>
          <Link to='/projects' className={styles.navLinkWide}>
            {content.nav.projects}
          </Link>
          <span className={styles.navDivider} aria-hidden='true'>
            |
          </span>
          <Link to='/contact' className={styles.navLinkWide}>
            {content.nav.contact}
          </Link>
          <div className={styles.languageSwitcher}>
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
        <ScrollToTopButton footerRef={footerRef} />
      </main>

      <footer className={styles.footer} ref={footerRef}>
        <div>
          <p className={styles.footerLabel}>{content.nav.phone}</p>
          <a
            href={`tel:${content.contact.phone.replace(/\s+/g, '')}`}
            className={styles.footerValue}
          >
            {content.contact.phone}
          </a>
        </div>
        <div>
          <p className={styles.footerLabel}>{content.nav.email}</p>
          <a
            href={`mailto:${content.contact.email}`}
            className={styles.footerValue}
          >
            {content.contact.email}
          </a>
        </div>
        <div>
          <p className={styles.footerLabel}>{content.nav.findMeOnline}</p>
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
