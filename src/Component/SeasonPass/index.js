import SeasonPassStyle from "./style";
import seasonpassJpg from "../../Images/seasonpass.jpg"
import { Col, Row } from "antd";

export default function SeasonPass() {
    return (
        <SeasonPassStyle>
            <div className="wrapper">
                <Row>
                    <Col span={24}>
                        <div className="upsell">
                            <div className="logo">
                                <img src={seasonpassJpg} />
                            </div>
                            <p className="text">Every match. Every club. No blackouts. Only on Apple TV.</p>
                            <div className="subscribe">
                                <button>Subscribe</button>
                                <a href="#">
                                    <span>Learn More</span>
                                    <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m2.6 15.6c-.3.3-.6.4-1 .4-.9 0-1.6-.7-1.6-1.5 0-.4.2-.8.5-1.1l5.9-5.4-5.9-5.4c-.3-.3-.5-.7-.5-1.1 0-.9.7-1.5 1.6-1.5.4 0 .7.1 1 .4l6.8 6.4c.4.4.6.7.6 1.2s-.2.8-.6 1.2z" opacity=".95"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </SeasonPassStyle>
    );
}