import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import Header from "../../components/Header"
import Footer from "../../components/Footer";

const Education = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md={8} id="about-me-pane">
                        <Row>
                            <Col md={4}>
                                <h4>Education</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}> <hr></hr></Col>
                        </Row>
                        <Row>
                            <Col md={5}>
                                <h5>The University of Western Australia</h5>
                                <h6>Graduate Diploma</h6>
                                Data Science (2019 - 2020)
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}> <hr></hr></Col>
                        </Row>
                        <Row>
                            <Col md={5}>
                                <h5>The University of Western Australia</h5>
                                <h6>Bachelor of Science</h6>
                                Chemistry (2014 - 2018)
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Education;