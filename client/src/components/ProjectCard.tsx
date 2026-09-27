import { useState } from 'react'
import { ArrowSquareOutIcon, CaretDownIcon, GithubLogoIcon } from '@phosphor-icons/react'
import WindowCard from './WindowCard'
import type { ProjectEntry } from '../content/types'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: ProjectEntry
  showMoreLabel: string
  showLessLabel: string
}

export default function ProjectCard({ project, showMoreLabel, showLessLabel }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <WindowCard title={project.name}>
      <div className={styles.content}>
        <p className={styles.description}>{project.description}</p>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? showLessLabel : showMoreLabel}
          <CaretDownIcon
            size={14}
            weight="bold"
            className={`${styles.toggleIcon} ${expanded ? styles.toggleIconOpen : ''}`}
          />
        </button>

        <div className={`${styles.expandable} ${expanded ? styles.expandableOpen : ''}`}>
          <div className={styles.expandableInner}>
            <div className={styles.images}>
              <div className={styles.imageSlot}>
                {project.image ? (
                  <img src={project.image} alt={project.name} className={styles.image} />
                ) : (
                  <div className={styles.placeholder} />
                )}
              </div>
              <div className={styles.imageSlot}>
                {project.image2 ? (
                  <img src={project.image2} alt={project.name} className={styles.image} />
                ) : (
                  <div className={styles.placeholder} />
                )}
              </div>
            </div>
            <ul className={styles.stack}>
              {project.stackFrontend.map((tech) => (
                <li key={tech} className={styles.tag}>
                  {tech}
                </li>
              ))}
            </ul>
            {project.stackBackend.length > 0 && (
              <ul className={styles.stack}>
                {project.stackBackend.map((tech) => (
                  <li key={tech} className={styles.tag}>
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.links}>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <GithubLogoIcon size={18} weight="bold" />
            GitHub
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <ArrowSquareOutIcon size={18} weight="bold" />
              Demo
            </a>
          )}
        </div>
      </div>
    </WindowCard>
  )
}
