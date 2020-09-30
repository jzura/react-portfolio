import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import Header from "../../components/Header"
import Footer from "../../components/Footer";

const Experience = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md={8} id="about-me-pane">
                        <Row>
                            <Col md={4}>
                                <h4>Experience</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}> <hr></hr></Col>
                        </Row>
                        <Row>
                            <Row>
                                <Col md={5}>
                                    <h4>Laboratory Supervisor</h4>
                                    <h5>Bureau Veritas</h5>
                                    <h6>February 2020 - October 2020</h6>
                                </Col>
                                <Col md={10}>As a laboratory supervisor for Bureau Veritas, my primary role is more focussed on the operation and production of the laboratory. Making sure KPIs are hit and the departments are continuously improving. I need to be able to provide geochemical technical support to members of the business and clients. I also work on technical projects to make processes more efficient and safer for staff. I also conduct various toolbox talks and have the extra responsibility of development for new graduates, who I mentor. I am now responsible for approximately 50 staff.</Col>

                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Experience;