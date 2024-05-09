import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const SingleMovieStyle = styled.div`
div.wrapper {
    width: 90%;
    margin: 0 auto;
    div.poster {
        position: relative;
        margin-bottom: 20px;
        width: 100%;
        img {
            width: 100%;
            height: 945px;
        }
        div.text {
            position: absolute;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
            padding: 40px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            backdrop-filter: blur(60px) saturate(180%);
            background-color: rgba(40,40,40,.5);
            mask-image: linear-gradient(to bottom,transparent,rgba(0,0,0,.068) 3.3%,rgba(0,0,0,.145) 5.9%,rgba(0,0,0,.227) 8.1%,rgba(0,0,0,.313) 10.1%,rgba(0,0,0,.401) 12.1%,rgba(0,0,0,.49) 14.6%,rgba(0,0,0,.578) 17.7%,rgba(0,0,0,.661) 21.8%,rgba(0,0,0,.74) 27.1%,rgba(0,0,0,.812) 33.9%,rgba(0,0,0,.875) 42.4%,rgba(0,0,0,.927) 53%,rgba(0,0,0,.966) 66%,rgba(0,0,0,.991) 81.5%,rgba(0,0,0,.991) 100%);
            div.subscribe {
                width: 25%;
                text-align: center;
                p.free {
                    font-size: 12px;
                }
                button {
                    width: 75%;
                    border-radius: 6px;
                    border: none;;
                    p {}
                }
                button.trial {
                    margin-bottom: 10px;
                }
            }
            div.exp {
                width: 60%;
            }
            div.cast {
                width: 15%;
            }
        }
    }
}
div.wrapper-small {
    width: 85%;
    margin: 0 auto;
    h3 {
        font-size: 17px;
        font-weight: 700;
        padding: 13px 0;
    }
    div.images {
        div{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            gap: 20px;
            img {
            width: 20%;
            height: auto;
            border-radius: 12px;
            }
        }
    } 
    div.divider {
        width: 100%;
        height: 0.5px;
        background-color: ${ColorPallete.BorderColor};
        margin: 24px 0 11px 0;
    }
    div.watch {
        div.logo {
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 0;
            img {
                width: 100%;
                height: 100%;
                border-top-left-radius: 12px;
                border-top-right-radius: 12px;
            }
            a.img-text {
                background-color: ${ColorPallete.FreeTrialGray};
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
                p {
                    padding: 8px 12px;
                    font-size: 15px;
                    font-weight: 600;
                }
            }
            p.try{
                text-align: center;
                padding-top: 5px;
                margin: 0;
                font-size: 11px;
            }
        }
        
    }
    div.cast {
        padding-bottom: 20px;
        p.actors {
            letter-spacing: 0.90px;
        }
    }
} 
div.diff-bg {
    background-color: ${ColorPallete.FreeTrialGray};
    padding: 32px 0;
    div.wrapper-small{
        div.about {
        div.about-box {
            background-color: ${ColorPallete.BorderColor};
            width: 33.33%;
            box-sizing: border-box;
            padding: 14px 16px;
            border-radius: 12px;
            h4{
                font-size: 17px;
                font-weight: 700;
            }
            p.genre {
                color: ${ColorPallete.SecondaryText};
                text-transform: uppercase;
                font-size: 11px;
                margin: 0;
                padding: 8px 0;
            }
            p.exp {
                color: ${ColorPallete.SecondaryText};
                margin: 0;
                line-height: 1.47;
                font-size: 15px;
            }
        }
    }
    div.extra{
        display: flex;
        div.information {
            width: 33.33%;
            div {
                font-size: 12px;
                font-weight: 400;
                p.title {
                    margin-bottom: 5px;
                }
                p.answer {
                    color: ${ColorPallete.SecondaryText};
                    margin-top: 0;
                    margin-bottom: 20px;
                }
            }
        }
        div.score {
            width: 33.33%;
            div {
                font-size: 12px;
                font-weight: 400;
                p.title {
                    margin-bottom: 5px;
                }
                p.answer {
                    color: ${ColorPallete.SecondaryText};
                    margin-top: 0;
                    margin-bottom: 20px;
                }
            }
        }
        div.accessibility {
            width: 33.33%;
            div {
                font-size: 12px;
                font-weight: 400;
                color: ${ColorPallete.SecondaryText};
                p.title {
                    display: inline-block;
                    border: 1px solid ${ColorPallete.SecondaryText};
                    border-radius: 3px;
                    padding: 2px;
                    font-size: 8px;
                    margin-bottom: 5px;
                }
                p.answer {
                    margin-top: 0;
                    margin-bottom: 20px;
                }
            }
        }
    }
    }
}
`
export default SingleMovieStyle;