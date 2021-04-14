import axios from 'axios'
import { LOADIPHLPAPI } from 'node:dns'
import { isPropertySignature } from 'typescript'
const endpoint: string = 'localhost:8080/'

// URLを渡してレーティングデータを取得　
export const getRating = async (url: string) => {
  const { data } = await axios.post<any>(
    `${endpoint}api/url2score?url=${url}`
  )
  return data
}
