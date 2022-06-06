// import {Container} from "react-bootstrap"
import image from "../assets/linkedin.svg"

function SocialMedia(prop){

    return (
        <ul className="d-flex align-items-center mb-0 list-unstyled">
            <li className="me-3"><a href="https://www.facebook.com/nuworks"><img src="https://nuworks.ph/static/images/logo/Vector.svg" width={prop.width} alt="" target="_blank"/></a></li>
            <li className="me-3"><a href="https://ph.linkedin.com/company/nuworksph"><img src={image} width={prop.width} alt="" target="_blank"/></a></li>
            <li className="me-3"><a href="https://www.instagram.com/nuworksph/"><img src="https://nuworks.ph/static/images/logo/instagram%20(7).svg" width={prop.width} alt="" target="_blank"/></a></li>
            <li className="me-3"><a href="https://twitter.com/nuworksph"><img src="https://nuworks.ph/static/images/logo/twitter%20(9).svg" width={prop.width} alt="" target="_blank"/></a></li>
            <li className="me-3"><a href="https://www.youtube.com/c/NuWorksInteractiveLabsIncPasig"><img src="https://nuworks.ph/static/images/logo/youtube%20(2).svg" width={prop.width} alt="" target="_blank"/></a></li>
        </ul>
    )
}

export default SocialMedia