import {Col, Row, Container} from "react-bootstrap"
import service_philosophy from "../assets/service-philosophy.png"
import philosophy from "../assets/philosophy.png"
import capabilty_focus from "../assets/capability-focus.png"
import capabilities from "../assets/capabilities.png"

function Services(){
    return (
        <section id="services">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="d-flex justify-content-center flex-column">
                        <img 
                            className="heading"
                            src={service_philosophy} 
                            alt="service-philosophy"
                        />
                        <p className="mt-5">
                            NuWorks builds, operates, and deploys digital services to help brands and business scale in the digital economy. This is made possible through StoryTeching: the process by which we utilize our end-to-end digital capabilities in communication, commerce, and customer experience.
                        </p>
                            
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <img 
                            className="services-image"
                            src={philosophy} 
                            alt="service-philosophy"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <img 
                            className="services-image"
                            src={capabilities} 
                            alt="service-philosophy"
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center flex-column">
                        <img 
                            className="heading"
                            src={capabilty_focus} 
                            alt="service-philosophy"
                        />
                        <div className="mt-5">
                            <h4 className="text-primary">CX</h4>
                            <p className="">
                                We help brands hack the marketing funnel through insight-driven, intuitively designed customer experiences. We create impact by strategically aligning business goals to human-centric principles.
                            </p>
                            <h4 className="text-primary">COMMUNICATIONS</h4>
                            <p className="">
                                We create data-inspired messages that drive culture and technology. We produce highly engaging content to trigger brand love. We deploy brand-building solution to spur business growth.
                            </p>
                            <h4 className="text-primary">COMMERCE</h4>
                            <p className="">
                                We help brands convert their digital presence to purchases through eCommerce consulting and precision marketing.
                            </p>
                        </div>
                        
                            
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}

export default Services