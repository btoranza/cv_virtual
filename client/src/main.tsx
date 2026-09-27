import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { ColorProvider } from './context/ColorContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ColorProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ColorProvider>
    </ThemeProvider>
  </StrictMode>,
)
