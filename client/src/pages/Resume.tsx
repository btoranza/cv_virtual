import {
  DeviceMobileIcon,
  DownloadSimpleIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  GlobeIcon,
  MapPinIcon,
} from '@phosphor-icons/react';
import WindowCard from '../components/WindowCard';
import ProgressBar from '../components/ProgressBar';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../content/types';
import styles from './Resume.module.scss';

const CV_FILE_BY_LANGUAGE: Record<Language, string> = {
  en: 'CV Berenice Toranza EN.pdf',
  fr: 'CV Berenice Toranza FR.pdf',
  es: 'CV Berenice Toranza EN.pdf',
};

// Layout según el boceto: fila 1 About Me + Contacto (mitad y mitad), fila 2
// Experiencia a todo el ancho, fila 3 Formación + Tecnologías + Idiomas
// (un tercio cada una). Ninguna tarjeta tiene alto fijo: cada fila estira
// sus tarjetas a la altura de la más alta (align-items: stretch, default
// de flexbox), así el tamaño siempre sale del contenido real y nunca hace
// falta scroll interno ni adivinar píxeles.
export default function Resume() {
  const { language, content } = useLanguage();

  return (
    <div className={styles.grid}>
      <div className={styles.topBar}>
        <a
          className={styles.downloadButton}
          href={`/${encodeURIComponent(CV_FILE_BY_LANGUAGE[language])}`}
          download={CV_FILE_BY_LANGUAGE[language]}
        >
          <DownloadSimpleIcon size={16} weight='bold' />
          {content.nav.downloadCv}
        </a>
      </div>

      <div className={styles.row}>
        <WindowCard title={content.sectionTitles.about}>
          <ul className={styles.aboutList}>
            {content.about.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </WindowCard>

        <WindowCard title={content.sectionTitles.contact}>
          <div className={styles.contactRow}>
            <MapPinIcon
              size={20}
              weight='bold'
              className={styles.contactIcon}
            />
            <span>{content.contact.location}</span>
          </div>
          <div className={styles.contactRow}>
            <DeviceMobileIcon
              size={20}
              weight='bold'
              className={styles.contactIcon}
            />
            <a
              href={`tel:${content.contact.phone.replace(/\s+/g, '')}`}
              className={styles.contactLink}
            >
              {content.contact.phone}
            </a>
          </div>
          <div className={styles.contactRow}>
            <EnvelopeIcon
              size={20}
              weight='bold'
              className={styles.contactIcon}
            />
            <a
              href={`mailto:${content.contact.email}`}
              className={styles.contactLink}
            >
              {content.contact.email}
            </a>
          </div>
          <div className={styles.contactRow}>
            <GlobeIcon size={20} weight='bold' className={styles.contactIcon} />
            <a
              href={`https://${content.contact.linkedin}`}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.contactLink}
            >
              LinkedIn
            </a>
          </div>
          <div className={styles.contactRow}>
            <GithubLogoIcon
              size={20}
              weight='bold'
              className={styles.contactIcon}
            />
            <a
              href={content.contact.github}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.contactLink}
            >
              GitHub
            </a>
          </div>
        </WindowCard>
      </div>

      <div className={styles.row}>
        <WindowCard title={content.sectionTitles.experience}>
          {content.experience.map((entry) => (
            <div key={entry.company} style={{ marginBottom: 16 }}>
              <p className={styles.experienceRole}>{entry.role}</p>
              <p>
                {entry.company} · {entry.period}
              </p>
              <ul>
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </WindowCard>
      </div>

      <div className={`${styles.row} ${styles.rowTriple}`}>
        <WindowCard title={content.sectionTitles.education}>
          {content.education.map((entry) => (
            <div key={entry.institution} style={{ marginBottom: 12 }}>
              <strong>{entry.institution}</strong>
              <p>{entry.program}</p>
              <p>{entry.period}</p>
            </div>
          ))}
        </WindowCard>

        <WindowCard title={content.sectionTitles.skills}>
          <ul className={styles.skillTags}>
            {content.skills.map((skill) => (
              <li key={skill} className={styles.skillTag}>
                {skill}
              </li>
            ))}
          </ul>
        </WindowCard>

        <WindowCard title={content.sectionTitles.languages}>
          {content.languages.map((entry) => (
            <div key={entry.language} className={styles.languageRow}>
              <div className={styles.languageHeader}>
                <p className={styles.languageLabel}>{entry.language}</p>
                <span className={styles.languageLevel}>{entry.level}</span>
              </div>
              <ProgressBar value={entry.proficiency} />
            </div>
          ))}
        </WindowCard>
      </div>

      <div className={styles.spacer} />
    </div>
  );
}
