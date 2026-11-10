import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Front } from '../components/Front'
import { Layout } from '../components/Layout'
import { articlesForSection, sections } from '../data/articles'
import { NotFound } from './NotFound'

export function Section() {
  const { sectionId } = useParams()
  const section = sections[sectionId]

  useEffect(() => {
    document.title = section ? `${section.title} — Radio ZET` : 'Nie ma takiego działu — Radio ZET'
  }, [section])

  if (!section) return <NotFound />

  return (
    <Layout>
      <Front articles={articlesForSection(sectionId)} heading={section.title} lead={section.lead} />
    </Layout>
  )
}
