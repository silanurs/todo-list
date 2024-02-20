import { NavLink} from 'react-router-dom'

import styled from 'styled-components';
const Menu = () => {
    return (
        <>
        <StyledNav>
            <NavLink to="Home" className="link">Home</NavLink>
            <NavLink to="Today" className="link">Today</NavLink>
            <NavLink to="Year" className="link">This Year</NavLink>
            <NavLink to="Notes" className="link">Notes</NavLink>
        </StyledNav>
   
        </>

    )
}

const StyledNav = styled.nav`
grid-area:menu;
display:flex;
flex-direction:column;
row-gap:10vh;
align-items:center;
width:17vw;
font-size:2vw;
background-color: papayawhip;
color: #BF4F74;

a{
    text-decoration: none; 
    color:#BF4F74
}
.active{
    text-decoration: underline;
  }
`
export default Menu;