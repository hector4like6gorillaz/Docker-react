import axios from 'axios'
import { secureGetItem } from './localForage/collapse.service'
import { localForageKeys } from './localForage/keys'

export const baseURL: string = import.meta.env.VITE_API_BASE_URL

const getSecureToken = async (): Promise<string | null> => {
  try {
    const token = await secureGetItem(localForageKeys.token) // usa el nombre que tú uses
    return token ?? null
  } catch {
    return null
  }
}

const createAxiosInstance = (contentType = 'application/json') => {
  const instance = axios.create({
    baseURL,
    headers: { 'Content-Type': `${contentType}; charset=utf-8` },
  })
  return instance
}

// Instancia para servicios públicos
const SERVICE = createAxiosInstance()
const SERVICE_FORMDATA = createAxiosInstance('multipart/form-data')

// Instancia para servicios que requieren autenticación
const AUTHSERVICE = createAxiosInstance()
const AUTHSERVICE_FORMDATA = createAxiosInstance('multipart/form-data')

// Usamos un interceptor para añadir el token a las peticiones de AUTHSERVICE
const authServices = [AUTHSERVICE, AUTHSERVICE_FORMDATA]

authServices.forEach((service) => {
  service.interceptors.request.use(
    async (config) => {
      const token = await getSecureToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      } else {
        return Promise.reject(new Error('No token found'))
      }
      return config
    },
    (error) => Promise.reject(error)
  )
})

export { SERVICE, AUTHSERVICE, AUTHSERVICE_FORMDATA, SERVICE_FORMDATA }
