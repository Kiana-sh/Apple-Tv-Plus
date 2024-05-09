import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const SeasonPassStyle = styled.div`
    background: ${ColorPallete.Black};
    .wrapper {
        width: 90%;
        margin: 0 auto;
        .upsell {
            width: 95%;
            height: 120px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .text {
                font-size: 17px;
                font-weight: 700;
            }
            .subscribe {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                button {
                    background: ${ColorPallete.White};
                    color: ${ColorPallete.Black};
                    border: none;
                    height: 28px;
                    width: 153px;
                    border-radius: 4px;
                }
                a {
                    span {
                        font-size: 11px;
                    }
                    svg {
                        width: 5px;
                        height: 8px;
                        fill: ${ColorPallete.PrimaryText};
                        margin-left: 5px;
                    }
                }
            }
        }
    }
`
export default SeasonPassStyle;