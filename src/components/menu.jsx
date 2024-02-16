import {Routes, Route, NavLink} from 'react-router-dom'
import Todos from './todos';
import Today from './today';
import Year from './year'
import Notes from './notes';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Menu = ({todos, setModalOpen,notes, removeTodo, removeNote}) => {
    return (
        <>
        <StyledNav>
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/Today" className="link">Today</NavLink>
            <NavLink to="/Year" className="link">This Year</NavLink>
            <NavLink to="/Notes" className="link">Notes</NavLink>
        </StyledNav>
        <Routes>
            <Route path="/" exact element={<Todos todos={todos} setModalOpen={setModalOpen} removeTodo={removeTodo}></Todos>}></Route>
            <Route path="/Today" element={<Today todos={todos} removeTodo={removeTodo}></Today>}></Route>
            <Route path="/Year" element={<Year todos={todos} removeTodo={removeTodo}></Year>}></Route>
            <Route path="/Notes" element={<Notes notes={notes} setModalOpen={setModalOpen} removeNote={removeNote}></Notes>}></Route>
        </Routes>
        </>

    )
}
Menu.propTypes={
    todos:PropTypes.array,
    setModalOpen:PropTypes.func,
    notes:PropTypes.array,
    removeTodo:PropTypes.func,
    removeNote:PropTypes.func
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