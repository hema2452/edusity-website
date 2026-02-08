import { useRef } from "react"
import video from "../../assets/college-video.mp4"
import "./Video.css"

const Video = ({hideVideo, setHideVideo}) => {

  const player = useRef(null);
  const closePlayer = (e) => {
    if(e.target === player.current){
      setHideVideo(false)
    }
  }

  return (
    <div className={`video-player ${hideVideo ? " " : 'hide-video'}`}  ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video