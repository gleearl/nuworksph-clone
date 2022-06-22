import {Col, Row, Container, Form, Button, Modal} from "react-bootstrap"
import { useState } from "react";
import Axios from "axios";

function Connect(){

    const [validated, setValidated] = useState(false)
    const [data, setData] = useState({
        name: "",
        number: 0,
        email: "",
        industry: "",
        company: "",
        brand: "",
        designation: "",
        budget: "below 50k",
        service: "brand"
    })

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const url = "https://reqbin.com/echo/post/json"

    function handleChange (event) {
        const newdata = { ...data }
        newdata[event.target.id] = event.target.value
        setData(newdata)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }else {
            event.preventDefault();
            Axios.post(url, {
                name: data.name,
                number: data.number,
                email: data.email,
                industry: data.industry,
                company: data.company,
                brand: data.brand,
                designation: data.designation,
                budget: data.budget,
                service: data.service

            })
                .then(res => {
                    console.log(res.data)
                    handleShow()
                })
        }
        setValidated(true);

        

    };

    return (
        <Container className="py-5 my-5">
            <Row className="my-5">
                <Col md={6} className="pe-5">
                    <img src="https://nuworks.ph/static/images/logo/Group%207%20(1).png" alt="" width="300px"/>
                    <p className="small my-4">Our ears are open. Our eyes are always looking forward. Let’s talk about your business, your goals, and your vision. We are ready to listen, to execute, and to follow through for you.</p>
                    <img className="me-3" src="https://nuworks.ph/static/images/logo/image%205.png" width="110px" alt="" />
                    <img src="https://nuworks.ph/static/images/logo/Media%20-%20Facebook%20Partner%202.png" width="110px" alt="" />
                </Col>

                <Col>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="number">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="9XX XXX XXXX"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" onChange={handleChange}/>
                            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="industry">
                            <Form.Label>Industry</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="company">
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="brand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="designation">
                            <Form.Label>Designation / Position</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">Please fill out this field.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="budget">
                            <Form.Label>Budget Range</Form.Label>
                            <Form.Select required aria-label="Default select example" onChange={handleChange}>
                                <option value="below 50k">Below 50K</option>
                                <option value="50k-1m">50K - 1M</option>
                                <option value="1m-3m">1M-3M</option>
                                <option value="above 3m">Above 3M</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mb-3" controlId="service">
                            <Form.Label>Service Interest</Form.Label>
                            <Form.Select required aria-label="Default select example" onChange={handleChange}>
                                <option value="Brand Strategy">Brand Strategy</option>
                                <option value="Content Production">Content Production</option>
                                <option value="Media">Media</option>
                                <option value="Creative">Creative</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Ecommerce Marketing">Ecommerce Marketing</option>
                                <option value="Consulting">Consulting</option>
                                <option value="Analytics">Analytics</option>
                                <option value="Experience Design">Experience Design</option>
                                <option value="Technology">Technology</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                            />
                        </Form.Group>
                        
                        
                    </Row>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Button type="submit">Submit form</Button>
                    </div>
                    
                </Form>
                </Col>
            </Row>  

            <Modal show={show} onHide={handleClose} className="text-dark">
                <Modal.Header closeButton>
                <Modal.Title>Form Submitted</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-0">Name: {data.name}</p>
                    <p className="mb-0">Mobile Number: {data.number}</p>
                    <p className="mb-0">Email: {data.email}</p>
                    <p className="mb-0">Industry: {data.industry}</p>
                    <p className="mb-0">Company: {data.company}</p>
                    <p className="mb-0">Brand: {data.brand}</p>
                    <p className="mb-0">Designation/Position: {data.designation}</p>
                    <p className="mb-0">Budget: {data.budget}</p>
                    <p className="mb-0">Service Interest: {data.service}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        
    )
}



export default Connect