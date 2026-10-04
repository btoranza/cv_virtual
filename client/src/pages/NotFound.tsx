import { Link } from 'react-router-dom'
import { HouseSimpleIcon } from '@phosphor-icons/react'
import { useLanguage } from '../context/LanguageContext'
import styles from './NotFound.module.scss'

export default function NotFound() {
  const { content } = useLanguage()
  const { notFound } = content

  return (
    <div className={styles.hero}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>{notFound.title}</h1>
      <p className={styles.message}>{notFound.message}</p>
      <Link to="/" className={styles.button}>
        <HouseSimpleIcon size={18} weight="bold" />
        {notFound.backHome}
      </Link>
    </div>
  )
}
