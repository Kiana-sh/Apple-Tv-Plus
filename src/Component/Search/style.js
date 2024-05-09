import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const SearchStyle = styled.div`

div.wrapper{
    width: 85%;
    margin: 0 auto;
    div.input {
        width: 50%;
        margin: 0 auto;
        .input-box{
        width: 100%;
        padding: 10px;
        margin-top: 100px;
        }
    }
    div.result {
        margin-top: 50px;
        ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            li {
                width: 20%;
                box-sizing: border-box;
                padding: 20px;
                div.poster {
                    width: 100%;
                    height: 90%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }  
                h4.title {
                    font-size: 15px;
                    font-weight: 400;
                    color: ${ColorPallete.PrimaryText};
                    padding-top: 8px;
                }
            }
        }
        .not-found {
            text-align: center;
            margin: 300px auto;
        }
    }
}

`
export default SearchStyle;