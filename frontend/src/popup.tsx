import React, { useEffect, useState } from "react";
// React Query
import { useQuery, QueryClient, QueryClientProvider } from 'react-query'
// data fetch apis
import {
  getRating,
} from './apis/getRating'
// styles
import './styles/index.scss'
import './styles/reset.scss'
import ReactDOM from "react-dom"
// IMPORTING COMPONENTS
import MainUI from "./components/UI"

const queryClient = new QueryClient()   // Create a client

const Popup = () => {

  /******** consts ********/
  /******** states ********/
  const [rating, setRating] = useState<any>(-1) // rating data
  const [currentURL, setCurrentURL] = useState<any>('');

  /******** dataFetching ********/
  const { isFetching: ratingFetching, data: _ratingData, remove: ratingRemove } = useQuery(
    'getRating', () => getRating(currentURL)
  )

  /******** useEffect ********/
  let areFetching =
    ratingFetching || false

  useEffect(() => {
    if (areFetching) return
    _ratingData && setRating(_ratingData.score)
  }, [ratingFetching])

  // get path data
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
      console.log('useEffected');

    });
  }, []);

  /******** methods ********/

  const methods = {
    isAmazon: () => {
      if (currentURL.indexOf('amazon') === -1) return false
      return true
    }
  }

  /******** JSX ********/

  return (
    <div className="AppContainer">
      <MainUI rating={currentURL && currentURL !== '' ? rating : -1} currentURL={currentURL} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Popup />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
