import PortaModel from "../model/porta"
import styles from "../styles/Porta.module.css"

interface PortaProps {
  value: PortaModel
  onChange (newPorta: PortaModel): void
}

export default function Porta(props: PortaProps) {
  const porta = props.value
  const sel = porta.selecionada ? styles.selecionada : ''

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
          !porta.aberta && renderizarPorta()
        }
      </div>
      <div className={styles.piso}></div>
    </div>
  )
}