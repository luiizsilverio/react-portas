import Head from 'next/head'
import Link from 'next/link'
import Cartao from '../components/Cartao'
import styles from '../styles/Formulario.module.css'

export default function Formulario() {
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
          <Cartao></Cartao>
        </div>
        <div>
          <Cartao></Cartao>
          <Cartao bgColor="#28a058">
            <Link href={`/jogo/4/2`}>
              <h2 className={styles.link}>Iniciar</h2>
            </Link>
          </Cartao>
        </div>
      </div>
    </>
  )
}
