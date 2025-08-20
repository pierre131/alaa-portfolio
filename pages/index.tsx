import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`علاء إبراهيم - ${'بورتفوليو احترافي'}`}</title>
        <meta name="description" content="علاء إبراهيم - محاسب ومحترف في إدارة الأعمال مع خبرة في العمل الإداري والتطوير" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg`} type="image/svg+xml" />
        
        {/* Open Graph */}
        <meta property="og:title" content="علاء إبراهيم - بورتفوليو احترافي" />
        <meta property="og:description" content="محاسب ومحترف في إدارة الأعمال مع خبرة في العمل الإداري والتطوير" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/og-image.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="علاء إبراهيم - بورتفوليو احترافي" />
        <meta name="twitter:description" content="محاسب ومحترف في إدارة الأعمال مع خبرة في العمل الإداري والتطوير" />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/og-image.png`} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ar', ['common'])),
    },
  }
} 
 