import {Container} from "react-bootstrap"
import SocialMedia from "./SocialMedia"


function Footer(){

    return (
        <footer id="create" className="create bg-gray py-2 w-100">
            <Container>
                <div className="d-flex flex-row text-dark align-items-center py-4">
                    <p className="my-0 flex-grow-1">Copyright 2021. NuWorks Interactive Labs, Inc. All rights reserved</p>
                    <div className="d-flex align-items-center">
                        <div className="me-3">
                            <a href="terms-and-conditions" className="link-dark mx-2">Terms and Conditions</a>
                            <span>|</span>
                            <a href="privacy-policy" className="link-dark mx-2">Privacy Policy</a>
                        </div>
                        <div>
                            <SocialMedia width="32"/>
                        </div>
                    </div>
                </div>
                
            </Container>
        
        </footer>
    )
}

export default Footer