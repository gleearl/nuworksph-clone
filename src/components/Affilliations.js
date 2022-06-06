import {Col, Row, Container} from "react-bootstrap"

function Affilliations(){

    const affilliationsItems = [
        {
            id: 1,
            img: "https://nuworks.ph/static/images/logo/Media%20-%20Google%20Partner.png"
        },
        {
            id: 2,
            img: "https://nuworks.ph/static/images/logo/Media%20-%20Facebook%20Partner.png"
        },
        {
            id: 3,
            img: "https://nuworks.ph/static/images/logo/Industry%20-%204As.png"
        },
        {
            id: 4,
            img: "https://nuworks.ph/static/images/logo/Industry%20-%20IMMAP.png"
        },
        {
            id: 5,
            img: "https://nuworks.ph/static/images/logo/Industry%20-%20PANA.png"
        },
        {
            id: 6,
            img: "https://nuworks.ph/static/images/logo/Industry%20-%20CPHG.png"
        },
        {
            id: 7,
            img: "https://nuworks.ph/static/images/logo/Interaction%20Design%20Foundation.png"
        }
    ]

    return (
        <section id="awards" className="awards">
            <Container>
                <Row>
                    <Col md={6}>
                        <img className="heading" src="https://nuworks.ph/static/images/logo/Our%20Affiliations.png" alt="" />
                    </Col>
                    <Col md={6} className="d-flex flex-column-reverse text-end">
                        <p>Along the way, we have had the good fortune to win metal from some of the most respected and prestigious show in the industry — locally and internationally. These citations keep us humble and hungry.</p>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <div className="tech-list d-flex flex-wrap flex-row justify-content-center align-items-center">
                        {affilliationsItems.map(data => (
                            <div key={data.id} className="award-item">
                                <img src={data.img} alt="" width="160px"/>
                            </div>
                        ))}
                        
                    </div>
                </div>
                
            </Container>
           
        </section>
    )
}

export default Affilliations