import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    else {
        return <Navigate to='/login' replace={true}></Navigate>
    }
   
};

export default PrivetRouter;