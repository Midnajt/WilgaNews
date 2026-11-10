import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Hero } from './Hero'
import { StoryGrid } from './StoryGrid'

function feature(articles) {
  const index = Math.floor(Math.random() * articles.length)
  return {
    hero: articles[index],
    rest: articles.filter((_, itemIndex) => itemIndex !== index),
  }
}

export function Front({ articles, heading, lead }) {
  const signature = articles.map((article) => article.slug).join('|')
  const [pick, setPick] = useState(() =>
    articles.length ? { signature, ...feature(articles) } : { signature, hero: null, rest: [] },
  )

  if (pick.signature !== signature) {
    setPick(articles.length ? { signature, ...feature(articles) } : { signature, hero: null, rest: [] })
  }

  const { hero, rest } = pick
  if (!hero) return null

  const cardLevel = heading ? 3 : 2

  return (
    <div className="sheet">
      <main className="main" id="tresc">
        {heading ? (
          <header className="section-head">
            <h1>{heading}</h1>
            {lead ? <p>{lead}</p> : null}
          </header>
        ) : null}
        <Hero article={hero} as={heading ? 'h2' : 'h1'} />
        <StoryGrid articles={rest.slice(0, 3)} variant="row" level={cardLevel} />
        <StoryGrid articles={rest.slice(3)} variant="grid" level={cardLevel} />
      </main>
      <Sidebar />
    </div>
  )
}
