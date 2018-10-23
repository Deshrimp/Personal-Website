import React from "react"

export default ({ image, title }) => (
  <div className="row m-3">
    <div className="col-3">
      <img src={image} className="school" alt={title} />
    </div>
    <div className="col">
      <h1>{title}</h1>
    </div>
  </div>
)
