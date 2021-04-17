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
  // 対応しているサイトリスト
  const compSites: Array<string> = ["amazon"]

  /******** states ********/
  const [rating, setRating] = useState<any>(-1) // rating data
  const [currentURL, setCurrentURL] = useState<any>('');

  /******** dataFetching ********/
  const { isFetching: ratingFetching, data: _ratingData, remove: ratingRemove } = useQuery(
    'getRating', () => getRating(currentURL)
  )

  /******** useEffect ********/
  let areFetching: boolean =
    ratingFetching || false

  // rating
  useEffect(() => {
    if (areFetching) return
    _ratingData && setRating(_ratingData.score)
  }, [ratingFetching])

  // when path changed
  useEffect(() => {
    // when the current path changed, automatically fetch data
    // only if the site is amazon
    methods.isntCompatible() && ratingRemove()
  }, [currentURL])

  // get path data
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // url changed, automatically change state data
      setCurrentURL(tabs[0].url);
    });
  }, []);

  /******** methods ********/
  const methods = {
    isntCompatible: () => {
      compSites.forEach((sites: string) => {
        if (currentURL.indexOf(sites) !== -1) return true
      })
      return false
    }
  }

  /******** JSX ********/
  return (
    <div className="AppContainer">
      <MainUI 
      rating={currentURL && currentURL !== '' ? rating : -1} 
      currentURL={currentURL}
      compSites={compSites} />
    </div>
  );
};

// react translation
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Popup />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
