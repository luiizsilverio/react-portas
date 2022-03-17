import PortaModel from "../model/porta";

export function criarPortas(qtd: number, selecionada: number): PortaModel[] {
    return Array.from({ length: qtd }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === selecionada
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(
  portas: PortaModel[],
  portaModificada: PortaModel
): PortaModel[] {
  return portas.map(portaAtual => {
    const achou = portaAtual.numero === portaModificada.numero

    if (achou) {
      return portaModificada
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.desSelecionar()
    }
  })
}
