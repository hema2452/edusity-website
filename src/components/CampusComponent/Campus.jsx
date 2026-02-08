import React from 'react'
import "./Campus.css"
import galleryOne from "../../assets/gallery-1.png"
import galleryTwo from "../../assets/gallery-2.png"
import galleryThree from "../../assets/gallery-3.png"
import galleryFour from "../../assets/gallery-4.png"
import arrow from "../../assets/white-arrow.png"
import Title from '../TitleComponent/Title'

const Campus = () => {
  return (
    <>
    <Title title={"Gallery"} subtitle = {"Campus Photos"} />  
    <div className='campus-container contianer'>
        <div className="gallery-container">
        <img src={galleryOne} alt="" className="image-gallery" />
        <img src={galleryTwo} alt="" className="image-gallery" />
        <img src={galleryThree} alt="" className="image-gallery" />
        <img src={galleryFour} alt="" className="image-gallery" />
    </div>
    <button className="btn gallery-btn">
        See more here <img src={arrow} alt="" />
    </button>
    </div>
    </>

  )
}

export default Campus