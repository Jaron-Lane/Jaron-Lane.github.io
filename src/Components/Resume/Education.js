import { Col, Row } from "react-bootstrap"
import "../scss/_resume.scss"

export const Education = () => {
    return (
        <Row id="Exp">
            <Col>
            <h2 className="section-header text-w">Education</h2>
                <div className="Edu">
                    <h4 id="h4" className="company-name text-w extra-space">Nashville Software School</h4>
                    <h5 className="text-pink">Full-Stack Web Development | Oct 2020 - March 2021</h5>
                </div>
                <div className="Edu">
                    <h4 id="h4" className="company-name text-w extra-space" >University of Mobile</h4>
                    <h5 className="text-pink">Bachelor of Science, Worship Leadership</h5>
                </div>
            
            </Col>
        </Row>
    )
}