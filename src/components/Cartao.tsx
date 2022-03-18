import { ReactNode } from 'react'
import styles from '../styles/Cartao.module.css'

interface CartaoProps {
  bgColor?: string
  children?: ReactNode
}

export default function Cartao(props: CartaoProps) {
  return (
    <div className={styles.cartao}
      style={{
        background: props.bgColor ?? "#fff"
      }}
    >
      { props.children }
    </div>
  )
}