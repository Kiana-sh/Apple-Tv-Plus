import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const ContactStyle = styled.div`
padding: 50px 0;
background-color: ${ColorPallete.White};
color: ${ColorPallete.ContactUsFont};
div.wrapper {
    width: 50%;
    margin: 0 auto;
    h1.big-title {
        font-size: 64px;
        font-weight: 600;
        text-align: center;
        margin: 80px 0;
    }
    h2.middle-title {
        font-size: 40px;
        font-weight: 600;
    }
    h3 {
        font-size: 28px;
        font-weight: 600;
        margin-top: 33px;
        margin-bottom: 11px;
    }
    p {
        font-size: 17px;
        line-height: 1.47059;
        font-weight: 400;
        a.link {
            color: ${ColorPallete.ContactUsLinkBlue};
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .divider {
        background-color: ${ColorPallete.ContactUsBorder};
        width: 100%;
        height: 1px;
        margin: 50px auto;
    }
    div.point {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        align-items: baseline;
        margin-left: 53px;
        svg {
            fill: ${ColorPallete.ContactUsFont};
        }
        p {
            margin: 5px 0;
        }
    }
    div.top-space {
        margin-top: 30px;
    }
    div.support {
        div.point {
            margin-left: 0;
        }
    }
    div.box {
        border: 1px solid ${ColorPallete.ContactUsBorder};
        background-color: ${ColorPallete.ContactUsTable};
        margin-top: 50px;
        .address {
            text-align: center;
            h4 {
                margin-top: 33px;
                margin-bottom: 36px;
                font-size: 28px;
                line-height: 1.14286;
                font-weight: 600;
            }
            p {
                margin-bottom: 0;
            }
        }
        div.requested {
            padding: 0 36px;
            h4 {
                font-size: 28px;
                line-height: 1.14286;
                font-weight: 600;
                margin-bottom: 25px;
            }
            div.requested-flex {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: baseline;
                flex-wrap: wrap;
                div.qa {
                    width: 30%;               
                    margin-top: 15px;
                    h5 {
                        font-size: 19px;
                        line-height: 1.21053;
                        font-weight: 600;
                    }
                    p.info {
                        margin-bottom: 0;
                    }
                    a.link {
                        color: ${ColorPallete.ContactUsLinkBlue};
                        font-size: 17px;
                        font-family: 600;
                        display: flex;
                        align-items: center;
                        gap: 3px;
                        svg {
                            fill: ${ColorPallete.ContactUsLinkBlue};
                        }
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
        div.feedback {
        padding: 0 36px 50px 36px;
            h4 {
                font-size: 28px;
                line-height: 1.14286;
                font-weight: 600;
                margin-bottom: 25px;
            }
            p.exp {
                margin-bottom: 0;
            }
            .methods {
                width: 90%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                a.link {
                color: ${ColorPallete.ContactUsLinkBlue};
                font-size: 17px;
                font-family: 600;
                display: flex;
                align-items: center;
                gap: 3px;
                    svg {
                        fill: ${ColorPallete.ContactUsLinkBlue};
                    }
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            
            
        }
    }
}
@media (max-width: 1420px) {
    div.wrapper {
        width: 65%;
        margin: 0 auto;
    }
}
@media (max-width: 950px) {
    div.wrapper {
        width: 85%;
        margin: 0 auto;
    }
}
@media (max-width: 720px) {
    div.wrapper {
        width: 95%;
        margin: 0 auto;
    }
}
`
export default ContactStyle;