// import { Navbar, Container, Offcanvas, Nav, Button} from 'react-bootstrap';
import NavigationBar from './NavigationBar';

function Header(){

    return (
        <>
            <NavigationBar/>
            <div className='lets-connect'>
                <a href="https://nuworks.ph/lets-connect/">
                    <img src="https://nuworks.ph/static/images/logo/Persistent-NW-Logo-GIF-v2.gif" height="80" alt="" />
                </a>
            </div>
        </>
    )
}

export default Header