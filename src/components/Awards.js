import {Col, Row, Container} from "react-bootstrap"

function Awards(){

    const awardsItems = [
        {
            id: 1,
            img: "https://nuworks.ph/static/images/logo/Campaign%20AOY%20Gold.png"
        },
        {
            id: 2,
            img: "https://nuworks.ph/static/images/logo/Campaign%20AOY%20Silver.png"
        },
        {
            id: 3,
            img: "https://nuworks.ph/static/images/logo/R3.png"
        },
        {
            id: 4,
            img: "https://nuworks.ph/static/images/logo/4As%20AOY.png"
        },
        {
            id: 5,
            img: "https://nuworks.ph/static/images/logo/Asia%20eCommerce.png"
        },
        {
            id: 6,
            img: "https://nuworks.ph/static/images/logo/Festival%20of%20Media.png"
        },
        {
            id: 7,
            img: "https://nuworks.ph/static/images/logo/Ad%20Stars.png"
        },
        {
            id: 8,
            img: "https://nuworks.ph/static/images/logo/AdFest.png"
        },
        {
            id: 9,
            img: "https://nuworks.ph/static/images/logo/Araw.png"
        },
        {
            id: 10,
            img: "https://nuworks.ph/static/images/logo/Kidlat.png"
        },
        {
            id: 11,
            img: "https://nuworks.ph/static/images/logo/Tambuli.png"
        },
        {
            id: 12,
            img: "https://nuworks.ph/static/images/logo/Boomerang%20Awards.png"
        },
        {
            id: 13,
            img: "https://nuworks.ph/static/images/logo/MSAP%20ICE.png"
        },
        {
            id: 14,
            img: "https://nuworks.ph/static/images/logo/PANATA%20Awards.png"
        },
        {
            id: 15,
            img: "https://nuworks.ph/static/images/logo/Quill.png"
        },
        {
            id: 16,
            img: "https://nuworks.ph/static/images/logo/YT%20Awards.png"
        },
        {
            id: 17,
            img: "https://nuworks.ph/static/images/logo/YT%20Works.png"
        }
    ]

    return (
        <section id="awards" className="awards">
            <Container>
                <Row>
                    <Col md={6} className="d-flex flex-column-reverse text-end">
                        <p>Along the way, we have had the good fortune to win metal from some of the most respected and prestigious show in the industry — locally and internationally. These citations keep us humble and hungry.</p>
                    </Col>
                    <Col md={6}>
                        <img className="heading" src="https://nuworks.ph/static/images/logo/Our%20Awards.png" alt="" />
                    </Col>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <div className="tech-list d-flex flex-wrap flex-row justify-content-center align-items-center">
                        {awardsItems.map(data => (
                            <div key={data.id} className="tech-item">
                                <img src={data.img} alt="" width="120px"/>
                            </div>
                        ))}
                        
                    </div>
                </div>
                
            </Container>
           
        </section>
    )
}

export default Awards