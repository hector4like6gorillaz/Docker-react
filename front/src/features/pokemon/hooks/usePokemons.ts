import { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from 'src/store'
import { increment } from 'src/store/reducers/counterSlice'
import { notifyToast } from 'src/utils/toast.utils'
import { usePokemonById } from '../api/pokemon.querys'
import {
  useGetPaginatedPokemons,
  usePostPaginatedPokemons,
} from '../api/pokemon.mutations'

import {
  condominiumsReducer,
  initialStatePokemonReducer,
} from '../pokemon.reducer'

const usePokemons = () => {
  const { value } = useSelector((state: RootState) => state.counter)

  const dispatch = useDispatch()

  const [state, dispatchReducer] = useReducer(
    condominiumsReducer,
    initialStatePokemonReducer
  )
  const { data } = usePokemonById(state.count)
  const { mutate } = useGetPaginatedPokemons()
  const { mutate: _postPaginatedService } = usePostPaginatedPokemons()

  const handleGetPokeList = () => {
    dispatchReducer({ type: 'SET_LOADING', payload: true })
    mutate(
      { body: { limit: 150 } },
      {
        onSuccess(data, _variables, _context) {
          dispatchReducer({ type: 'SET_LIST', payload: data })
          notifyToast('informacion obtenida mi buen', 'success')
        },
        onError(error, _variables, _context) {
          notifyToast('informacion obtenida mi buen', 'error')
          console.log(error)
        },
      }
    )
  }

  const handleClickButton = () => {
    dispatchReducer({ type: 'SET_COUNTER', payload: state.count + 1 })
    notifyToast('es asi de facil', 'success')
    notifyToast('es asi de facil', 'warning')
    notifyToast('es asi de facil', 'error')
    dispatch(increment())
  }

  return {
    //variables
    state,
    value,
    data,
    //functiones
    dispatch,
    notifyToast,
    handleClickButton,
    handleGetPokeList,
  }
}

export default usePokemons
