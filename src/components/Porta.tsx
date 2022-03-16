import styles from "../styles/Porta.module.css"

type PortaProps = {
  selecionada?: boolean
}

export default function Porta(props: PortaProps) {
  const sel = props.selecionada ? styles.selecionada : ''

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${sel}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>3</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}