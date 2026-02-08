import "./Program.css"
import programOne from "../../assets/program-1.png"
import programTwo from "../../assets/program-2.png"
import programThree from "../../assets/program-3.png"
import programOneIcon from "../../assets/program-icon-1.png"
import programTwoIcon from "../../assets/program-icon-2.png"
import programThreeIcon from "../../assets/program-icon-3.png"
import Title from "../TitleComponent/Title"

const Program = () => {
  return (
    <>
    <Title title={"Our program"} subtitle={"What we offer"}/>
    <div className="program container">
        <div className="program-images">
            <img src={programOne} alt="" />
            <div className="caption">
                <img src={programOneIcon} alt="" />
                <p> Under Graduation Degree</p>
            </div>
        </div>
        <div className="program-images">
            <img src={programTwo} alt="" />
            <div className="caption">
                <img src={programTwoIcon} alt="" />
                <p> Graduation Degree</p>
            </div>
        </div>
        
        <div className="program-images">
            <img src={programThree} alt="" />
            <div className="caption">
                <img src={programThreeIcon} alt="" />
                <p> Post Graduation Degree</p>
            </div>
        </div>
    </div>
    
    </>
  )                       
}

export default Program