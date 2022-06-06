import {Col, Row, Container, Tabs, Tab, Button} from "react-bootstrap"
import list_services from "../assets/list-services.png"
import ServicesSlider from "./ServicesSlider"
import servicesData from "../data/servicesData";
import { useEffect, useState } from "react";

function ListServices(){

    const [service, setService] = useState(1)

    function handleChange(eventKey){
        setService(eventKey)
    }

    useEffect(() => {
        handleChange()
    },[])

    console.log(service)

    return (
        <section id="list-services" className="list-services" >
            <Container>
                <img 
                    className="heading"
                    src={list_services} 
                    alt="list-services"
                />
                <Row>
                    <Col>
                        <Tabs
                            defaultActiveKey={service}
                            transition={false}
                            className="mt-3 mb-3"
                            variant="pills"
                            onSelect={handleChange}
                        >
                            {servicesData.map((data) => (
                                <Tab key={data.id} eventKey={data.id} title={data.title}>
                                    <h3 className="text-uppercase">/ {data.title}/</h3>
                                    <ServicesSlider id={service}/>
                                </Tab>
                            ))}

                        </Tabs>
                    </Col>
                    
                </Row>
                <h3 className="d-inline">/ Related Work /</h3>
                <Button variant="link" className="text-uppercase fw-semibold ms-5 text-decoration-none">View All Works</Button>
            </Container>
        </section>
    )
}



export default ListServices