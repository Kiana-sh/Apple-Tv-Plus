import styled from "styled-components";
import GlobalStyle from "../Style/GlobalStyle";
import { ColorPallete } from "../Style/PrimaryStyle";

export const BigLogoStyle = styled.div`
width: 90%;
margin: 0 auto;
padding: 50px 0;
 div {
    position: relative;
    img{
        width: 100%;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    div.info {
        box-sizing: border-box;
        padding: 0 16px;
        width: 300px;
        position: absolute;
        left: 40px;
        bottom: 40px;
        h2{
            font-size: 25px;
            font-weight: 700;
            margin: 0;
            
        }
        p{
            font-size: 15px;
            font-weight: 400;
            line-height: 1.33338;
        }
        button{
            width: 240px;
            height: 48px;
            border-radius: 8px;
            background: #fff;
            border: none;
            cursor: pointer;
            p{
                font-size: 15px;
                font-weight: 600;
                color: ${ColorPallete.ButtonTextBL};
            }
        }
        p.trial{
            text-align: center;
            color: ${ColorPallete.SecondaryText};
            font-size: 11px;
            font-weight: 400;
            margin-left: -20px;
        }
    }
    div.logo {
        position: absolute;
        top: 40px;
        left: 40px;
        z-index: 2;
        img {
            width: 106px;
            height: 40px;
        }
    }
 }
`
export default BigLogoStyle;