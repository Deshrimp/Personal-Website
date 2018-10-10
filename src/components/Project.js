import React from "react"

class Project extends React.PureComponent {
  render() {
    const { image, title } = this.props
    return (
      <div>
        <img className="img-fluid" src={image} alt={title} />
        <div id="ProDescription">{title}</div>
      </div>
    )
  }
}

export { Project }
