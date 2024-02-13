import {Routes, Route, Link} from 'react-router-dom'
import Todos from './todos';
import Today from './today';
import Year from './year'
import Notes from './notes';
import PropTypes from 'prop-types'
const Menu = ({todos, setModalOpen,notes, removeTodo, removeNote}) => {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Today">Today</Link>
            <Link to="/Year">This Year</Link>
            <Link to="/Notes">Notes</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Todos todos={todos} setModalOpen={setModalOpen} removeTodo={removeTodo}></Todos>}></Route>
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
export default Menu;