import React from "react"
import "bootstrap-css-only"
import "./style.css"

import Typing from "react-typing-animation"

import { Header } from "./components/Header"
import Contact from "./components/Contact"

import MainImage from "./images/black.jpg"
import { Projects } from "./components/Projects"
import projects from "./data/projects"
import devprojects from "./data/Web/development"
import designprojects from "./data/Web/design"
import makeupprojects from "./data/Art/makeup"
import animationprojects from "./data/Art/animation"
import vfxprojects from "./data/Art/vfx"

class App extends React.PureComponent {
  state = { currentWeb: "design", currentArt: "animation" }

  changeCurrentProject = event => {
    const { name, value } = event.currentTarget
    const nextState = { [name]: value }
    this.setState(nextState)
  }

  render() {
    const {
      state: { currentWeb, currentArt },
      changeCurrentProject
    } = this
    const webProjects = currentWeb === "dev" ? devprojects : designprojects
    const artProjects =
      currentArt === "animation"
        ? animationprojects
        : currentArt === "vfx"
        ? vfxprojects
        : makeupprojects
    const str1 = "Web Development Projects"
    const str2 = "Animation Projects"
    return (
      <>
        <div id="home">
          <img id="MainImage" src={MainImage} alt="MattePainting" />
          <Header />
          <div id="Banner">
            <div id="bannertext">
              Explore
              <Typing loop>
                <a className="typingText" href="#WebDevelopment">
                  {str1}
                </a>
                <Typing.Delay ms={2000} />
                <Typing.Backspace count={str1.length} />
                <a className="typingText" href="#Art">
                  {str2}{" "}
                </a>
                <Typing.Delay ms={2000} />
                <Typing.Backspace count={str2.length} />
              </Typing>
            </div>
          </div>
        </div>
        <div id="WebDevelopment" className="title">
          Web Development
        </div>
        <div className="container" id="webProjects">
          <div className="row">
            <div className="col">
              <button
                name="currentWeb"
                value="design"
                onClick={changeCurrentProject}
                className="submenu"
              >
                Web Design
              </button>
            </div>
            <div className="col">
              <button
                name="currentWeb"
                value="dev"
                onClick={changeCurrentProject}
                className="submenu"
              >
                Web Development
              </button>
            </div>
          </div>
          <div className="row">
            <Projects projects={webProjects} />
          </div>
          <div className="row">
            <div className="col">
              <div id="Art" className="title">
                Art
              </div>

              <div className="row">
                <div className="col">
                  <button
                    onClick={changeCurrentProject}
                    name="currentArt"
                    value="vfx"
                    className="submenu"
                  >
                    VFX
                  </button>
                </div>
                <div className="col">
                  <button
                    name="currentArt"
                    value="animation"
                    className="submenu"
                    onClick={changeCurrentProject}
                  >
                    Animation
                  </button>
                </div>
                <div className="col">
                  <button
                    onClick={changeCurrentProject}
                    name="currentArt"
                    value="makeup"
                    className="submenu"
                  >
                    FX Makeup
                  </button>
                </div>
              </div>
              <div className="row">
                <Projects projects={artProjects} />
              </div>
            </div>
          </div>
          <Contact />
        </div>
      </>
    )
  }
}

export default App
