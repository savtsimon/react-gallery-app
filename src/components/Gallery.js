import React from "react"
import Photo from "./Photo"

const Gallery = (props) => {
    let photos = props.data.map((photo) => {
        return <Photo photo={photo}
            key={photo.id} />
    })

    return (
        <div className="photo-container">
            <h2>{props.title}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default Gallery