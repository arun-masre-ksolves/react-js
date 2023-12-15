
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAsync } from "../store/signUpSlice";

function Register() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.signUp);
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    adress: "",
    city: "",
  });

  // Event handler to update state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAsync(formData));
  };

  useEffect(() => {
    dispatch(registerUserAsync());
  }, [dispatch]);

  return (

 <div className="input-form-data">
<h1 className="signup-heading">Create a Seller Account!</h1>
<form onSubmit={handleSubmit}>
  <input className="input-box" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Name"
  />
  <input className="input-box" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email"
  />
  <input className="input-box" type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter Password"
  />
  <input className="input-box" type="number" name="number" value={formData.number} onChange={handleInputChange} placeholder="Enter Number"
  />
  <input className="input-box" type="text" name="adress" value={formData.adress} onChange={handleInputChange} placeholder="Enter Adress"
  />
  <input className="input-box" type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Enter City"
  />
  <button type="submit" className="Sign-up-btn">Sign UP </button>
</form>
</div>
  );
}

export default Register;

