import { useEffect, useState } from "react";
import AuthService from "../../services/auth.services";
import { Country } from "country-state-city";
import CustomDropdown from "../../components/custom.dropdown";
import {FetchClient} from '../../services/fetch_client';

const RegisterSchool = () => {
  const [schoolData, setSchoolData] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [apiResponse, setApiResponse] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [country, setCountry] = useState("");
  const [establishedYear, setEstablishedYear] = useState("");
  const [enlister, setEnlister] = useState("");
  const [enlisterEmail, setEnlisterEmail] = useState("");
  const [submit,onSubmit]=useState(false)
  //const [stateList, setStateList] = useState([]);
  useEffect(() => {
    const authService = new AuthService(FetchClient);
    const registerSchool = async () => {
      try {
        const res = await authService.registerSchool(schoolData);
        console.log('res.....',res)
        setApiResponse("Suuccess");
      } catch (e) {
        console.log(e);
        setApiResponse("Failed");
      }
    };
    const fetchCountryList = async () => {
      try {
        const countryList = await Country.getAllCountries();
        setCountryList(countryList);
      } catch (e) {
        setCountryList([]);
      }
    };
    fetchCountryList();
    if(submit){
        registerSchool(schoolData)
    }
  
  });
  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // Create a new FormData object from the form

    // Convert FormData object to an array of key-value pairs using the entries() method
    const formDataArray = Array.from(formData.entries());

    // Destructure the formDataArray to extract field names and values
    const formDataObject = Object.fromEntries(formDataArray);
    console.log("..........", formDataObject);
    setSchoolData(formDataObject)
    onSubmit(true)
    
   
  };

  
  
  return (
    <div>
      <h2>
        <center>REGISTER Page</center>
      </h2>
      <div className="form">
        <form onSubmit={onFormSubmit}>
          <label>SCHOOL NAME:</label>
          <input
            type="name"
            name="schoolName"
            value={schoolName}
            onChange={(e)=>setSchoolName(e.target.value)}
          ></input>
          <label>CONTACT NUMBER:</label>
          <CustomDropdown
            name="countryCode"
            value={countryCode}
            options={countryList.map((e, index) => {
              return { name: e.phonecode, id: index };
            })}
            onSelect={(e)=>setCountryCode(e)}
          ></CustomDropdown>
          <input
            type="phone"
            name="contactNumber"
            value={contactNumber}
            onChange={(e)=>setContactNumber(e.target.value)}
          ></input>
          <label>Address Line 1:</label>
          <input
            type="name"
            name="addressLine1"
            value={addressLine1}
            onChange={(e)=>setAddressLine1(e.target.value)}
          ></input>
          <label>Address Line 2:</label>
          <input
            type="name"
            name="addressLine2"
            value={addressLine2}
            onChange={(e)=>setAddressLine2(e.target.value)}
          ></input>
          <label>Established Year:</label>
          <input
            type="phone"
            name="establishedYear"
            value={establishedYear}
            onChange={(e)=>setEstablishedYear(e.target.value)}
          ></input>
          <label>PINCODE:</label>
          <input
            type="phone"
            name="pinCode"
            value={pinCode}
            onChange={(e)=>setPinCode(e.target.value)}
          ></input>
          <label>Enlister Name:</label>
          <input
            type="name"
            name="enlister"
            value={enlister}
            onChange={(e)=>setEnlister(e.target.value)}
          ></input>
          <label>Enlister Email:</label>
          <input
            type="email"
            name="enlisterEmail"
            value={enlisterEmail}
            onChange={(e)=>setEnlisterEmail(e.target.value)}
          ></input>
          <label>Country</label>
          <CustomDropdown
            name="country"
            value={country}
            options={countryList.map((e) => {
              return { name: e.name, id: e.phonecode };
            })}
            onSelect={(e)=>setCountry(e)}
          />
          <label>STATE:</label>
          <input
            type="phone"
            name="state"
            value={state}
            onChange={(e)=>setState(e.target.value)}
          ></input>
          <label>CITY:</label>
          <input
            type="name"
            name="city"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          ></input>
          <button type="submit">Register</button>
          <h2>{apiResponse}</h2>
        </form>
      </div>
    </div>
  );
};
export {RegisterSchool}