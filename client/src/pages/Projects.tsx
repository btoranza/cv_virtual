import { useLayoutEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { useLanguage } from '../context/LanguageContext'
import type { CvContent } from '../content/types'
import styles from './Projects.module.scss'

const COLUMN_COUNT = 2

function ProjectGrid({ content }: { content: CvContent }) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [rowHeights, setRowHeights] = useState<number[]>([])

  useLayoutEffect(() => {
    const measure = () => {
      const heights = cardRefs.current.map((el) => el?.getBoundingClientRect().height ?? 0)
      const rows: number[] = []
      for (let i = 0; i < heights.length; i += COLUMN_COUNT) {
        rows.push(Math.max(...heights.slice(i, i + COLUMN_COUNT)))
      }
      setRowHeights(rows)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const columns = Array.from({ length: COLUMN_COUNT }, (_, col) =>
    content.projects
      .map((project, index) => ({ project, index }))
      .filter(({ index }) => index % COLUMN_COUNT === col),
  )

  return (
    <div className={styles.grid}>
      {columns.map((column, col) => (
        <div key={col} className={styles.column}>
          {column.map(({ project, index }) => {
            const rowHeight = rowHeights[Math.floor(index / COLUMN_COUNT)]
            return (
              <div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={styles.card}
                style={rowHeight ? { minHeight: rowHeight } : undefined}
              >
                <ProjectCard
                  project={project}
                  showMoreLabel={content.nav.showMore}
                  showLessLabel={content.nav.showLess}
                />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default function Projects() {
  const { language, content } = useLanguage()
  return <ProjectGrid key={language} content={content} />
}
