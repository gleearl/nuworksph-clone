import {Container, Button} from "react-bootstrap"

function Create(){

    return (
        <Container>
            <hr />
            <section id="create" className="create">
                <Container>
                    <div className="d-flex justify-content-center mb-5">
                        <img src="https://nuworks.ph/static/images/logo/Group%205899.png" alt="" width="900"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" className="px-5">
                            <span className="h2">Let's Connect</span> 
                            <span className="d-block">How might we grow your business?</span>
                        </Button>{' '}
                        <Button variant="primary" className="px-5">
                            <span className="h2">Be One of Us</span> 
                            <span className="d-block">Submit your application.</span>
                        </Button>{' '}
                    </div>
                </Container>
            
            </section>
        </Container>
        
    )
}

export default Create