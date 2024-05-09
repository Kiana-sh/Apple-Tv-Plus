import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const HeaderStyle = styled.div`
 background: ${ColorPallete.Black};
 color: ${ColorPallete.White};
 padding: 10px 0;
 position: fixed;
 z-index: 3;
 width: 100%;
    div.wrapper {
        width: 85%;
        margin: 0 auto;
        .row {
            width: 100%;
            .col-line{
                opacity: 0;
                padding-top: 4px;
                /* .line-1{
                    width: 20px;
                    height: 2px;
                    background-color: #0a84ff;
                    margin-bottom: 6px;
                    margin-top: 10px;
                }
                .line-2{
                    width: 20px;
                    height: 2px;
                    background-color: #0a84ff;
                } */
            }
            .col-link {
                div.link {
                    padding-top: 4px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    gap: 30px;
                    align-items: center;
                    font-weight: 600;
                    font-size: 16px;
                    .apple-tv{
                        &:hover{
                            color: ${ColorPallete.PrimaryText};
                        }
                    }
                    a.mls {
                        color: ${ColorPallete.SecondaryText};
                        transition: all 0.2s;
                        &:hover {
                            color: ${ColorPallete.PrimaryText};
                        }
                    }
                }
            }
            .col-menu {
                div.menu {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    gap: 10px;
                    align-items: center;
                    div.search {
                        display: flex;
                        align-items: center;
                        border: 1px solid ${ColorPallete.SecondaryText};
                        padding: 4px 12px;
                        border-radius: 6px;
                        font-size: 13px;
                        &:hover {
                            color: ${ColorPallete.PrimaryText};
                        }
                        span.icon {
                            margin-right: 5px;
                            margin-top: 3px;;
                        }             
                    }
                    div.sign-in {
                        background: ${ColorPallete.PrimaryBlue};
                        padding: 6px 12px;
                        border-radius: 6px;
                        font-size: 13px;
                        svg.blue {
                            display: none;
                        }
                        .sign-in-text {
                            padding-left: 5px;
                            &:hover{
                                color: ${ColorPallete.PrimaryText};
                            }
                        }
                    }
                }
            }
        }
    }

@media (max-width: 970px) {
    padding: 10px 0;
    div.wrapper{
        width: 95%;
        margin: 0 auto;
        .row{
            .col-line{
                opacity: 1;
                color: ${ColorPallete.DarkBlue} ;
            }
            .col-link{
                div.link{
                    a.mls{
                        display: none;
                    }
                }
            }
            .col-menu{
                div.menu{
                    div.search{
                        display: none;
                    }
                    div.sign-in{
                        background-color: transparent;
                        color: ${ColorPallete.DarkBlue} ;
                       
                        svg.white{
                            display: none;
                        }
                        svg.blue{
                            display: inline-block;
                        }
                        .sign-in-text {
                            color: ${ColorPallete.DarkBlue} ;
                            &:hover {
                                color: ${ColorPallete.DarkBlue} ;
                            }
                        }
                    }
                }
            }
        }
    }
}
`;
export default HeaderStyle;