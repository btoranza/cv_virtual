import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  CodeIcon,
  EnvelopeIcon,
  FileTextIcon,
  FolderIcon,
  GithubLogoIcon,
  HeartIcon,
  HouseSimpleIcon,
  LinkedinLogoIcon,
  ListIcon,
  XIcon,
} from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeToggle from '../components/ThemeToggle';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ColorPicker from '../components/ColorPicker';
import styles from './SiteLayout.module.scss';

export default function SiteLayout() {
  const { content } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [location.pathname]);

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
          <div className={styles.nameGroup}>
            <span className={styles.name}>{content.name.toUpperCase()}</span>
            <span className={styles.role}>{content.role}</span>
          </div>
        </div>

        <button
          type='button'
          className={styles.menuToggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <XIcon size={22} weight='bold' />
          ) : (
            <ListIcon size={22} weight='bold' />
          )}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              `${styles.home} ${isActive ? styles.homeActive : ''}`
            }
            aria-label={content.nav.home}
          >
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
            <span className={styles.navLabel}>{content.nav.home}</span>
          </NavLink>
          <span className={styles.mark} aria-hidden='true' />
          <NavLink
            to='/resume'
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            <FileTextIcon
              size={20}
              weight='regular'
              className={styles.navIcon}
            />
            {content.nav.resume}
          </NavLink>
          <span className={styles.navDivider} aria-hidden='true'>
            |
          </span>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              `${styles.navLinkWide} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            <FolderIcon size={20} weight='regular' className={styles.navIcon} />
            {content.nav.projects}
          </NavLink>
          <span className={styles.navDivider} aria-hidden='true'>
            |
          </span>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `${styles.navLinkWide} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            <EnvelopeIcon
              size={20}
              weight='regular'
              className={styles.navIcon}
            />
            {content.nav.contact}
          </NavLink>
          <div className={styles.navTools}>
            <div className={styles.languageSwitcher}>
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
        <ScrollToTopButton footerRef={footerRef} />
        <ColorPicker footerRef={footerRef} />
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
