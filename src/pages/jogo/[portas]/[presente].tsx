import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'

import Porta from "../../../components/Porta"
import styles from '../../../styles/Jogo.module.css'
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import PortaModel from "../../../model/porta"

export default function Jogo() {
  const [portas, setPortas] = useState<PortaModel[]>([])
  const [valido, setValido] = useState(true)
  const router = useRouter()


  useEffect(() => {
    const { portas, presente } = router.query
    setPortas(criarPortas(+portas, +presente))
  }, [router?.query])


  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.presente

    const qtPortasValido = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas
    setValido(qtPortasValido && temPresenteValido)
  }, [portas, router.query.portas, router.query.presente])


  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {
          !valido ?
            <h1>Valores incorretos</h1>
          :
          portas.map((porta) => (
            <Porta
              key={porta.numero}
              value={porta}
              onChange={porta => setPortas(atualizarPortas(portas, porta))} />
          ))
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Novo Jogo</button>
        </Link>
      </div>
    </div>
  )
}