import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// React Query
import { useQuery, useMutation, useQueryClient } from 'react-query'
// data fetch apis
import {
  getRating
} from 'apis/getRating'

export default function App() {

  /******** consts ********/
  // Access the client
  const queryClient = useQueryClient()
  // path location identify stuff
  const location: any = useLocation();

  /******** States ********/
  const [rating, setRating] = useState<any>(-1) // rating data
  const [url, setUrl] = useState<string>("") // product url

  /******** dataFetching ********/

  const { isFetching: ratingFetching, data: _ratingData, remove: ratingRemove } = useQuery(
    'getRating', () => getRating(url)
  )

  /******** useEffect ********/

  let areFetching = ratingFetching

  useEffect(() => {

    if (areFetching) return
    _ratingData && setRating(_ratingData)

  }, [ratingFetching])

  useEffect(() => {
    // of location changed
    setUrl(location)
    ratingRemove()

  }, [location])

  /******** methods ********/

  const methods = {
    test: () => {
    }
  }

  /******** JSX ********/
  return (
    <div className="App">
      <h1>sakurasaku🌸</h1>
      <h3>良質なamazon商品を即時判断！</h3>
      <div className="container">
        <h3> この商品のレーティングは・・・ </h3>
        <h3> {rating} / 5.0 </h3>
      </div>
    </div>
  );
}