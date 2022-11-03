


import img1 from "./assets/imegas/img-1.jpg";
import img2 from "./assets/imegas/img-2.jpg";
import img3 from "./assets/imegas/img-3.jpg";
import './register.css';
import './register.css';
import './register.css';
import { useNavigate } from "react-router-dom";
import React , {useState, useEffect} from 'react'
function Register() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/Login");
    }

    const [checkUserName, setCheckUserName] = useState('')
    const [checkEmail, setCheckEmail] = useState('')
    const [checkConfirmpassword, setCheckConfirmpassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [img, setImg] = useState(img1)

    const [userName, setUserName] = useState('')

    const getDataUserName = (event) => {
        setUserName(event.target.value)
    }

    const [email, setEmail] = useState('')

    const getDataEmail = (event) => {
        setEmail(event.target.value)
    }

    const [password, setPassword] = useState('')

    const getDataPassword = (event) => {
        setPassword(event.target.value)
    }

    const [forgetPassword, setForgetPassword] = useState('')

    const getDataForgetPassword = (event) => {
        setForgetPassword(event.target.value)
    }

    const saveDatalocal = (e) => {

        const listUser = JSON.parse(localStorage.getItem('listUser')) || [];

        const dataEmailFind = listUser.find(e => e.email === email);
        const dataUserNameFind = listUser.find(e => e.userName === userName);


        if (dataEmailFind || dataUserNameFind || userName === '' || email === '' || password === '' || forgetPassword === '' || password !== forgetPassword || userName.length > 9 || password.length < 6 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {

            if (userName.length > 9) {
                setCheckUserName('Username cannot be longer than 9 characters.')
            } else if (dataUserNameFind) {
                setCheckUserName('Already have an account using this user name.')
            } else if (userName === '') {
                setCheckUserName('User name cannot be blank.')
            } else {
                setCheckUserName('Satisfy the condition.')
            }

            if (password === '') {
                setCheckPassword('Password cannot be blank.')
            } else if (password.length < 6) {
                setCheckPassword('Password must be at least 6 characters long.')
            } else {
                setCheckPassword('Satisfy the condition.')
            }

            if (dataEmailFind) {
                setCheckEmail('Already have an account using this email.');
            } else if (email === '') {
                setCheckEmail('Email cannot be blank. ')
            } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
                setCheckEmail("Malformed @gmail.com.")
            } else {
                setCheckEmail("Satisfy the condition.")
            }



            if (forgetPassword === '') {
                setCheckConfirmpassword('Confirm password cannot be blank.')
            } else if (password !== forgetPassword) {
                setCheckConfirmpassword('Two passwords do not match.')
            } else {
                setCheckConfirmpassword('Satisfy the condition.')
            }

        } else {
            const dataRegister = {
                userName,
                email,
                password
            }

            listUser.push(dataRegister)
            localStorage.setItem('listUser', JSON.stringify(listUser));
            setTimeout(() => {
                handleClick()
            }, 500)

        }
        e.preventDefault();
    }


    var listImg =[img1, img2, img3];
    const [index, setIndex]=useState(0)

    let a;
    function changeImage(){ 
        a=index+1;
        if(a===3){
            a=0;
        }
        setIndex(a);
        console.log(a);
        setImg(listImg[index]);
        
    }
    useEffect(()=>{
        setTimeout(() => {
          changeImage();
        }, 3000);
    },[index])
   
    
  


    return (

        <div className="register">
            <div className="img-box">
                <div className="img">
                    <img id="image" src = {img} alt=""/>

                </div>
                
            </div>
            <form action="">
                <div className="constainer">
                    <h1>Register</h1>


                    <div className="form-control" >
                        <input type="text" id="text" name="fname" placeholder="  User name" value={userName} onChange={getDataUserName}
                            style={{ borderBottomColor: checkUserName !== '' && checkUserName !== 'Satisfy the condition.' ? 'red' : '#adadad' }} />
                        <small style={{ color: checkUserName !== 'Satisfy the condition.' ? 'red' : '#3CB371' }}  >{checkUserName}</small>
                        <span></span>
                    </div>

                    <div className="form-control">
                        <input type="email" id="email" name="fname" placeholder="Email" value={email} onChange={getDataEmail}
                            style={{ borderBottomColor: checkEmail !== '' && checkEmail !== 'Satisfy the condition.' ? 'red' : '#adadad' }} />
                        <small style={{ color: checkEmail !== 'Satisfy the condition.' ? 'red' : '#3CB371' }} >{checkEmail}</small>
                        <span></span>
                    </div>


                    <div className="form-control">
                        <input type="password" id="password" name="fname" placeholder="Password" value={password} onChange={getDataPassword}
                            style={{ borderBottomColor: checkPassword !== '' && checkPassword !== 'Satisfy the condition.' ? 'red' : '#adadad' }} />
                        <small style={{ color: checkPassword !== 'Satisfy the condition.' ? 'red' : '#3CB371' }} >{checkPassword}</small>
                        <span></span>
                    </div>

                    <div className="form-control">
                        <input type="password" id="confirm-password" name="fname" placeholder="  Confirm password" value={forgetPassword} onChange={getDataForgetPassword}
                            style={{ borderBottomColor: checkConfirmpassword !== '' && checkConfirmpassword !== 'Satisfy the condition.' ? 'red' : '#adadad' }} />
                        <small style={{ color: checkConfirmpassword !== 'Satisfy the condition.' ? 'red' : '#3CB371' }} >{checkConfirmpassword}</small>
                        <span></span>
                    </div>

                    <button type="submit" className="btn-submit" onClick={saveDatalocal} >Register</button>
                    <div className="sigin-link">
                        Do you already have an account?  <span onClick={handleClick} >Go to login</span>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Register;