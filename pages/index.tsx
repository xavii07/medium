import type { NextPage } from 'next'
import Head from 'next/head'
import FraseLogo from '../components/FraseLogo'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FraseLogo />
    </div>
  )
}

export default Home
