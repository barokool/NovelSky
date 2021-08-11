import Head from 'next/head'
import Banner from './components/Banner'
import Navbar from './components/Navbar'


export default function Home() {
 

  return (
    <div >
      <Head>
        <title>Yey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
    </div>
  )
}