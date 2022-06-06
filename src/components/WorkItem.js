import worksData from "../data/worksData"

import { useEffect, useState } from "react"

import { useLocation } from "react-router-dom";

import {Col, Row, Container} from "react-bootstrap"

function WorkItem(){

    const [work, setWork] = useState([])

    const id = useLocation().state.id

    function getScope(scope){
        const text = scope.split(",");
        return text
    }

    useEffect(() => {
        const workData = worksData.filter(data => data.id === id)
        setWork(workData)
    },[id])

    return (
        <section className="work-item">
            {work.map(data => (
                <Container key={data.id}>
                    <a href="/#works">{"< "}See all works</a>
                    <div className="text-center d-flex flex-column justify-content-center">
                        <img src={data.titleImg} alt="" width="95%"/>
                        <h1 className="mt-4">{data.subtitle}</h1>
                        <a href={data.link} target="blank"><h3>Visit link ></h3></a>
                        <img className="mt-3" src={data.image} alt="" width="100%"/>
                    </div>
                    <Row className="mt-5">
                        <Col md={3}>
                            <div className="mb-4">
                                <h4 className="text-uppercase text-primary mb-0">Client</h4>
                                <p className="fst-italic">{data.client}</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-uppercase text-primary mb-0">Brand</h4>
                                <p className="fst-italic">{data.brand}</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-uppercase text-primary mb-0">Year</h4>
                                <p className="fst-italic">{data.year}</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-uppercase text-primary mb-0">Capability Focus</h4>
                                <p className="fst-italic text-uppercase text-decoration-underline">{data.capability}</p>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-uppercase text-primary mb-0">Scope of Service</h4>
                                {getScope(data.scope).map(scope => (
                                    <p className="fst-italic text-decoration-underline mb-0" key={scope}>{scope}</p>
                                ))}
                            </div>
                        </Col>
                        <Col md={9}>
                            {data.text.map(text => (
                                <div key={text}>

                                    {text.context ? 
                                    <div>
                                        <h4 className="text-uppercase text-primary mb-0">Context</h4>
                                        <p className="">{text.context}</p>
                                    </div>
                                    : ""
                                    }

                                    {text.challenge ? 
                                    <div className="mb-4">
                                        <h4 className="text-uppercase text-primary mb-0">Challenge</h4>
                                        <p className="">{text.challenge}</p>
                                    </div>
                                    : ""
                                    }

                                    {text.solution ? 
                                    <div>
                                        <h4 className="text-uppercase text-primary mb-0">Solution</h4>
                                        <p className="">{text.solution}</p>
                                    </div>
                                    : ""
                                    }

                                    {text.impact ? 
                                    <div>
                                        <h4 className="text-uppercase text-primary mb-0">Impact</h4>
                                        <p className="">{text.impact}</p>
                                    </div>
                                    : ""
                                    }
                            </div>
                            ))}
                        </Col>
                    </Row>
                    
                </Container>
            ))}
        </section>
    )
}

export default WorkItem