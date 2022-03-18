import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import Cartao from '../components/Cartao'
import InputNumber from '../components/InputNumber'
import styles from '../styles/Formulario.module.css'

export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(3)
  const [presente, setPresente] = useState(1)

  return (
    <>
      <Head>
        <title>Portas</title>
        <meta name="description" content="Lorem Ipsum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.formulario}>
        <div>
          <Cartao bgColor="#c0392c">
            <h1>Monty Hall</h1>
          </Cartao>
          <Cartao>
            <InputNumber
              text="Nº Portas"
              value={qtdPortas}
              onChange={(newQtd) => setQtdPortas(newQtd)}
            />
          </Cartao>
        </div>
        <div>
          <Cartao>
            <InputNumber
              text="Presente na porta"
              value={presente}
              onChange={(newPresente) => setPresente(newPresente)}
            />
          </Cartao>
          <Cartao bgColor="#28a058">
            <Link href={`/jogo/${ qtdPortas }/${ presente }`}>
              <h2 className={styles.link}>Iniciar</h2>
            </Link>
          </Cartao>
        </div>
      </div>
    </>
  )
}
