import { useState, useEffect } from 'react'
// React Query
import { useQuery, useQueryClient } from 'react-query'
// data fetch apis
import {
  getRating,
  
} from 'apis/getRating'
import { getVisitingHistory } from 'apis/getPath'

// IMPORTING COMPONENTS
import MainUI from "components/UI"

const App: React.FC<any> = () => {

  /******** consts ********/
  // Access the client
  const queryClient = useQueryClient()
  let path: any = getVisitingHistory()

  /******** States ********/
  const [rating, setRating] = useState<any>(-1) // rating data
  const [url, setUrl] = useState<string>('') // product url

  /******** dataFetching ********/
  const { isFetching: ratingFetching, data: _ratingData, remove: ratingRemove } = useQuery(
    'getRating', () => getRating(url)
  )
    
  console.log(path);
  
  

  /******** useEffect ********/

  let areFetching =
    ratingFetching || false

  useEffect(() => {

    if (areFetching) return
    _ratingData && setRating(_ratingData.score)

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
      {path}
    </div>
  )
}

export default App