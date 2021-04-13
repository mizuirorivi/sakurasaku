import axios, { AxiosResponse } from 'axios'
import { isPropertySignature } from 'typescript'
const endpoint: string = 'localhost:3000/'

// URLを渡してレーティングデータを取得　
export const getRating = async (url: string) => {
  const { data } = await axios.get<AxiosResponse>(
    `${endpoint}`,
    {
      url: `${url}`
    }
  )
  return data
}
