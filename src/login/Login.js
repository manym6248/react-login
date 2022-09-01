import React, {useState , useEffect} from 'react'
import Validate from './Validate'
import styles from './login.module.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './Toast'
import { Link } from 'react-router-dom';

const Login = () => {

  const [data , setData] = useState({
     name:"",
     email:"",
     password:"",
     confrimPasword:"",
     isAccepted:false

  })

  const [errors , setErrors] = useState({})
  const [touched , seTtouched] = useState({})
  

  useEffect(()=>{
    setErrors(Validate(data ,))
    
  },[data,touched])

  const ChangeHandler = event=>{
     if(event.target.name === 'isAccepted'){
       setData({...data, [event.target.name]:event.target.checked})
      }else{
        setData({...data, [event.target.name]:event.target.value})
      }
  };
  const touchHandeler = event =>{
    seTtouched({...touched , [event.target.name]:true})
  }

  const submitHandeler = (event) =>{
    event.preventDefault();
     
    if(!Object.keys(errors).length){
      console.log(data)
      notify('Yoe login in successfuly',"success")
    }
    else{
      notify('Invalid data!',"error")
      seTtouched({
        name:true,
        email:true,
        password:true,
        confrimPasword:true,
        isAccepted:true
      })
    }
  }



  return (
    <div className={styles.container} >
        <ToastContainer />
      <form onSubmit={submitHandeler} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
      
        <div className={(errors.email &&  touched.email) ? styles.errors : styles.inputBox}>
          <label htmlFor='email'>Email</label>

          <input 
          type="text" 
          id='email' 
          name='email'  
          value={data.email} 
          onChange={ChangeHandler}
          onFocus={touchHandeler} 
          placeholder="Your Email" />

          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={(errors.password &&  touched.password) ? styles.errors : styles.inputBox}>
          <label htmlFor='pas'>Password</label>

          <input 
          type="password" 
          id='pas' 
          name='password' 
          value={data.password} 
          onChange={ChangeHandler}
          onFocus={touchHandeler}
          placeholder="Your Password"
           />

          {errors.password  && touched.password && <span>{errors.password}</span>}
        </div>
   
        <div className={styles.rowButton}>
          <button  className={styles.sing} type="submit">Login</button>
          <Link to="/Register" className={styles.login}  >Sing Up</Link>
        </div>

      </form>
    </div>
  )
}


export default Login
