import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react"
import { Image } from "react-bootstrap";
import { NavBar } from "../NavBar/NavBar";
// import "../scss/_work.scss"
import "../scss/_greet.scss"
import "../scss/_variables.scss"
import LTphoto from '../../images/noun_Date.png'
import C43photo from '../../images/cap.png'
import ourflix from '../../images/noun_Plant.png'
import Journalphoto from '../../images/Diary.png'
import { Link } from "react-router-dom";
import ScrollToTop from "./Greet";

export const ProjectPage = () => {
    return (
        <div className="work-page">
            <NavBar />
            <ScrollToTop />
            <div id="projects-all">
                <h3 id="project-header">Recent Projects</h3>
                <Container id="Container">
                    <Row noGutters id="margin">
                        <Col xl={6}>
                            {/* <Link to="/ourflix" > */}
                                <Image src={ourflix} width="100%" height="auto" />
                            {/* </Link> */}
                        </Col>
                        <Col xl={6}>
                            <h4 className="project-title">Terrace</h4>
                            <p className="project-text date">March 2021 - NSS Full-Stack Project</p>
                            <p className="project-text">Keep track of all your plants and their needs. Create rooms, plants, and how often you want them to be watered. Terrace does the rest!</p>
                            <a href="https://github.com/Jaron-Lane/terrace-client"><Button size="sm" id="btn">See Client-Side Github!</Button></a>
                            <a href="https://github.com/Jaron-Lane/terrace-server"><Button size="sm" id="btn">See Server-Side Github!</Button></a>
                        </Col>
                    </Row>
                    {/* <Row id="large-screen" noGutters >
                        <Col xl={6}>
                            <h4 className="project-title">Coding Cohort 43 Class Site</h4>
                            <p className="project-text date">December 2020 - 4 months into my coding journey</p>
                            <p className="project-text">Showcasing the talented individuals at the Nashville Software School in Cohort 43</p>
                            <Link to="/cohort-site"><Button size="sm" id="btn">Case Study</Button></Link>
                        </Col>
                        <Col xl={6}>
                            <Link to="/cohort-site" >
                                <Image src={C43photo} width="100%" height="auto" />
                            </Link>
                        </Col>
                    </Row> */}
                    <Row id="small-screen" noGutters>
                        <Col xl={6}>
                            <Link to="/cohort-site" >
                                <Image src={C43photo} width="100%" height="auto" />
                            </Link>
                        </Col>
                        <Col xl={6}>
                            <h4 className="project-title">Coding Cohort 43 Class Site</h4>
                            <p className="project-text date">December 2020 - 4 months into my coding journey</p>
                            <p className="project-text">Showcasing the talented individuals at the Nashville Software School in Cohort 43</p>
                            <Link to="/cohort-site"><Button size="sm" id="btn">Case Study</Button></Link>
                        </Col>
                    </Row>
                    <Row id="margin" noGutters>
                        <Col xl={6}>
                            {/* <Link to="/laugh-track" > */}
                                <Image src={LTphoto} width="100%" height="auto" />
                            {/* </Link> */}
                        </Col>
                        <Col xl={6}>
                            <h4 className="project-title">Keeper</h4>
                            <p className="project-text date">December 2020 - NSS Front-End Project</p>
                            <p className="project-text">Designed to help the idealitic, over-achiever reach their goals.</p>
                            <a href="https://github.com/Jaron-Lane/keeper"><Button size="sm" id="btn">See Github!</Button></a>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </div>
    )
}