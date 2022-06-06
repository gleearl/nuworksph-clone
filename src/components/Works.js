import { useState, useEffect } from "react"
import {Col, Row, Container, Form} from "react-bootstrap"
import worksData from "../data/worksData"
import { Link } from "react-router-dom";
// import list_services from "../assets/list-services.png"

function Works(){

    const [work, setWork] = useState([])
    const [loading, setLoading] = useState(false)
    const [focus, setFocus] = useState('all')
    const [service, setService] = useState('all')

    const handleChangeFocus = (event) => {
        setLoading(true)
        const currentFocus = event.target.value
        setFocus(currentFocus)

        let workData = {}
        if(service === "all" && currentFocus !== "all"){
            workData = worksData.filter(data => data.focus === currentFocus)
        }else if (currentFocus === "all" && service !=="all"){
            workData = worksData.filter(data => data.service === service)
        }else if (currentFocus !== "all" && service !== "all"){
            workData = worksData.filter(data => data.service === service && data.focus === currentFocus)
        }else if (currentFocus === "all" && currentFocus === "all") {
            workData = worksData
        }

        setWork(workData)
        console.log(workData, currentFocus, service)
        
        setTimeout(() => setLoading(false), 400) 
        event.preventDefault()
    }

    const handleChangeService = (event) => {
        
        setLoading(true)
        const currentService = event.target.value
        setService(currentService)
        let workData = {}
        if(focus === "all" && currentService !== "all"){
            workData = worksData.filter(data => data.service === currentService)
        }else if (currentService === "all" && focus !=="all"){
            workData = worksData.filter(data => data.focus === focus)
        }else if (currentService !== "all" && focus !== "all"){
            workData = worksData.filter(data => data.service === currentService && data.focus === focus)
        }else if (currentService === "all" && focus === "all") {
            workData = worksData
        }

        setWork(workData)
        console.log(workData, focus, currentService)
        
        setTimeout(() => setLoading(false), 400) 
        event.preventDefault()
    }

    useEffect(() => {
        setWork(worksData)
      },[]);


    return (
        <section id="works" className="works" >
            <Container>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="our-work" src="https://nuworks.ph/static/images/logo/work.png" alt="work" />
                    <p className="mt-4">From “to”, we “DO”. We have prided ourselves by our work that not only move the needle, but because it helps move the gears of economy. Through our work, we do help fulfill the needs of our clients, of people. This is what we do, these are some of the work we have done.</p>
                </div>
                <div className="mt-4">
                    <Row>
                        <Col xs={3}>
                            <Form.Select className="d-inline me-3" onChange={handleChangeFocus} defaultValue={'default'}>
                                <option value="default" disabled>Filter by Capability Focus</option>
                                <option value="CX">CX</option>
                                <option value="communications">Communications</option>
                                <option value="commerce">Commerce</option>
                                <option value="all">All</option>
                            </Form.Select>
                        </Col>
                        <Col xs={3}>
                            <Form.Select className="d-inline me-3" onChange={handleChangeService} defaultValue={'default'}>
                                <option value="default" disabled>Filter by Services</option>
                                <option value="brand">Brand Strategy</option>
                                <option value="content">Content Production</option>
                                <option value="media">Media</option>
                                <option value="creative">Creative</option>
                                <option value="engagement">Engagement</option>
                                <option value="ecommerce">Ecommerce Marketing</option>
                                <option value="consulting">Consulting</option>
                                <option value="analytics">Analytics</option>
                                <option value="experience">Experience Design</option>
                                <option value="technology">Technology</option>
                                <option value="all">All</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <div className="mt-5 work-items-container">
                        <Row>
                        {loading ? <h4>Loading...</h4>

                        :work.map(data => (
                            <Col key={data.id} md={3}>
                                <div className="work-item m-4 text-center">
                                    <Link 
                                        to={data.title.split(" ").join("-").toLowerCase()}
                                        state={{id: data.id}}
                                    >
                                        <img src={data.image} width="100%" alt=""/>
                                        <div className="item-desc">
                                            <p className="text-primary mt-3 mb-0 h5">{data.title}</p>
                                            <p className="text-white text-small fst-italic text-uppercase">{data.focus}</p>
                                        </div>
                                    </Link>
                                </div>
                            </Col>
                        ))
                        }
                            
                        </Row>
                        
                    </div>
                </div>
                
            </Container>
        </section>
    )
}

export default Works