import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../keys'

import type { AxiosError } from 'axios'
import type { CustomError } from 'src/interfaces/errors.interface'
import type { IPokeInfo } from 'src/interfaces/pokemon.interface'
import { getPokemonById } from '../endpoints/pokemon.service'

export const usePokemonById = (id?: number) => {
  return useQuery<
    IPokeInfo,
    AxiosError<CustomError>,
    IPokeInfo,
    [string, number?]
  >({
    queryKey: [QueryKeys.pokemonById, id],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey
      return await getPokemonById(id)
    },
    retry: 1,
  })
}
