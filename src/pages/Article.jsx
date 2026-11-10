import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar'
import { StoryGrid } from '../components/StoryGrid'
import {
  categoryLabel,
  formatDay,
  formatTime,
  getArticle,
  getRelated,
} from '../data/articles'

export function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)

  useEffect(() => {
    document.title = article ? `${article.title} — Radio ZET` : 'Nie ma takiej relacji — Radio ZET'
  }, [article])

  if (!article) {
    return (
      <Layout>
        <div className="sheet">
          <main className="main" id="tresc">
            <h1>Nie ma takiej relacji</h1>
            <p className="lead">Ten adres nie prowadzi do żadnego dzisiejszego newsa.</p>
            <Link className="text-link" to="/">
              Wróć na stronę główną
            </Link>
          </main>
          <Sidebar />
        </div>
      </Layout>
    )
  }

  const related = getRelated(article)

  return (
    <Layout>
      <div className="sheet">
        <main className="main article" id="tresc">
          <p className="kicker">{categoryLabel[article.category]}</p>
          <h1>{article.title}</h1>
          <p className="byline">
            <time dateTime={article.publishedAt}>
              {formatDay(article.publishedAt)}, {formatTime(article.publishedAt)}
            </time>
            <span>Wilga, 08-470</span>
          </p>
          <p className="lead">{article.lead}</p>
          <figure>
            <img src={article.src} alt={article.alt} />
            <figcaption>{article.caption}</figcaption>
          </figure>
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <section className="related">
            <h2>Warto też zobaczyć</h2>
            <StoryGrid articles={related} level={3} />
          </section>
        </main>
        <Sidebar />
      </div>
    </Layout>
  )
}
