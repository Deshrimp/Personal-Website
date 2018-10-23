import React from "react"
import School from "../components/School"
import Profile from "../images/me.png"
import Tec from "../images/LogoTec.png"
import Coco from "../images/LogoCoco.png"
import Tes from "../images/LogoTrilogy.png"

export default () => (
  <div className="row">
    <div className="col">
      <div className="row">
        <div id="Contact" className="col title">
          About
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 ml-auto mr-auto ml-md-0 mr-md-0">
          <img src={Profile} id="profilePhoto" alt="Deshrimp" />
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12">
              After graduating with a BA in Animation and Digital Arts, I
              decided to further my education with a Masters program in VFX.
              Additionaly, to diversify myself I enrolled in a coding bootcamp,
              so I am capable of producing a wide variety of content and
              experiences. I have done several projects in stop motion, 3D
              animation, and traditional animation. My favorite style of
              animation is stop motion. In my free time I enjoy participating in
              film festivals. I got my feet wet with the world of web
              development by first creating the designs of websites and mobile
              applications in Photoshop. After a while, I wanted to take this
              further and am currently enrolled in a web development bootcamp.
              My strengths in coding are working with databases, APIs, and Node
              applications.
            </div>
          </div>
          <School image={Tec} title="Tec de Monterrey" />
          <School image={Coco} title="Coco School" />
        </div>
      </div>
    </div>
  </div>
)
