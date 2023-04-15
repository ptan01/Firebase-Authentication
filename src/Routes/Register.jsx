import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const {user , createUser } = useContext(AuthContext)
    console.log(user)

const handleRegister = (event) =>{
    event.preventDefault()
    const name = event.target.name.value ;
    const email = event.target.email.value ;
    const pass = event.target.password.value ;
    console.log(email, name , pass)
    createUser(email, pass)
    .then((result)=>{
        console.log(result.user);
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register !</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
           <p className='p-3'> Already have an account ?<Link to='/login'><button className="btn btn-link">Login</button></Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;