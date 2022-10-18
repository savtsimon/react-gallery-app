import React from "react"

const DoesNotExist = () => {
    return (
        <div className="photo-container">
            <ul>
                <li className="not-found">
                    <h3>Error 404</h3>
                    <p>Sorry, this page does not exist.</p>
                </li>
            </ul>
        </div>
    )
}

export default DoesNotExist