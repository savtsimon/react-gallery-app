import React from "react"

const Photo = (props) => {
    let imgSrc = `https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg`

    return (
        <li>
            <img src={imgSrc} alt={props.title} />
        </li>
    )
}
export default Photo