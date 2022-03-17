import { useState } from "react"
import Link from "next/link"

import Porta from "../components/Porta"
import styles from '../styles/Jogo.module.css'
import { atualizarPortas, criarPortas } from "../functions/portas"

export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(4, 2))

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {
          portas.map((porta) => (
            <Porta
              key={porta.numero}
              value={porta}
              onChange={porta => setPortas(atualizarPortas(portas, porta))} />
          ))
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Novo Jogo</button>
        </Link>
      </div>
    </div>
  )
}