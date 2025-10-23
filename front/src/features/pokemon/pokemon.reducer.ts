// este es un ejemplo de como manejar un reducer, dentro de el mismo estaria toda su logica
// salvo por importaciones necesarias como las interfaces

import type { IPokeInfo } from './pokemon.interface'

export interface PokemonInitState {
  loading: boolean
  count: number
  dataPokelista: null | IPokeInfo[]
}

export const initialStatePokemonReducer: PokemonInitState = {
  loading: false,
  count: 1,
  dataPokelista: null,
}

export type CondominiumsAction =
  | { type: 'SET_LIST'; payload: IPokeInfo[] | null }
  | { type: 'SET_COUNTER'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }

export function condominiumsReducer(
  state: PokemonInitState,
  action: CondominiumsAction
): PokemonInitState {
  switch (action.type) {
    case 'SET_LIST':
      return { ...state, dataPokelista: action.payload, loading: false }
    case 'SET_COUNTER':
      return { ...state, count: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }

    default:
      return state
  }
}
