import ProjectCard from '../components/ProjectCard'
import { useLanguage } from '../context/LanguageContext'
import styles from './Projects.module.scss'

export default function Projects() {
  const { content } = useLanguage()

  return (
    <div className={styles.grid}>
      {content.projects.map((project) => (
        <div key={project.id} className={styles.card}>
          <ProjectCard
            project={project}
            showMoreLabel={content.nav.showMore}
            showLessLabel={content.nav.showLess}
          />
        </div>
      ))}
      <div className={styles.spacer} />
    </div>
  )
}
