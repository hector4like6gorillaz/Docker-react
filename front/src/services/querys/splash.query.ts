import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import {
  fakeGetMeRxFail,
  GetMeFakeSuccess,
} from 'src/features/pokemon/api/pokemon.service'
import type { CustomError } from 'src/interfaces/errors.interface'

interface IFakeGetMe {
  success: true
  user: {
    name: 'Paco'
    role: 'admin'
  }
}

export const useSplashQuerySuccess = () => {
  return useQuery<
    IFakeGetMe,
    AxiosError<CustomError>,
    IFakeGetMe,
    [string, number?]
  >({
    queryKey: ['me'],
    queryFn: GetMeFakeSuccess,
  })
}
export const useSplashQueryFail = () => {
  return useQuery<
    IFakeGetMe,
    AxiosError<CustomError>,
    IFakeGetMe,
    [string, number?]
  >({
    queryKey: ['me'],
    queryFn: fakeGetMeRxFail,
    retry: false,
  })
}
