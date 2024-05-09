import { Col, Row } from "antd";
import FooterStyle from "./style";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <FooterStyle>
            <div className="wrapper">
                <Row className="row">
                    <Col className="list" span={12}>
                        <div className="copyright">Copyright © 2024 Apple Inc. All Rights Reserved.</div>
                        <div className="links">
                            <a href="#">Internet Service Terms</a>
                            <Link to={"/about-us"}>Apple TV & Privacy</Link>
                            <a href="#">Cookie Policy</a>
                            <Link to={"/contact-us"} className="last-link">Contact Us</Link>
                        </div>
                    </Col>
                    <Col className="language" span={12}>
                        <a href="#" className="english">Canada (English)</a>
                        <a href="#" className="french">Francais (Canada)</a>
                    </Col>
                </Row>
            </div>
        </FooterStyle>
    );
}