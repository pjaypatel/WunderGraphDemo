import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2 className={styles.subTitle}>
          ... with <a href="https://wundergraph.com">WunderGraph</a>
        </h2>
        <p className={styles.description}>
          Take a look at the examples below...
        </p>
        <div className={styles.grid}>
          <NextLink href="/caching">
            <div className={styles.card}>
              <h3>Caching &rarr;</h3>
              <p>Example using WunderGraph Caching</p>
            </div>
          </NextLink>
          <NextLink href="/mocks">
            <div className={styles.card}>
              <h3>Typesafe Mocking &rarr;</h3>
              <p>WunderGraph allows your do mock any API with type safety.</p>
            </div>
          </NextLink>
          <NextLink href="/realtime">
            <div className={styles.card}>
              <h3>Realtime Subscriptions &rarr;</h3>
              <p>Turn any API into a Realtime Subscription</p>
            </div>
          </NextLink>
          <NextLink href="/authentication">
            <div className={styles.card}>
              <h3>Authentication &rarr;</h3>
              <p>Authentication aware Data Fetching</p>
            </div>
          </NextLink>
        </div>
        <a
            href="https://wundergraph.com/docs/guides/your_first_wundergraph_application/overview"
            target="_blank"
            className={styles.card}
        >
          <h3>Docs &rarr;</h3>
          <p>
            Read the full Getting Started Guide
          </p>
        </a>
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        &nbsp;&nbsp;and&nbsp;
        <img src="/wundergraph.svg" alt="WunderGraph Logo" className={styles.logoWg} />
      </footer>
    </div>
  )
}
