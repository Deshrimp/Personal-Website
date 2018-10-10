import React from "react"
import { Project } from "./Project"

class Projects extends React.PureComponent {
  render() {
    const {
      props: { projects }
    } = this
    return projects.map(({ image, title }) => (
      <div className="col-4 p-3">
        <Project image={image} title={title} />
      </div>
    ))
  }
}

export { Projects }
