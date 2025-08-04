import type { IPokeInfo } from 'src/interfaces/pokemon.interface'

import { firstValueFrom, timer, map, throwError } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { SERVICE } from '../config'

export const getPokemonById = async (id?: number): Promise<IPokeInfo> => {
  const { data } = await SERVICE.get(`/pokemon/${id ?? 150}`)
  return data
}

export const getPokemons = async ({
  body,
}: {
  body: { limit: number }
}): Promise<IPokeInfo[]> => {
  const { data } = await SERVICE.get(`/pokemon?limit=${body.limit}&offset=0`)
  return data
}
export const postPokemons = async ({
  body,
}: {
  body: { limit: number }
}): Promise<IPokeInfo[]> => {
  const { data } = await SERVICE.post(
    `/pokemon?limit=${body.limit}&offset=0`,
    body
  )
  return data
}

export const GetMeFakeSuccess = async (): Promise<any> => {
  console.warn('Success api')
  return await firstValueFrom(
    timer(100).pipe(
      map(() => ({
        success: true,
        user: {
          name: 'Paco',
          role: 'admin',
        },
      }))
    )
  )
}

export const fakeGetMeRxFail = async (): Promise<any> => {
  console.warn('Fail api call')
  return await firstValueFrom(
    timer(100).pipe(
      mergeMap(() => throwError(() => new Error('Token inválido')))
    )
  )
}
