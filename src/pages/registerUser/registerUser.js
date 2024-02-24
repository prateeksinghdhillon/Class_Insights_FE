import { Component } from "react"
import "./registerUser.scss"
class RegisterUser extends Component {
    render(){ 
    return (<div> 
        <h2><center>REGISTER Page</center></h2>
        <div className="form">
        <form>
            <label>SCHOOL NAME:</label>
            <input type="name"></input>
            <label>CONTACT NUMBER:</label>
            
            <input type="phone"></input>
        </form>
        </div>
        
    </div>)}
}
export default RegisterUser;