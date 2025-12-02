import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import './assets/i18n/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading translations...</div>}>
      <div className="sm:px-12 sm:gap-0 bg-amber-700 min-h-screen min-w-screen flex flex-col gap-4 p-6">
        <App />
      </div>
    </Suspense>
  </StrictMode>,
)
