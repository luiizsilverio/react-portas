import Head from 'next/head'
import Porta from '../components/Porta'
import Presente from '../components/Presente'

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Head>
        <title>Portas</title>
        <meta name="description" content="Lorem Ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presente />
      <Porta />
      <Porta selecionada/>
    </div>
  )
}
