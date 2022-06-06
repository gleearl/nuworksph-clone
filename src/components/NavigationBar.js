import { useState } from 'react';
import { Navbar, Container, Offcanvas, Nav} from 'react-bootstrap';
import SocialMedia from './SocialMedia';

function NavigationBar(){

    const [navbar, setNavbar] = useState("false")

    let expand = "false"

    const changeBackground = () => {
        if(window.scrollY >= 92){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)

    function handleText(event){
        let text = event.target.getAttribute("text");
        event.currentTarget.textContent = "/ " + text + " /"
    }

    function toggleText(event){
        let text = event.target.getAttribute("text");
        event.currentTarget.textContent = text
    }

    return (
        <Navbar fixed="top" key={expand} expand={expand} className={"mb-3 " + (navbar ? "active" : "")}>
            <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src="https://nuworks.ph/static/images/logo/NW%20logo%20white.png"
                            width="157"
                            height="34"
                            className="align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Header className='flex-row-reverse' closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='ms-3 d-flex flex-column justify-content-center'>
                        <div className=''>
                            <Nav className="pe-3 text-dark">
                                <Nav.Link href="/#services" onMouseOver={handleText} onMouseOut={toggleText} text="Our Services">Our Services</Nav.Link>
                                <Nav.Link href="/#works" onMouseOver={handleText} onMouseOut={toggleText} text="Our Work">Our Work</Nav.Link>
                                <Nav.Link href="/#story" onMouseOver={handleText} onMouseOut={toggleText} text="About Nuworks">About Nuworks</Nav.Link>
                                <Nav.Link href="#" onMouseOver={handleText} onMouseOut={toggleText} text="Be One of us">Be One of us</Nav.Link>
                                <Nav.Link href="#" onMouseOver={handleText} onMouseOut={toggleText} text="Let's Connect">Let's Connect</Nav.Link>
                            </Nav>
                        </div>
                    </Offcanvas.Body>
                    <div className="m-4">
                        <div className='mb-4'>
                            <img className='me-3' src="https://nuworks.ph/static/images/logo/image%205.png" alt="" width="110" />
                            <img src="https://nuworks.ph/static/images/logo/Media%20-%20Facebook%20Partner%202.png" alt="" width="110" />
                        </div>
                        <SocialMedia width="28"/>
                        <div className='text-secondary mt-3'>
                            <a href="terms-and-conditions" className="link-dark mx-2">Terms and Conditions</a>
                            <span>|</span>
                            <a href="privacy-policy" className="link-dark mx-2">Privacy Policy</a>
                        </div>
                        
                    </div>
                    
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavigationBar