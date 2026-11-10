import { useEffect } from 'react'
import { Front } from '../components/Front'
import { Layout } from '../components/Layout'
import { getArticles } from '../data/articles'

export function Home() {
  const articles = getArticles()

  useEffect(() => {
    document.title = 'Radio ZET — Wilga'
  }, [])

  return (
    <Layout>
      <Front articles={articles} />
    </Layout>
  )
}
