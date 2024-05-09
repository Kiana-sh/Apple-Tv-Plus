import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const FooterStyle = styled.div`
    background: ${ColorPallete.BackgroundColor};
    padding: 20px 40px;
    .wrapper {
        width: 90%;
        margin: 0 auto;
        .row {
            .list {
                font-size: 11px;
                div.copyright {
                    color: ${ColorPallete.SecondaryText}
                }
                div.links {
                    margin-top: 5px;
                    a {
                        margin-right: 7px;
                        padding-right: 10px;
                        color: inherit;
                        border-right: 1px solid ${ColorPallete.BorderColor};
                    }
                    .last-link {
                        border: none;
                    }
                }
            }
            .language {
                font-size: 11px;
                text-align: end;
                a {
                    color: inherit;
                    &:hover {
                        text-decoration: underline;
                    }
                }
                a.english {
                    margin-right: 7px;
                    padding-right: 10px;
                    border-right: 1px solid ${ColorPallete.BorderColor};
                }
                a.french {
                    color: ${ColorPallete.SecondaryText};
                }
                
            }
        }
    }
`
export default FooterStyle;