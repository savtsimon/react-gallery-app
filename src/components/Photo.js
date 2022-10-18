import React from "react"

const Photo = (props) => {
    // Construct the Flickr photo URL from the photo data in props
    let imgSrc = `https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg`

    return (
        <li>
            <img src={imgSrc} alt={props.title} />
        </li>
    )
}
export default Photo