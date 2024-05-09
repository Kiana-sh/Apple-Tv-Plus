import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const GenreListStyle = styled.div`
margin-bottom: 50px;
div.wrapper {
    width: 85%;
    margin: 0 auto;
    h2.genre-title {
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    div.genre-list {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 30px 19px;
        div.movie {
            width: 19%;
            height: auto;
            div.poster {
                width: 100%;
                height: 90%;
                img {
                width: 100%;
                height: 100%;
                border-radius: 12px;
                }
            }
            
            h5 {
                font-size: 15px;
                font-weight: 400;
                color: ${ColorPallete.PrimaryText};
                padding-top: 10px;
            }
        }
    }
}
`
export default GenreListStyle;