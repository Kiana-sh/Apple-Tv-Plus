import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const QAStyle = styled.div`
    background: ${ColorPallete.QABackground};
    color: ${ColorPallete.QAColor};
    .wrapper {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        padding: 50px 0;
        svg.tv {
            height: 56px;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 60px;
            margin-bottom: 20px;
        }
        p {
            font-size: 17px;
            color: ${ColorPallete.ButtonTextBL};
            margin: 0;
        }
        div.logo {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px 40px;
            width: 60%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 40px;
            margin-bottom: 52px;
            svg.tv4k {
                height: 36px;
            }
        }
        h3 {
            font-size: 34px;
            margin-bottom: 20px;
        }
        a {
            color: ${ColorPallete.PrimaryBlue};
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 25px;
            &:hover {
                text-decoration: underline;
            }
            span {
                padding-right: 10px;
            }
            svg{
                width: 6.25px;
                height: 10px;
                fill: ${ColorPallete.PrimaryBlue};
            }
        }
        div.devices {
            /* width: 55%; */
            margin: 30px auto;
            img {
                /* width: 100%; */
            }
        }
        h2.title {
            font-size: 42px;
            font-weight: 700;
        }
        .collapse {
            width: 85%;
            margin: 0 auto;
            color: ${ColorPallete.ButtonTextBL};
            .panel {
                text-align: start;
                font-size: 21px;
                padding: 8px 0;
                p {
                    font-size: 15px;
                    color: ${ColorPallete.ButtonTextBL};
                    a.blue {
                        font-size: 15px;
                        color: ${ColorPallete.PrimaryBlue};
                    }
                }
            }
        }
    }
    @media(max-width: 1320px) {
        .wrapper {
            svg.tv {
                height: 40px;
                width: auto;
            }
            h2 {
                font-size: 40px;
            }
            h3 {
                font-size: 30px;
            }
            div.devices {
                width: 100%;
                img {
                    width: 80%;
                }
            }
        }
    }
`
export default QAStyle;