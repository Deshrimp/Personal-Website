import React from "react"
import styled from "styled-components"
import "bootstrap-css-only"
import "./style.css"
import { Container, Row, Col } from "reactstrap"

import { Header } from "./components/Header"
import MainImage from "./images/julio-grimaldo-matte.png"
import { Projects } from "./components/Projects"
import projects from "./data/projects"

const ThirdPink = styled.a`
  color: #d9c0c0;
`

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <div id="home">
          <img id="MainImage" src={MainImage} alt="MattePainting" />
          <Header />
          <div id="Banner">
            <div id="bannertext">Explore Web Development Projects</div>
          </div>
        </div>
        <div id="WebDevelopment">
          <div id="title">Web Development</div>
          <div className="container" id="webProjects">
            <div className="row">
              <div className="col">
                <a href="#" className="submenu">
                  Web Design
                </a>
              </div>
              <div className="col">
                <a href="#" className="submenu">
                  Web Development
                </a>
              </div>
            </div>
            <div className="row">
              <Projects projects={projects} />
            </div>
          </div>
        </div>
        <div id="Art">
          <div id="title">Art</div>
          <div className="container">
            <a href="#" class="submenu">
              Matte Painting
            </a>
            <a href="#" class="submenu">
              Animation
            </a>
            <a href="#" class="submenu">
              3D
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default App
