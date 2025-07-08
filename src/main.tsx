import './index.css'
import AppRouter from './router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalProvider } from './context/GlobalContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  </StrictMode>,
)
