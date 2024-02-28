import { useState,useEffect } from "react";
import AuthService from "../../services/auth.services";
import { FetchClient } from "../../services/fetch_client";

export const LoginUser = () => {
    const [schoolId, setSchoolId] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password,setPassword]=useState('')
    const [loginData,setLoginData]=useState({})
    const [apiResponse, setApiResponse] = useState("")
    const [submit,onSubmit]=useState(false)

    useEffect(() => {
        const authService = new AuthService(FetchClient);
        const loginSchool = async () => {
          try {
            const res = await authService.loginSchool(loginData);
            console.log('res.....',res)
            setApiResponse("Suuccess");
          } catch (e) {
            console.log(e);
            setApiResponse("Failed");
          }
        }
        if(submit){
            loginSchool()
        }
    })
        const onFormSubmit = (e) => {
            e.preventDefault();
        
            const formData = new FormData(e.target); // Create a new FormData object from the form
        
            // Convert FormData object to an array of key-value pairs using the entries() method
            const formDataArray = Array.from(formData.entries());
        
            // Destructure the formDataArray to extract field names and values
            const formDataObject = Object.fromEntries(formDataArray);
            console.log("..........", formDataObject);
            setLoginData(formDataObject)
            onSubmit(true)
            
           
          };
        
    return (
        <div>
          <h2>
            <center>LOGIN Page</center>
          </h2>
          <div className="form">
            <form onSubmit={onFormSubmit}>
              <label>SCHOOL ID:</label>
              <input
                type="name"
                name="schoolId"
                value={schoolId}
                onChange={(e)=>setSchoolId(e.target.value)}
              ></input>
              
              <label>EmailId:</label>
              <input
                type="email"
                name="emailId"
                value={emailId}
                onChange={(e)=>setEmailId(e.target.value)}
              ></input>
              <label>Password:</label>
              <input
                type="name"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              ></input>
              
              
              <button type="submit">Login</button>
              <h2>{apiResponse}</h2>
            </form>
          </div>
        </div>
      );
}