 
 
 

import React , {useState, useEffect} from 'react'
import "./ListUser.css"
import './register.css';


function ListUser(){
    
    const [listUser , setListUser]= useState([])

    const [ttEdit,setTtEdit] = useState({
        email:'',
        password:''
    })
   

    const [changeData, setChangeData] = useState(false)

    useEffect(()=>{
        setListUser(JSON.parse(localStorage.getItem('listUser')) || [])
    },[changeData])

    const updateEmail = (event) => {
        setTtEdit({
            email: event.target.value,
            password: ttEdit.password,
        })
    }
    




    const updatePassword = (event) => {
       setTtEdit({
        email: ttEdit.email,
        password: event.target.value,
       })
    }

    const [indexEdit, setIndexEdit] = useState('')
    
    const deleteUser = (index)=>{
        const dataAfterDelete = listUser.filter((e, vt)=> vt !== index )
        localStorage.setItem('listUser', JSON.stringify(dataAfterDelete))
        // console.log(dataAfterDelete)
        setChangeData(!changeData)

    } 

    const editUser = (index)=>{
        const dataEdit = listUser.find((e, vt) => vt===index)
        setTtEdit({
            email:dataEdit.email,
            password:dataEdit.password
        })
        setIndexEdit(index)
    }
    const okeEdit =()=>{
        const dataFin = listUser.find(e => e.email === ttEdit.email)
        if(dataFin){
            alert("Tai khoan nay da ton tai")
        }else{
            listUser[indexEdit].email = ttEdit.email
            listUser[indexEdit].password = ttEdit.password
            console.log(listUser)
            localStorage.setItem('listUser', JSON.stringify(listUser))
            setChangeData(!changeData)
        }
    }
    return(
        <div>
        <table>
        <thead>
        <tr>
    <th>Index</th>
    <th>Email</th>
    <th>Password</th>
    <th>Fix</th>
    <th>Delete</th>
        </tr> 
        </thead>
  {
    listUser.map((e, index)=>{
        return(
            <tr key={index}>
                <td>{index}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td onClick={()=>editUser(index)}>Fix</td>
                <td onClick={()=>deleteUser(index)}>Delete</td>
            </tr>
        )
    })
  }
</table>

<h1>Day la thong tin sua</h1>
            <label htmlFor="">Email can sua</label>
            <input type="email" id="fname" name="fname"  placeholder="user name"  value={ttEdit.email} onChange={updateEmail} />
            <br />
            <label htmlFor="">Password can sua</label>
            <input type="text" id="fname" name="fname" placeholder="password" value={ttEdit.password} onChange={updatePassword} />
            <br />
            <br />
            <div className="gr-button">
                <button className="bt1"  > Huy </button>
                <button className="bt1" onClick={okeEdit}> Xac nhan </button>
            </div>
        </div>

    )
}

export default ListUser;