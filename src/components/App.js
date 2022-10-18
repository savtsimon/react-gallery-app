import apiKey from "../config"
import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import SearchForm from "./SearchForm"
import Nav from "./Nav"
import Gallery from "./Gallery"
import NotFound from "./NotFound"

function App() {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("cats")
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    fetchData(searchTerm)
  }, [searchTerm])

  function fetchData(term) {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${term}&per_page=24&page=1&format=json&nojsoncallback=1`
    console.log("fetching.......")
    fetch(url)
      .then(checkStatus)
      .then(response => response.json())
      .then(data => setData(data.photos.photo))
      .catch(err => console.log("Looks like there was an error: ", err))
      .finally(() => setLoading(false))
  }

  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

  function pageLoad() {
    if (data.length !== 0) {
      if (!loading) {
        return (<Gallery data={data} title={searchTerm} />)
      } else {
        return (<p>Loading...</p>)
      }
    } else {
      return (<NotFound />)
    }
  }

  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm setSearchTerm={setSearchTerm} />
        <Nav setSearchTerm={setSearchTerm} />
        <Routes>
          <Route exact path="/" element={<Navigate to={`/${searchTerm}`} />} />
          <Route path={`/:${searchTerm}`} element={pageLoad()} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
