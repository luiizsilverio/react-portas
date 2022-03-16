import { useState } from 'react'
import Head from 'next/head'

import Porta from '../components/Porta'
import Presente from '../components/Presente'
import PortaModel from '../model/porta'

export default function Home() {
  const [p1, setP1] = useState<PortaModel>(new PortaModel(1))

  return (
    <div style={{display: "flex"}}>
      <Head>
        <title>Portas</title>
        <meta name="description" content="Lorem Ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presente />
      <Porta value={p1} onChange={newPorta => setP1(newPorta)} />
    </div>
  )
}
