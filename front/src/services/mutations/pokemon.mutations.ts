import { useMutation } from '@tanstack/react-query'
import { getPokemons, postPokemons } from '../endpoints/pokemon.service'

export const useGetPaginatedPokemons = () => {
  return useMutation({
    mutationFn: getPokemons,
  })
}

export const usePostPaginatedPokemons = () => {
  return useMutation({
    mutationFn: postPokemons,
  })
}
