import {Col, Row, Container} from "react-bootstrap"

function Story(){

    return (
        <section id="story" className="story">
            <Container>
                <div className="d-flex pb-5 justify-content-center">
                    <img className="story-img" src="https://nuworks.ph/static/images/logo/about.png" alt="" />
                </div>
                <Row className="mt-5">
                    <Col md={6}>
                        <img className="px-4 video" src="https://nuworks.ph/static/images/Group%205816.png" alt="" width="100%" />
                    </Col>
                    <Col md={6}>
                        <img className="story-heading mb-4" src="https://nuworks.ph/static/images/logo/Our%20Story.png" alt=""  width="100%" />
                        <p>NuWorks was founded in 2009, with the vision to provide meaningful human experiences to brands, consumers and the society. We developed and maintain a robust service portfolio with capabilities spanning the full spectrum of technology-driven marketing.</p>
                        <p>An independent agency since inception, we are fortunate to grow into one of the biggest full-suite advertising and innovations agencies in the Philippines. Here is how we got there.</p>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col xs={12}>
                        <img className="our-values" src="https://nuworks.ph/static/images/logo/Our%20Values.png" alt="" />
                    </Col>
                </Row>
                <Row className="my-5 d-flex align-items-center">
                    <Col md={6}>
                        <h3 className="text-primary">BE BRAVE FOR GOOD</h3>
                        <h4>Brave is venturing into the unknown. It is our standard of excellence that delivers results. We <span className="text-primary">create meaningful human experiences.</span> Powered by integrity, we will define a better digital future.</h4>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <img src="https://nuworks.ph/static/images/logo/Right%20hand%201%201.png" alt="" />
                    </Col>
                </Row>
                <Row className="my-5 d-flex align-items-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <img src="https://nuworks.ph/static/images/logo/Right%20hand%201%202.png" alt="" />
                    </Col>
                    <Col md={6}>
                        <h3 className="text-primary">LEAD THE CHANGE</h3>
                        <h4>Keep asking, keep exploring, keep pushing. Show the way in designing and building all things imaginable. <span className="text-primary">Learn, unlearn, grow and continue to reinvent</span> who we are, what we do, and how we do it.</h4>
                    </Col>
                </Row>
                <Row className="my-5 d-flex align-items-center">
                    <Col md={6}>
                        <h3 className="text-primary">TRUST & BE TRUSTWORTHY</h3>
                        <h4><span className="text-primary">Work with trust</span> Have faith in your team, clients, and partners. In the same way, work to be trustworthy. <span className="text-primary">Be responsible. Be accountable.</span></h4>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <img src="https://nuworks.ph/static/images/logo/Right%20hand%201%203.png" alt="" />
                    </Col>
                </Row>
                <Row className="my-5 d-flex align-items-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <img src="https://nuworks.ph/static/images/logo/Right%20hand%201%204.png" alt="" />
                    </Col>
                    <Col md={6}>
                        <h3 className="text-primary">BE CUSTOMER CENTRIC</h3>
                        <h4><span className="text-primary">Grow what grows us.</span> Strive to be the best version of yourself so we always deliver the most value to our customers. Their success is our success.</h4>
                    </Col>
                </Row>
                <Row className="my-5 d-flex align-items-center">
                    <Col md={6}>
                        <h3 className="text-primary">BE BETTER TOGETHER</h3>
                        <h4>Collaboration is successful when diverse minds work. With great passion, respect, empathy, commitment, and a lot of fun we can achieve more as a team. <span className="text-primary">Great output comes from great relationships.</span></h4>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center">
                        <img src="https://nuworks.ph/static/images/logo/Right%20hand%201%205.png" alt="" />
                    </Col>
                </Row>
            </Container>
           
        </section>
    )
}

export default Story