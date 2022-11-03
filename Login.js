



import './register.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login() {

    const [checkEmail, setCheckEmail] = useState('')
    const [checkPassword, setCheckPassword] = useState('')


    const navigate = useNavigate();
    function handleClick() {
        navigate("/Register");
    }
    const [email, setEmail] = useState('')
    const getDataEmail = (event) => {
        setEmail(event.target.value)
    }
    const [password, setPassword] = useState('')
    const getDataPassword = (event) => {
        setPassword(event.target.value)
    }
    const checkLogin = (e) => {
        const listUser = JSON.parse(localStorage.getItem('listUser')) || []
        const dataEmailFind = listUser.find(e => e.email === email)
        const dataPasswordFind = listUser.find(e => e.password === password)
        if (!dataEmailFind || !dataPasswordFind ) {
            
        } else {
            
        }
    }
    return (
        <div>
            <form action="">

                <div className="constainer">
                    <h1>Login</h1>

                    <div className="form-control">
                        <input type="email" id="email" name="fname" placeholder="  Email" value={email} onChange={getDataEmail} />
                        <small>{ }</small>
                        <span></span>
                    </div>

                    <div className="form-control">
                        <input type="password" id="password" name="fname" placeholder="Password" value={password} onChange={getDataPassword} />
                        <small>{ }</small>
                        <span></span>
                    </div>

                    <button type="submit" className="btn-submit" onClick={checkLogin} >Login</button>
                    <div className="sigin-link">
                        Do you already have an account?  <span onClick={handleClick} >Go to register</span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;