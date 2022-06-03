import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ request }) {

  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
      </Head>
      <Header />
      <Navbar />
      <Results results={request}/>
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((resp) => resp.json())

  return {
    props: {
      request,
    }
  }
}