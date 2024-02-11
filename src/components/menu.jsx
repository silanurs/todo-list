import {Routes, Route, Link} from 'react-router-dom'
import Todos from './todos';
import Notes from './notes';
import PropTypes from 'prop-types'
const Menu = ({todos, setModalOpen}) => {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Today">Today</Link>
            <Link to="/Year">This year</Link>
            <Link to="/Notes">Notes</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Todos todos={todos} setModalOpen={setModalOpen}></Todos>}></Route>
            <Route path="/Today"></Route>
            <Route path="/Notes" element={<Notes></Notes>}></Route>
        </Routes>
        </>

    )
}
Menu.propTypes={
    todos:PropTypes.array,
    setModalOpen:PropTypes.func
}
export default Menu;