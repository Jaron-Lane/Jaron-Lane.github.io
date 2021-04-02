import { Col, Row } from "react-bootstrap"
import "../scss/_resume.scss"

export const TechStack = () => {
    return (
        <>
            <Row id="Exp" >
                <Col>
                    <h2 className="section-header text-w">Tech Stack</h2>
                </Col>
            </Row>
            {/* <Row id="pad">
                <Col s={4} className="tech-stack-division">
                    <h4 id="h4" className="stack-title text-w">UX</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-w">Information Architecture</li>
                        <li className="tech-descrip-list text-w">Persona Development</li>
                        <li className="tech-descrip-list text-w">Wireframes, Mockups & Prototyping</li>
                        <li className="tech-descrip-list text-w">Figma</li>
                        <li className="tech-descrip-list text-w">Journey Mapping</li>
                        <li className="tech-descrip-list text-w">Experience Mapping</li>
                        <li className="tech-descrip-list text-w">Interaction Flows</li>
                    </ul>
                </Col>
                <Col s={4} className="tech-stack-division">
                    <h4 id="h4" className="stack-title text-w">Design</h4>
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-w">Web</li>
                        <li className="tech-descrip-list text-w">Responsive</li>
                        <li className="tech-descrip-list text-w">Interaction</li>
                        <li className="tech-descrip-list text-w">Content</li>
                        <li className="tech-descrip-list text-w">Application/Interface</li>
                        <li className="tech-descrip-list text-w">Accessibility</li>
                    </ul>
                </Col>
            </Row> */}
            <Row id="pad">
                <Col s={4} className="tech-stack-division">
                    {/* <h4 id="h4" className="stack-title text-w">Development</h4> */}
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-w">HTML</li>
                        <li className="tech-descrip-list text-w">CSS</li>
                        <li className="tech-descrip-list text-w">JavaScript</li>
                        <li className="tech-descrip-list text-w">ReactJS</li>
                        <li className="tech-descrip-list text-w">Git/Github</li>
                    </ul>
                </Col>
                <Col s={4} className="tech-stack-division">
                    {/* <h4 id="h4" className="stack-title text-w">Creative</h4> */}
                    <ul className="tech-descrip">
                        <li className="tech-descrip-list text-w">Python</li>
                        <li className="tech-descrip-list text-w">Django REST framework</li>
                        <li className="tech-descrip-list text-w">Postman</li>
                        <li className="tech-descrip-list text-w">SQLite3</li>
                        {/* <li className="tech-descrip-list text-w">After Effects</li> */}
                    </ul>
                </Col>
            </Row>
        </>
    )
}