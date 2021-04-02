import { Col, Row } from "react-bootstrap"
import "../scss/_resume.scss"

export const TechExp = () => {
    return (
        <Row id="Exp">
            <Col>
                <h2 className="section-header text-w">Technical Experience</h2>
                <h4 className="company-name text-w">Nashville Software School</h4>
                <h5 className="text-pink">Full-Stack Developer | Oct 2020 - March 2021</h5>
                <ul>
                    <li className="text-w">Develop dynamic single-page applications using React in addition to modern ES6+ JavaScript</li>
                    <li className="text-w">Learned fundamentals such as HTML, CSS, JSON, modular code, reusable components, database structure and using Entity Relationship Diagrams</li>
                    <li className="text-w">Work with team members to create sites with user experience in mind, lead user testing sessions in order to gain knowledge on how to improve user interface and enhance the site based on those results</li>
                    <li className="text-w">Server-side, test-driven development with Python, Django, and SQL</li>
                    <li className="text-w">Used Githib to perform and review pull requests to ensure working code free of merge conflicts</li>
                </ul>
            </Col>
        </Row>
    )
}