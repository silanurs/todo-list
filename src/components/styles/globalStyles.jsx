import { createGlobalStyle } from "styled-components";
const GlobalStyles=createGlobalStyle`

* {
    box-sizing:border-box;
    margin:0;
    padding:0;
}
html, body {
    min-height: 100vh;
    min-width:100vw;
    background-color:#fff;
    font-family:"Comfortaa", sans-serif;
}
#root {
    display:grid;
    min-width:100vw;
    min-height:100vh;
    grid-template-rows:0.1fr 0.1fr 1fr 0.1fr;
    grid-template-columns:0.3fr 0.2fr 1fr 0.5fr 1fr;
    grid-template-areas: "header header header header header"
                          "menu . . . ."
                          "menu . container container ."
                          "menu . . . ."
}
@media (max-width:500px){
    #root {
        grid-template-rows:0.1fr 0.1fr 1fr 0.1fr ;
        grid-template-columns:0.3fr 0.2fr 1fr 0.5fr 1fr 0.1fr;
        grid-template-areas: "header header header header header header"
        "menu . . . . ."
        "menu . container container container ."
        "menu . . . . ."
    }
}
.Low {
    color:green;
}
.Medium {
    color:orange;
}
.High {
    color:red;
}
.add {
    width: 50px;
    height:50px;
    border:none;
    position:fixed;
    bottom: 5vh;
    font-size: 30px;
    border-radius: 100%;
    color: #c42c5f;
    text-align: center;
    background:yellow;
    transition: width 0.3s, height 0.3s, transform 0.3s; 
    transition-timing-function: linear;  
}
.add:hover{
    width:60px;
    height:60px;
    transform:rotate(180deg);
}
.button {
    display:flex;
    justify-content: center;
  }
`
export default GlobalStyles;