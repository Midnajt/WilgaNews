import { Sidebar } from './Sidebar'
import { Hero } from './Hero'
import { StoryGrid } from './StoryGrid'

export function Front({ articles, heading, lead }) {
  const [hero, ...rest] = articles
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
