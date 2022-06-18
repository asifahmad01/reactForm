import react, {useState, useEffect  } from "react";
import './App.css';
// import Manatee from "./form";


function App(){
  // const navigate = useNavigate ();
  // const navigateTohome = () => {
  //   ('/Manatee');
  // }
  const initialvalue = { username: "", email: "", password: ""};
  const [formValues, setformValues] = useState(initialvalue); // state veriable
  const [formErrors, setformErrors] = useState({}); // state veriable for error
const [isSubmit, setIsSubmit] = useState(false);   // use state variable for flag of submit   initial value of flag is false;


  const handlecChange = (e) =>{
  
    const {name, value} = e.target;
    setformValues({ ...formValues, [name]: value});
  };



  const handlecSubmit = (e) => {
      e.preventDefault();
      setformErrors(validate(formValues));
      setIsSubmit(true);
      
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues); 
    }

  },[formErrors])                             // it will get change base on the form.  




  const validate = (values) => {
const errors = {};   // error object initial object.
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;  // for email
if(!values.username){
  errors.username = "username is required!";
}
if(!values.email){
  errors.email = "email is required!";
} else if (!regex.test(values.email)){
  errors.email = "This is not a valid email format";
}


// if(!(values.password)){
//   errors.password = "password is required!";
// } 
// else if (values.password.length >= 4) {
//   errors.password = "password conatin more than 4 and less then 10 values"
// }



  return errors
}

// const redirectionCall = (e) => {
//   e.preventDefault();
  
// }

  return (
    <div className="container">
      
      <form onSubmit = {handlecSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form"></div>

        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" value={formValues.username} onChange={handlecChange}/>
          <p>{formErrors.username}</p>
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={handlecChange}/>
          
        </div>
<p>{formErrors.email}</p>

        <div className="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="password" value={formValues.password} onChange={handlecChange}/>
          <p>{formErrors.password}</p>
        <button>Submit</button>
        </div>

      </form>
      {/* <Routes> 
            
            <Route path="./Manatee" element={<Manatee />}/> 

            
      </Routes> */}
    
    </div> 
  )  
}

export default App;
