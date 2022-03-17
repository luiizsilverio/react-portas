import { useState } from 'react'
import Head from 'next/head'

import Porta from '../components/Porta'
import Presente from '../components/Presente'
import PortaModel from '../model/porta'
import { atualizarPortas, criarPortas } from '../functions/portas'

export default function Home() {

  return (
    <>
      <Head>
        <title>Portas</title>
        <meta name="description" content="Lorem Ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{display: "flex"}}>
        <h1>Jogo das Portas</h1>
      </div>
    </>
  )
}
