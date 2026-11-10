import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar'

export function NotFound() {
  useEffect(() => {
    document.title = 'Nie ma takiej strony — Radio ZET'
  }, [])

  return (
    <Layout>
      <div className="sheet">
        <main className="main" id="tresc">
          <h1>Nie ma takiej strony</h1>
          <p className="lead">Ten adres nie prowadzi do żadnego działu ani relacji.</p>
          <Link className="text-link" to="/">
            Wróć na stronę główną
          </Link>
        </main>
        <Sidebar />
      </div>
    </Layout>
  )
}
