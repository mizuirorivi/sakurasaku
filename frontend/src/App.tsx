import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// React Query
import { useQuery, useMutation, useQueryClient } from 'react-query'
// data fetch apis
import {
  getRating
} from 'apis/getRating'

// IMPORTING COMPONENTS
import MainUI from "components/UI"

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
      <MainUI rating={rating} />
    </div>
  )
}