import { Link } from 'react-router-dom'
import { categoryLabel } from '../data/articles'

export function Hero({ article, as = 'h2' }) {
  const Title = as

  return (
    <Link className="hero" to={`/artykul/${article.slug}`}>
      <div className="media">
        <img src={article.src} alt="" fetchPriority="high" />
      </div>
      <div className="hero-copy">
        <p className="kicker">{categoryLabel[article.category]}</p>
        <Title className="hero-title">{article.title}</Title>
      </div>
    </Link>
  )
}
