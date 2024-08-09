import genericAxios, { AxiosResponse } from 'axios'

export const axios = genericAxios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})
export type { AxiosResponse }
