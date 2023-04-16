import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

    const {signin , loginGithub } = useContext(AuthContext)


    const handleLogin = event =>{
        event.preventDefault()
        const email = event.target.email.value ;
        const pass = event.target.password.value ;
        console.log(email , pass)
        signin(email, pass)
        .then((result)=>{
            console.log(result.user)
            event.target.reset()
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const handleGithobLogin = ()=>{
      loginGithub()
      .then((result)=>{
        console.log(result.user)
      })
      .catch((err)=>{
        console.log(err.message)
      })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Link to='/register'><button className="btn btn-link">Register</button></Link>
          <div className='pb-2 pl-2'>
          <button onClick={handleGithobLogin} className='btn btn-xs'>Login with Github</button>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Login;