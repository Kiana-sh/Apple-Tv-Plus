import { Link } from "react-router-dom";
import BigLogoStyle from "./style";
import HomePage from "../../Pages/HomePage";
import { Col, Row } from "antd";

export default function BigLogo() {
    return(
        <BigLogoStyle>
            <Row>
                <Col span={24}>
                    <div>
                        <img src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/2e/ac/82/2eac8256-ec44-9121-3d4f-045252eddd3d/7bdf8636-a2e8-4d52-a229-bd90e9660036.png/1679x945sr.webp" />
                        <div className="info">
                            <h2>Come Back for New Apple Originals</h2>
                            <p>The only place to stream star-studded Apple Originals and more.</p>
                            <Link to={HomePage}>
                                <button type="button">
                                    <p>Accept Free Trial</p>
                                </button>
                            </Link>
                            <p className="trial">7 days free, then $12.99 per month.</p>
                        </div>
                        <div className="logo">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/oEYYIjc6-3zT0jgpyUiIaw/1x40at.png" />
                        </div>
                    </div>
                </Col>
            </Row>
        </BigLogoStyle>
    );
}