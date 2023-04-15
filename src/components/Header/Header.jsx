import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className='text-xl mr-5' to='/'>Home</Link>
                <Link className='text-xl mr-5' to='/login'>Login</Link>
                <Link className='text-xl mr-5' to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;