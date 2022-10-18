import apiKey from "../config"
import React, { useState, useEffect } from "react"
import Photo from "./Photo"
import { useParams } from "react-router-dom"

import NotFound from "./NotFound"

const Gallery = (props) => {
    // Loading state for determining if data is still being fetched - for rendering loading page vs. photos
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    let params = useParams()
    // Change term to be fetched when term is from nav or from search bar
    let fetchTerm = params.searchTerm ? params.searchTerm : props.title

    // When the fetch term changes, fetch data for that term
    useEffect(() => {
        fetchData(fetchTerm)
    }, [fetchTerm])

    function fetchData(term) {
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${term}&per_page=24&page=1&format=json&nojsoncallback=1`
        setLoading(true)
        fetch(url)
            .then(checkStatus)
            .then(response => response.json())
            .then(data => {
                // Render the photo elements from the fetched data
                let photos = data.photos.photo.map(photo => (<Photo photo={photo} key={photo.id} />))
                setData(photos)
            })
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


    if (loading) {
        return (<p>Loading...</p>)
    } else if (data.length !== 0) {
        return (
            <div className="photo-container">
                <h2>{fetchTerm}</h2>
                <ul>
                    {data}
                </ul>
            </div>
        )
    } else {
        return (<NotFound />)
    }
}

export default Gallery