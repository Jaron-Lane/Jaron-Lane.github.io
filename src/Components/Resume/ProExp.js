import { Col, Row } from "react-bootstrap"
import "../scss/_resume.scss"

export const ProExp = () => {
    return (
        <Row className="Exp">
            <Col>
                <h2 className="section-header text-w">Professional Experience</h2>
                <h4 id="h4" className="company-name text-w">Burger Up | Community Hospitality</h4>
                <h5 className="text-pink">Lead Server | May 2017 - Present</h5>
                <ul>
                    <li className="text-w">Provided a high-quality customer experience for clientele</li>
                    <li className="text-w">Effectively communicated details of the menu and specials</li>
                    <li className="text-w">Ensured personal levels of attention during a meal</li>
                    <li className="text-w">Managed and performed quality control of staff closing duties</li>
                </ul>
                {/* <h5 className="text-pink extra-space">Customer Care Floor Support/Specialist | Apr 2018 - Oct 2019</h5>
                <ul>
                    <li className="text-w">Provide team members with assistance regarding company text-w standard operating procedures, software and specialty cases</li>
                    <li className="text-w">Created solutions and procedures that ensured that customers were being assisted as efficiently as possible, decreasing time spent on cases by team members</li>
                    <li className="text-w">Follow up with customers  to find solutions more geared towards their individual desires</li>
                </ul> */}
                <h4 id="h4" className="company-name text-w">Refuge Coffee, AL</h4>
                <h5 className="text-pink">General Manager/Lead Barista  |  Jan 2016 - April 2017</h5>
                <ul>
                    <li className="text-w">Performed training and onboarding of incoming baristas</li>
                    <li className="text-w">Maintained high standards of beverage quality by reviewing shipments, and overseeing preparation and food safety</li>
                    <li className="text-w">Ensured accurate count of daily sales</li>
                </ul>
                {/* <h4 id="h4" className="company-name text-w">Richie Holsenback Productions</h4>
                <h5 className="text-pink">Owner  |  May 2016 - Present</h5>
                <ul>
                    <li className="text-w">Work with clients and end users to create media that suits their personal and professional needs that is aesthetically pleasing as well as functional</li>
                    <li className="text-w">Create a vision for clients that properly conveys the format and tone of the media I produce</li>
                    <li className="text-w">Expand and maintain a customer base and communicate with customers to resolve any creative differences</li>
                </ul> */}
            </Col>
        </Row>
    )
}