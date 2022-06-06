import {Col, Row, Container} from "react-bootstrap"

function Partners(){

    const partnerItems = [
        {
            id: 1,
            img: "https://nuworks.ph/static/images/logo/smb.png"
        },
        {
            id: 2,
            img: "https://nuworks.ph/static/images/logo/Unilever.png"
        },
        {
            id: 3,
            img: "https://nuworks.ph/static/images/logo/Nestle.png"
        },
        {
            id: 4,
            img: "https://nuworks.ph/static/images/logo/Coke.png"
        },
        {
            id: 5,
            img: "https://nuworks.ph/static/images/logo/Avida.png"
        },
        {
            id: 6,
            img: "https://nuworks.ph/static/images/logo/bdo.png"
        },
        {
            id: 7,
            img: "https://nuworks.ph/static/images/logo/Petron.png"
        },
        {
            id: 8,
            img: "https://nuworks.ph/static/images/logo/unicef.png"
        },
        {
            id: 9,
            img: "https://nuworks.ph/static/images/logo/Cignal%20Play.png"
        },
        {
            id: 10,
            img: "https://nuworks.ph/static/images/logo/jollibee.png"
        },
        {
            id: 11,
            img: "https://nuworks.ph/static/images/logo/Burger%20King.png"
        },
        {
            id: 12,
            img: "https://nuworks.ph/static/images/logo/Greenwich.png"
        },
        {
            id: 13,
            img: "https://nuworks.ph/static/images/logo/Maggi.png"
        },
        {
            id: 14,
            img: "https://nuworks.ph/static/images/logo/Mercedes%20Benz.png"
        },
        {
            id: 15,
            img: "https://nuworks.ph/static/images/logo/AstraZeneca.png"
        },
        {
            id: 16,
            img: "https://nuworks.ph/static/images/logo/Rockwell%20Land.png"
        },
        {
            id: 17,
            img: "https://nuworks.ph/static/images/logo/iPeople.png"
        },
        {
            id: 18,
            img: "https://nuworks.ph/static/images/logo/CECP.png"
        },
        {
            id: 19,
            img: "https://nuworks.ph/static/images/logo/San%20Mig%20Coffee.png"
        },
        {
            id: 20,
            img: "https://nuworks.ph/static/images/logo/Argentina.png"
        },
        {
            id: 21,
            img: "https://nuworks.ph/static/images/logo/Swift.png"
        },
        {
            id: 22,
            img: "https://nuworks.ph/static/images/logo/Century%20Pacific.png"
        },
        {
            id: 23,
            img: "https://nuworks.ph/static/images/logo/Resorts%20World.png"
        },
        {
            id: 24,
            img: "https://nuworks.ph/static/images/logo/Alveo.png"
        },
        {
            id: 25,
            img: "https://nuworks.ph/static/images/logo/Lazada.png"
        },
        {
            id: 26,
            img: "https://nuworks.ph/static/images/logo/PMFTC.png"
        },
        {
            id: 27,
            img: "https://nuworks.ph/static/images/logo/Uratex.png"
        }
        
    ]

    return (
        <section id="partners" className="partners">
            <Container>
                <Row>
                    <Col md={6}>
                        <img className="heading" src="https://nuworks.ph/static/images/logo/Our%20Partners.png" alt="" />
                    </Col>
                    <Col md={6} className="d-flex flex-column-reverse">
                        <p>As proud as we are of our people and capabilities, we are equally proud of the relationships we have forged with our partner clients. We work hard and smart at being their enthusiastic, abled partners.</p>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <div className="tech-list d-flex flex-wrap flex-row justify-content-center">
                        {partnerItems.map(data => (
                            <div key={data.id} className="tech-item">
                                <img key={data.id} src={data.img} alt="" width="100px"/>
                            </div>
                        ))}
                        
                    </div>
                </div>
                
            </Container>
           
        </section>
    )
}

export default Partners