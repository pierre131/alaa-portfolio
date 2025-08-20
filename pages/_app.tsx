import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  useEffect(() => {
    const currentLocale = locale || 'ar'
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLocale
      document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr'
    }
  }, [locale])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App) 