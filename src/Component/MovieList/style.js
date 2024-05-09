import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const MovieListStyle = styled.div`
width: 85%;
margin: 0 auto;

.big-title{
    font-size: 19px;
    font-weight: 700;
    svg {
        height: 12px;
        margin-left: 8px;
        fill: ${ColorPallete.ChevronGray} ;
    }
}
.mySwiper{
    border-bottom: 1px solid ${ColorPallete.BorderColor};
    margin: 20px 0;
    
    .swiperSlide{
        div{
            width: 100%;
            height: auto;
            img{
            width: 100%;
            height: 450px;
            border-radius: 12px;
            object-fit: fill;
            }
            div.info{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                gap: 20px;
                text-align: left;
                align-items: center;
                margin-bottom: 20px;
                margin-top: 10px;
                div.id{
                    color: ${ColorPallete.SecondaryText};
                    font-size: 40px;
                    font-weight: 700;
                    width: auto;
                }
                div.title{
                    text-align: left;
                    font-size: 15px;
                    font-weight: 400;
                    color: ${ColorPallete.PrimaryText};
                }
            }
         
        }
    }
}

@media (max-width: 1500px) {
    .mySwiper{
        .swiperSlide{
            div{
                img{
                    width: 100%;
                    height: 360px;
                }
            }
        }
    }
}
@media (max-width: 1340px) {
    .mySwiper{
        .swiperSlide{
            div{
                img{
                    width: 100%;
                    height: 320px;
                }
                div.info{
                    div.id{
                        font-size: 35px;
                        font-weight: 700;
                    }
                }
            }
        }
    }
}
@media (max-width: 1100px) {
    .mySwiper{
        .swiperSlide{
            div{
                img{
                    width: 100%;
                    height: 260px;
                }
                div.info{
                    align-items: start;
                    div.id{
                        font-size: 30px;
                        font-weight: 700;
                    }
                }
            }
        }
    }
}
@media (max-width: 930px) {
    .mySwiper{
        .swiperSlide{
            div{
                img{
                    width: 100%;
                    height: 220px;
                }
                div.info{
                    div.id{
                        display: none;
                    }
                }
            }
        }
    }
}
@media (max-width: 760px) {
    .mySwiper{
        .swiperSlide{
            div{
                img{
                    width: 100%;
                    height: 180px;
                }
            }
        }
    }
}
`
