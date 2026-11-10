import { Link } from 'react-router-dom'
import { categoryLabel, formatTime } from '../data/articles'

export function StoryGrid({ articles, variant = 'grid', level = 2 }) {
  if (!articles.length) return null

  return (
    <div className={variant === 'row' ? 'story-row' : 'story-grid'}>
      {articles.map((article) => (
        <StoryCard key={article.slug} article={article} level={level} />
      ))}
    </div>
  )
}

function StoryCard({ article, level }) {
  const Title = level === 3 ? 'h3' : 'h2'

  return (
    <Link className="story-card" to={`/artykul/${article.slug}`}>
      <span className="media">
        <img src={article.src} alt="" loading="lazy" />
      </span>
      <span className="story-meta">
        <span className="kicker">{categoryLabel[article.category]}</span>
        <time dateTime={article.publishedAt}>{formatTime(article.publishedAt)}</time>
      </span>
      <Title>{article.title}</Title>
    </Link>
  )
}
