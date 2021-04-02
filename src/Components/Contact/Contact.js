import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { NavBar } from "../NavBar/NavBar"
import shake from '../../images/handshake.png'
import "../scss/_contact.scss"

export const ContactSection = () => {
    return (
        <div className="contact-page">
            <NavBar />
            <Container className="contact-container">
                <Row>
                    <Col m={12}>
                        <p>
                            I’m excited to continue my web development journey with you.
                            Let's dream something up together!
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <a href="https://www.linkedin.com/in/jaron-lane/" target="_blank" rel="noreferrer" >
                            <Button id="btn">
                                LinkedIn
                            </Button>
                        </a>
                    </Col>
                    <Col >
                        <a href="mailto:jaronlaneis@gmail.com" target="_blank" rel="noreferrer" >
                            <Button id="btn">
                                Email
                            </Button>
                        </a>
                    </Col>
                </Row>
                <Image id="shake" src={shake} />
            </Container>
        </div>
    )
}