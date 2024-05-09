import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const ApplePrivacyStyle = styled.div`
padding: 50px 0;
background-color: ${ColorPallete.White};
color: ${ColorPallete.ContactUsFont};
div.wrapper {
    width: 50%;
    margin: 52px auto 75px auto;
    div.intro {
        text-align: center;
        margin-bottom: 40px;
        h1 {
            font-size: 48px;
            line-height: 1.08349;
            font-weight: 600;
            margin-bottom: 21px;
        }
        p.sub {
            width: 83.33333%;
            margin-top: 10px;
            margin-left: 8.33333%;
            font-size: 12px;
            line-height: 1.33337;
            font-weight: 400;
            color: ${ColorPallete.AboutUsSecondaryText};
        }
        p.main {
            width: 66.66667%;
            margin: 15px auto 4px auto;
            font-size: 21px;
            line-height: 1.381;
            font-weight: 400;
            
        }
        img {
            width: 70px;
            height: auto;
        }
    }
    div.info {
        p {
            font-size: 17px;
            line-height: 1.47059;
            font-weight: 400;
            }
            a.link {
                color: ${ColorPallete.ContactUsLinkBlue};
                &:hover {
                     text-decoration: underline;
                }
            }
        .point {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            gap: 10px;
            align-items: baseline;
            svg {
                fill: ${ColorPallete.ContactUsFont};
            }
            p {
                font-size: 17px;
                line-height: 1.47059;
                font-weight: 400;
                margin: 5px 0;
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
@media (max-width: 720px) {
    div.wrapper {
        width: 85%;
        margin: 0 auto;
    }
}


`
export default ApplePrivacyStyle;