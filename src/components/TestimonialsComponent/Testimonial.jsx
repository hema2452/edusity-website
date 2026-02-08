import userOne from "../../assets/user-1.png"
import userTwo from "../../assets/user-2.png"
import userThree from "../../assets/user-3.png"
import userFour from "../../assets/user-4.png"
import nextIcon from "../../assets/next-icon.png"
import backIcon from "../../assets/back-icon.png"
import "./Testimonial.css"
import { useRef } from "react"
import Title from "../TitleComponent/Title"

const Testimonial = () => {

  const slider = useRef();
  let tx = 0;
  // slider.style.color ="red"

  const slideForward = () => {
    if(tx >-50) {
      tx = tx-25;
    }
    slider.current.style.transform = ` translateX(${tx}%)`

  }

  const slideBackward = () => {
    if(tx <0) {
      tx = tx+25;
    }
    slider.current.style.transform = ` translateX(${tx}%)`

  }

  return (
    <>
    <Title title={"Testimonials"} subtitle = {"What Students Says"} /> 
    <div className="testimonials">
        <img src={nextIcon} alt="next-icon" className="icon next-icon" onClick={slideForward}/>
        <img src={backIcon} alt="back-icon" className="icon back-icon" onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={userOne} alt="" />
                  <div>
                    <h3>Mandhana Mark</h3>
                    <span>Esusity,USA</span>
                  </div>
                </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                  </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={userTwo} alt="" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity,USA</span>

                  </div>
                </div>
                <p>
                    
                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
                   <li>
              <div className="slide">
                <div className="user-info">
                  <img src={userThree} alt="" />
                  <div>
                    <h3>Emily Williams </h3>
                    <span>Esusity,USA</span>
                  </div>
                </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                  </p>
              </div>
            </li>
                   <li>
              <div className="slide">
                <div className="user-info">
                  <img src={userFour} alt="" />
                  <div>
                    <h3>Robert J</h3>
                    <span>Esusity,USA</span>
                  </div>
                </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                  </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  </>
  )
}

export default Testimonial