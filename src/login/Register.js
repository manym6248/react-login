import React, {useState , useEffect} from 'react'
import Validate from './Validate'
import styles from './login.module.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './Toast'
import { Link } from 'react-router-dom';

const Register = () => {

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
    setErrors(Validate(data, "SingUp"))
    
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
      notify('Yoe signed in successfuly',"success")
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
        <h2 className={styles.title}>Sing Up</h2>
        <div className={(errors.name &&  touched.name) ? styles.errors : styles.inputBox}>
          <label htmlFor="name"  >Name</label>

          <input 
          type="text" 
          id='name'
          name='name'  
          value={data.name} 
          onChange={ChangeHandler}
          onFocus={touchHandeler} 
          placeholder="name" />

          {errors.name &&  touched.name && <span>{errors.name}</span>}
        </div>
        <div className={(errors.email &&  touched.email) ? styles.errors : styles.inputBox}>
          <label htmlFor='email'>Email</label>

          <input 
          type="text" 
          id='email' 
          name='email'  
          value={data.email} 
          onChange={ChangeHandler}
          onFocus={touchHandeler} 
          placeholder="example@email.com" />

          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={(errors.password &&  touched.password) ? styles.errors : styles.inputBox}>
          <label htmlFor='pas'>Password</label>

          <input 
          type="password" 
          id='pas' 
          name='password' 
          placeholder='Your Passeord'
          value={data.password} 
          onChange={ChangeHandler}
          onFocus={touchHandeler} />

          {errors.password  && touched.password && <span>{errors.password}</span>}
        </div>
        <div className={(errors.confrimPasword &&  touched.confrimPasword) ? styles.errors : styles.inputBox}>
          <label htmlFor='Cpas'>Confrim Password</label>

          <input 
          type="password" 
          id='Cpas' 
          name='confrimPasword' 
          placeholder='Confrim Password'
          value={data.confrimPasword} 
          onChange={ChangeHandler}
          onFocus={touchHandeler} />

          {errors.confrimPasword && touched.confrimPasword && <span>{errors.confrimPasword}</span>}
        </div>
        <div className={styles.inputBox2}>
          <label htmlFor='check'>Confrim Password</label>

          <input 
          type="checkbox" 
          id='isAccepted' 
          name='isAccepted'  
          value={data.isAccepted}   
          onChange={ChangeHandler}
          onFocus={touchHandeler} />

          <div>

          {errors.isAccepted  && touched.isAccepted && <span>{errors.isAccepted}</span>}
          </div>
        </div>
        <div className={styles.rowButton}>
          <Link to="/login" className={styles.login}>Login</Link>
          <button className={styles.sing} type="submit" >Sing Up</button>
        </div>

      </form>
    </div>
  )
}


export default Register
