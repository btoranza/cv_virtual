import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { useLanguage } from '../context/LanguageContext'
import type { CvContent } from '../content/types'
import styles from './Projects.module.scss'

const MOBILE_QUERY = '(max-width: 720px)'

function useColumnCount() {
  const [columnCount, setColumnCount] = useState(() =>
    window.matchMedia(MOBILE_QUERY).matches ? 1 : 2,
  )

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY)
    const onChange = () => setColumnCount(query.matches ? 1 : 2)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return columnCount
}

function ProjectGrid({
  content,
  columnCount,
}: {
  content: CvContent
  columnCount: number
}) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [rowHeights, setRowHeights] = useState<number[]>([])

  useLayoutEffect(() => {
    const measure = () => {
      const heights = cardRefs.current.map((el) => el?.getBoundingClientRect().height ?? 0)
      const rows: number[] = []
      for (let i = 0; i < heights.length; i += columnCount) {
        rows.push(Math.max(...heights.slice(i, i + columnCount)))
      }
      setRowHeights(rows)
    }

    measure()
    document.fonts.ready.then(measure)
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [columnCount])

  const columns = Array.from({ length: columnCount }, (_, col) =>
    content.projects
      .map((project, index) => ({ project, index }))
      .filter(({ index }) => index % columnCount === col),
  )

  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {columns.map((column, col) => (
          <div key={col} className={styles.column}>
            {column.map(({ project, index }) => {
              const rowHeight = rowHeights[Math.floor(index / columnCount)]
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
      <div className={styles.spacer} />
    </div>
  )
}

export default function Projects() {
  const { language, content } = useLanguage()
  const columnCount = useColumnCount()
  return (
    <ProjectGrid
      key={`${language}-${columnCount}`}
      content={content}
      columnCount={columnCount}
    />
  )
}
