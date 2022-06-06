import {Col, Row, Container} from "react-bootstrap"

function TechStack(){

    const techStackItems = [
        {
            id: 1,
            img: "https://nuworks.ph/static/images/logo/01%20Digital%20Ocean.png"
        },
        {
            id: 2,
            img: "https://nuworks.ph/static/images/logo/02%20AWS.png"
        },
        {
            id: 3,
            img: "https://nuworks.ph/static/images/logo/03%20MySQL.png"
        },
        {
            id: 4,
            img: "https://nuworks.ph/static/images/logo/04%20MongoDB.png"
        },
        {
            id: 5,
            img: "https://nuworks.ph/static/images/logo/05%20PostgreSQL.png"
        },
        {
            id: 6,
            img: "https://nuworks.ph/static/images/logo/06%20Nginx.png"
        },
        {
            id: 7,
            img: "https://nuworks.ph/static/images/logo/07%20PHP.png"
        },
        {
            id: 8,
            img: "https://nuworks.ph/static/images/logo/08%20Cloudflare.png"
        },
        {
            id: 9,
            img: "https://nuworks.ph/static/images/logo/09%20Magento.png"
        },
        {
            id: 10,
            img: "https://nuworks.ph/static/images/logo/10%20Moodle.png"
        },
        {
            id: 11,
            img: "https://nuworks.ph/static/images/logo/11%20WordPress.png"
        },
        {
            id: 12,
            img: "https://nuworks.ph/static/images/logo/12%20SuiteCRM.png"
        },
        {
            id: 13,
            img: "https://nuworks.ph/static/images/logo/13%20Drupal.png"
        },
        {
            id: 14,
            img: "https://nuworks.ph/static/images/logo/14%20Django.png"
        },
        {
            id: 15,
            img: "https://nuworks.ph/static/images/logo/15%20Python.png"
        },
        {
            id: 16,
            img: "https://nuworks.ph/static/images/logo/16%20Laravel.png"
        },
        
    ]

    return (
        <section id="tech-stack" className="tech-stack">
            <Container>
                <Row>
                    <Col md={6}>
                        <img className="tech-stack-image" src="https://nuworks.ph/static/images/logo/Our%20Tech%20Stack.png" alt="" />
                    </Col>
                    <Col md={6} className="d-flex flex-column-reverse">
                        <p>Our growing but curated catalogue of tools, subscriptions, and in-house enterprise make up why and how we can walk our talk in tech.</p>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <div className="tech-list d-flex flex-wrap flex-row justify-content-center">
                        {techStackItems.map(data => (
                            <div key={data.id} className="tech-item">
                                <img key={data.id} src={data.img} alt="" width="110px"/>
                            </div>
                        ))}
                        
                    </div>
                </div>
                
            </Container>
           
        </section>
    )
}

export default TechStack