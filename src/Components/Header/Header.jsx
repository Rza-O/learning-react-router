import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                <br />
                <Link to='/'>Home</Link>
                {/* <Link to='/users'>Users</Link> */}
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                {/* <Link to='/posts'>Posts</Link> */}
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;