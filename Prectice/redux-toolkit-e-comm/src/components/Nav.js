import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    // const auth = localStorage.getItem('user');
    // const navigate = useNavigate();
    // const logout = () => {
    //     const isConfirmed = window.confirm("Are you sure you want to logout?");
    
        // if (isConfirmed) {
        //     localStorage.clear();
        //     navigate('/signup');
        // }
    // }
    return (
        <div>
             <ul className="nav-ul menu">
                        <i><li className='logo-nav'><Link to="/">Ekart</Link></li></i>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/signUp">SignUp</Link></li>
                        <li><Link to="/update">Update Product</Link></li>
                        {/* <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update">Update Products</Link></li>
                        <li><Link to="/profile">Profile</Link></li> */}
                        {/* <li className='logout-nav'><Link onClick={logout} to="/logout">Logout ( {JSON.parse(auth).name})</Link></li> */}
                
                    </ul>
        </div>
    )
}

export default Nav;
