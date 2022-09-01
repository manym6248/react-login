

 const Validate= (data, type) => {
 const errors ={}

 if(!data.email){
    errors.email = "Email is required"
 }else if(!/\S+@\S+\.\S+/.test(data.email)){
    errors.email="Email address is in valid"
 }else{
    delete errors.email;
 }
 if(!data.password){
    errors.password = 'Passeord is required'
}else if(data.password.length < 6) {
    errors.password = 'Passeord need to be 6 character or more'
    
}
else{
    delete errors.password
}

    if(type === "SingUp"){
      
 if(!data.name.trim()){
   errors.name = 'Username is required'
}else{
   delete errors.name;
}
if(!data.confrimPasword){
   errors.confrimPasword = 'confrimPasword is required'
   
  }else
  if(data.confrimPasword !== data.password){
      errors.confrimPasword = 'Pasword do not match'
      
  }else{
      delete errors.confrimPasword
  }

  if (!data.isAccepted) {
       errors.isAccepted = 'Accepted is regulations'
  }else{

     delete errors.isAccepted 
  }


    }





   return errors
}
export default Validate