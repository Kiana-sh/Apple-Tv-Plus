import styled from "styled-components";
import { ColorPallete } from "../Style/PrimaryStyle";

export const ErrorStyle = styled.div`
div.wrapper {
    width: 85%;
    margin:0 auto;
    
    div.text{
      position: relative;
      width: 100%;
      height: 100vh;
      h2 {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
      }
      
    }
 }
`
export default ErrorStyle;