import { Component, type ErrorInfo, type ReactNode } from 'react'
import { ArrowClockwiseIcon } from '@phosphor-icons/react'
import styles from './ErrorBoundary.module.scss'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled error in page:', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className={styles.wrap}>
        <p className={styles.title}>Something went wrong</p>
        <p className={styles.message}>
          This section hit an unexpected error. Try reloading the page.
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={() => window.location.reload()}
        >
          <ArrowClockwiseIcon size={18} weight="bold" />
          Reload
        </button>
      </div>
    )
  }
}
