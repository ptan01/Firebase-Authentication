import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handleLogout = () => {
        LogOut()
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className='text-xl mr-5' to='/'>Home</Link>
                <Link className='text-xl mr-5' to='/login'>Login</Link>
                <Link className='text-xl mr-5' to='/register'>Register</Link>
                {
                    user && <>
                    <Link className='text-xl mr-5' to='/order'>Orders</Link>
                        <Link className='text-xl mr-5' to='/profile'>Profile</Link>
                    </>
                }
                {
                    user && <>
                        {user.email ? <p>{user.email}</p> : <img className='w-[50px] h-[50px] rounded-xl' src={user.photoURL}></img>}
                        <button onClick={handleLogout} className="btn btn-xs">LogOut</button>
                    </> 

                }
            </div>
        </div>
    );
};

export default Header;