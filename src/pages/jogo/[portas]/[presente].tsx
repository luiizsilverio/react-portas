import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'

import Porta from "../../../components/Porta"
import styles from '../../../styles/Jogo.module.css'
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import PortaModel from "../../../model/porta"

export default function jogo() {
  const [portas, setPortas] = useState<PortaModel[]>([])
  const router = useRouter()


  useEffect(() => {
    const { portas, presente } = router.query
    setPortas(criarPortas(+portas, +presente))
  }, [router?.query])


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