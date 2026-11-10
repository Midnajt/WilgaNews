import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

let ipPromise

function loadIp() {
  if (!ipPromise) {
    ipPromise = fetch('https://api.ipify.org?format=json')
      .then((response) => {
        if (!response.ok) throw new Error('ip')
        return response.json()
      })
      .then((data) => (typeof data.ip === 'string' && data.ip ? data.ip : 'niedostępny'))
      .catch(() => 'niedostępny')
  }
  return ipPromise
}

function clientFacts() {
  const ua = navigator.userAgent
  const brands = navigator.userAgentData?.brands ?? []
  const brand = brands
    .map((item) => item.brand)
    .find((name) => /Edge|Opera|Chrome|Firefox|Safari/i.test(name) && !/Chromium|Not.A.Brand/i.test(name))

  let browser = brand ? brand.replace(/^Google\s+/i, '').replace(/^Microsoft\s+/i, '') : ''
  if (!browser) {
    if (/Edg\//.test(ua)) browser = 'Edge'
    else if (/OPR\/|Opera/.test(ua)) browser = 'Opera'
    else if (/Firefox\//.test(ua)) browser = 'Firefox'
    else if (/Chrome\//.test(ua)) browser = 'Chrome'
    else if (/Safari\//.test(ua)) browser = 'Safari'
    else browser = 'nieznana'
  }

  const mobile = navigator.userAgentData?.mobile ?? /Mobi|iPhone|Android.+Mobile/i.test(ua)
  const tablet = /iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))
  const kind = tablet ? 'tablet' : mobile ? 'telefon' : 'komputer'
  const platform =
    navigator.userAgentData?.platform ||
    (/Windows/i.test(ua)
      ? 'Windows'
      : /Android/i.test(ua)
        ? 'Android'
        : /iPhone|iPad/i.test(ua)
          ? 'iOS'
          : /Mac OS/i.test(ua)
            ? 'macOS'
            : /Linux/i.test(ua)
              ? 'Linux'
              : '')

  return { browser, device: platform ? `${kind}, ${platform}` : kind }
}

function describeClick(target) {
  if (!(target instanceof Element) || target.closest('.Toastify')) return null
  const control = target.closest('a, button, label, summary, [role="button"]')
  if (!control) return null
  const heading = control.querySelector('h1, h2, h3')
  const raw = control.getAttribute('aria-label') || heading?.textContent || control.textContent || ''
  const text = raw.replace(/\s+/g, ' ').trim()
  if (!text) return null
  return text.length > 110 ? `${text.slice(0, 107)}…` : text
}

function formatNow() {
  return new Intl.DateTimeFormat('pl-PL', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date())
}

const DWELL_MS = 30_000

export function ClickNotice() {
  useEffect(() => {
    const readyAt = Date.now() + DWELL_MS
    loadIp()

    async function onClick(event) {
      if (Date.now() < readyAt) return
      const what = describeClick(event.target)
      if (!what) return
      const time = formatNow()
      const { browser, device } = clientFacts()
      const ip = await loadIp()
      toast.info(
        <p className="click-toast">
          <span>godzina</span>
          <span>{time}</span>
          <span>klik</span>
          <span>{what}</span>
          <span>urządzenie</span>
          <span className="is-strong">{device}</span>
          <span>przeglądarka</span>
          <span className="is-strong">{browser}</span>
          <span>ip</span>
          <span className="is-strong">{ip}</span>
        </p>,
        { role: 'status', icon: false },
      )
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <ToastContainer
      className="click-toasts"
      position="top-center"
      newestOnTop
      limit={3}
      autoClose={6500}
      pauseOnHover
      theme="dark"
      aria-label="Informacja o kliknięciu"
    />
  )
}
