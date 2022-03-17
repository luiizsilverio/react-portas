import PortaModel from "../model/porta"
import styles from "../styles/Porta.module.css"
import Presente from "./Presente"

interface PortaProps {
  value: PortaModel
  onChange (newPorta: PortaModel): void
}

export default function Porta(props: PortaProps) {
  const porta = props.value
  const sel = porta.selecionada && !porta.aberta ? styles.selecionada : ''

  const alternarSelecao = (e) => props.onChange(porta.alternarSelecao())

  const abrir = (ev) => {
    ev.stopPropagation()
    props.onChange(porta.abrir())
  }

  function renderizarPorta() {
    return (
    <div className={styles.porta}>
      <div className={styles.numero}>{porta.numero}</div>
      <div
        className={styles.macaneta}
        onClick={abrir}
      ></div>
    </div>
    )
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.batente} ${sel}`}>
        {
          porta.fechada
            ? renderizarPorta()
            : porta.temPresente && <Presente />
        }
      </div>
      <div className={styles.piso}></div>
    </div>
  )
}