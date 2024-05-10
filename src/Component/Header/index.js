import { Link } from "react-router-dom";
import Style, { HeaderStyle } from "./style";
import { Col, Row } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { ColorPallete } from "../Style/PrimaryStyle";


const items = [
    {
        label: <Link to={`/`}>Apple TV+</Link>,
        key: '0',
    },
    {
        label: <div>MLS Season Pass</div>,
        key: '1',
    },
    {
        label: <Link to={`/search`}>Search</Link>,
        key: '2',
    },
];
const dropMenu = () => (
    <Dropdown 
        menu={{
        items,
        }}
        trigger={['click']}
    >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={{color: "#0a84ff"}}>
        Menu
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default function Header() {
    return(
        <HeaderStyle>
             <div className="wrapper">
                <Row className="row">
                    <Col className="col-line" span={8}>
                        {dropMenu()}
                    </Col>
                    <Col className="col-link" span={8}>
                        <div className="link">
                            <Link className="apple-tv" to={`/`}>Apple TV+</Link>
                            <a className="mls" href="#">MLS Season Pass</a>
                        </div>
                    </Col>
                    <Col className="col-menu" span={8}>
                        <div className="menu">
                            <Link to={`/search`}>
                                <div className="search">
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                                            <path fill="#FFFFFFA3" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                        </svg>
                                    </span>
                                    <span>Search</span>
                                </div>
                            </Link> 
                            <div className="sign-in">
                                <svg className="white" xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512">
                                    <path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                </svg>
                                <svg className="blue" xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512">
                                    <path fill="#0a84ff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                </svg>
                                <Link className="sign-in-text" to="#">Sign In</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </HeaderStyle>
    );
};