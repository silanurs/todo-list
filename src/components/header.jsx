import styled from "styled-components";
const Header = ()=>{
  return (
      <StyledHeader>
          <h1>Todo List</h1>
      </StyledHeader>
  )
}
export default Header
const StyledHeader =styled.header`
grid-area:header;
color:#BF4F74;
background-color:papayawhip;
font-size:2vw;
font-family:"Comfortaa", sans-serif;
font-weight:bolder;
display:flex;
justify-content:center;
align-items:center;
`