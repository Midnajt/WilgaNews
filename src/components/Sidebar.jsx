import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatDay, formatTime, getArticles } from '../data/articles'

const POLL_KEY = 'wilga-news-poll-v1'

const pollOptions = [
  { id: 'centrum', label: 'Z centrum, spod klonów' },
  { id: 'kwiaciarnia', label: 'Z chodnika przy kwiaciarni' },
  { id: 'sklep', label: 'Z parkingu przy sklepie' },
  { id: 'domy', label: 'Spomiędzy czerwonych dachów' },
]

function randomBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function freshVotes() {
  return Object.fromEntries(pollOptions.map((option) => [option.id, randomBetween(24, 160)]))
}

// Nowe liczby przy każdym załadowaniu strony. Przejścia między podstronami zostawiają ten sam zestaw.
const visitVotes = freshVotes()

function readChoice() {
  try {
    const raw = localStorage.getItem(POLL_KEY)
    if (!raw) return null
    const choice = JSON.parse(raw)?.choice
    return pollOptions.some((option) => option.id === choice) ? choice : null
  } catch {
    return null
  }
}

function votesWithChoice(choice) {
  const votes = { ...visitVotes }
  if (choice) votes[choice] += 1
  return votes
}

export function Sidebar() {
  const articles = getArticles()

  return (
    <aside className="sidebar" aria-label="Najnowsze i sonda">
      <section className="side-block">
        <p className="today">{formatDay(articles[0].publishedAt)}</p>
        <h2>Najnowsze</h2>
        <ol className="latest">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link to={`/artykul/${article.slug}`}>
                <time dateTime={article.publishedAt}>{formatTime(article.publishedAt)}</time>
                <span>{article.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <Poll />
      <Weather />
    </aside>
  )
}

function Poll() {
  const [choice, setChoice] = useState(readChoice)
  const [votes, setVotes] = useState(() => votesWithChoice(choice))
  const [draft, setDraft] = useState(null)
  const total = Object.values(votes).reduce((sum, count) => sum + count, 0)

  useEffect(() => {
    if (!choice) return
    try {
      localStorage.setItem(POLL_KEY, JSON.stringify({ choice }))
    } catch {
      // Głos zostaje w pamięci tej karty, gdy przeglądarka blokuje zapis.
    }
  }, [choice])

  function vote(event) {
    event.preventDefault()
    if (!draft || choice) return
    setChoice(draft)
    setVotes((current) => ({ ...current, [draft]: current[draft] + 1 }))
  }

  return (
    <section className="side-block">
      <h2>Sonda</h2>
      <p className="poll-question">Skąd kula wygląda najlepiej?</p>
      {choice ? null : (
        <form onSubmit={vote}>
          <fieldset>
            <legend className="sr-only">Wybierz punkt widokowy</legend>
            {pollOptions.map((option) => (
              <label key={option.id}>
                <input
                  type="radio"
                  name="widok"
                  value={option.id}
                  checked={draft === option.id}
                  onChange={() => setDraft(option.id)}
                />
                {option.label}
              </label>
            ))}
          </fieldset>
          <button type="submit" disabled={!draft}>
            Zagłosuj
          </button>
        </form>
      )}
      <div className="poll-results">
        {pollOptions.map((option) => {
          const count = votes[option.id]
          const share = total === 0 ? 0 : Math.round((count / total) * 100)
          return (
            <div key={option.id} className={option.id === choice ? 'is-mine' : undefined}>
              <div className="poll-label">
                <span>{option.label}</span>
                <span>
                  {share}% · {count}
                </span>
              </div>
              <div className="poll-track" aria-hidden="true">
                <span style={{ width: `${share}%` }} />
              </div>
            </div>
          )
        })}
        {choice ? <p className="poll-note">Głos zapisany w tej przeglądarce.</p> : null}
      </div>
    </section>
  )
}

function Weather() {
  return (
    <section className="side-block weather">
      <h2>Pogoda</h2>
      <p className="weather-place">Wilga · 08-470</p>
      <p className="weather-now">
        <span className="sun" aria-hidden="true" />
        Słonecznie
      </p>
      <p>Dobra widoczność nad Wisłą. Kula łapie światło od rana.</p>
      <p className="weather-note">Ramka ilustracyjna. To nie jest komunikat IMGW.</p>
    </section>
  )
}
