import { useState, useEffect } from 'react'
// React Query
import { useQuery, useQueryClient } from 'react-query'
// data fetch apis
import {
  getRating,
} from 'apis/getRating'
// import { getPath } from 'apis/getPath'

// IMPORTING COMPONENTS
import MainUI from "components/UI"

const App: React.FC<any> = () => {

  /******** consts ********/
  // Access the client
  const queryClient = useQueryClient()
  // let path: any = getPath()

  /******** States ********/
  const [rating, setRating] = useState<any>(-1) // rating data
  const [url, setUrl] = useState<string>("https://www.amazon.co.jp/10%E7%A8%AE%E9%A1%9E%E8%88%8C%E8%88%90%E3%82%81%E3%83%A2%E3%83%BC%E3%83%89%EF%BC%86%E6%9C%80%E5%A4%A7450%E5%9B%9E-%E5%88%86%E4%B8%8A%E4%B8%8B%E3%83%9A%E3%83%AD%E3%83%9A%E3%83%AD%E8%88%90%E3%82%81-5%E7%A8%AE%E9%A1%9E%E5%BC%B7%E5%8A%9B%E5%90%B8%E5%BC%95-%E3%82%A2%E3%83%80%E3%83%AB%E3%83%88%E3%82%B0%E3%83%83%E3%82%BA-%E5%A4%A7%E4%BA%BA%E3%81%AE%E3%81%8A%E3%82%82%E3%81%A1%E3%82%83/dp/B08V5FQSDF/ref=sr_1_2?_encoding=UTF8&dchild=1&keywords=%E3%83%90%E3%82%A4%E3%83%96&qid=1618303714&redirect=true&sr=8-2") // product url

  /******** dataFetching ********/

  const { isFetching: ratingFetching, data: _ratingData, remove: ratingRemove } = useQuery(
    'getRating', () => getRating(url)
  )

  /******** useEffect ********/

  let areFetching =
    ratingFetching || false

  useEffect(() => {

    if (areFetching) return
    _ratingData && setRating(_ratingData)

  }, [ratingFetching])

  // useEffect(() => {
  //   // of location changed
  //   setUrl(path)
  //   ratingRemove()

  // }, [path])

  /******** methods ********/

  const methods = {
  }

  /******** JSX ********/
  return (
    <div className="AppContainer">
      <MainUI rating={url && url !== '' ? rating : -1} />
    </div>
  )
}

export default App