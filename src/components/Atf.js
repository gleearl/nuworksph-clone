import video from "../assets/video.mp4"

function Atf(){
    return (
        <div id="atf">
            <video playsInline autoPlay muted loop className="vh-100 w-100">
                <source 
                    src={video}
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export default Atf