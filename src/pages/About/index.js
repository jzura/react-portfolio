import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md={10} id="about-me-pane">
                        <Row>
                            <Col md={12}>
                                <h3>JOHN ZURAKOWSKI</h3>
                                <h5>454 Roberts Road Subiaco Perth </h5>
                                <span>john@comteque.com.au</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}> <hr></hr></Col>
                        </Row>
                        <Row>
                            <Col md={10}>
                                <p>
                                    Skilled geochemist with extensive experience in geo-analytical laboratories.
                                    Experienced in leading large teams and driving day to day operations.
                                    I have a number of technical projects under my belt in colaboration with the major iron ore mining
                                    companies.
                                    I also have some exposure to machine learning and data analytics.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}> <hr></hr></Col>
                        </Row>
                        <Row>
                        <div className="text-center icons">
                            <a href="https://github.com/jzura" target="/blank">
                                <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/john-zurakowski-162a5a152/" target="/blank">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "black" }} />
                            </a>
                            <a href="https://www.facebook.com" target="/blank">
                                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: "black" }} />
                            </a>
                            <a href="https://twitter.com" target="/blank">
                                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: "black" }} />
                            </a>
                        </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default About;