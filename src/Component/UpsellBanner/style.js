import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const UpsellBannerStyle = styled.div`
background: ${ColorPallete.PrimaryBlue};
position: sticky;
bottom: 0;
z-index: 3;
padding: 16px 40px;
div.banner {
display: flex;
justify-content: space-between;
align-items: center;
    div.details {
        div.title {
            font-size: 17px;
            font-weight: 700;
            margin-bottom: 5px;
        }
        div.info {
            font-size: 13px;
            font-weight: 400;
            color: ${ColorPallete.SecondaryText};
            a {
                font-weight: 700;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    div.free-trial {
        text-align: center;
        button {
            border: none;
            border-radius: 4px;
            padding: 0 12px;
            height: 32px;
            margin-bottom: 5px;
            cursor: pointer;
        }
        div.button-exp {
            font-size: 11px;
            opacity: 0.66;
        }
    }
}
`
export default UpsellBannerStyle;