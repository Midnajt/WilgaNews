import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Article } from './pages/Article'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Section } from './pages/Section'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artykul/:slug" element={<Article />} />
        <Route path="/:sectionId" element={<Section />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
