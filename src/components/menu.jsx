import { Link} from 'react-router-dom'

import styled from 'styled-components';
const Menu = () => {
    return (
        <>
        <StyledNav>
            <Link to="" className="link">Home</Link>
            <Link to="Today" className="link">Today</Link>
            <Link to="Year" className="link">This Year</Link>
            <Link to="Notes" className="link">Notes</Link>
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

`
export default Menu;