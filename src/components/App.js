import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import SearchForm from "./SearchForm"
import Nav from "./Nav"
import Gallery from "./Gallery"
import DoesNotExist from "./DoesNotExist"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/cats" />} />
          <Route path="/cats" element={<Gallery title="cats" />} />
          <Route path="/rabbits" element={<Gallery title="rabbits" />} />
          <Route path="/sloths" element={<Gallery title="sloths" />} />
          <Route path="/porcupines" element={<Gallery title="porcupines" />} />
          <Route path="/search/:searchTerm" element={<Gallery />} />
          <Route path="*" element={<DoesNotExist />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
