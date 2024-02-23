import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const Register = () => {

  const [formData, setFormData]=useState({
    email:"",
    password1:"",
    password2:""
  })

  const {email,password1,password2}=formData

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            name="email"
            required
            sx={{ width: "550px", marginTop: "10px" }}
            onChange={handleChange}
          />
          <TextField
            label="password"
            variant="outlined"
            sx={{ width: "550px", marginTop: "10px" }}
            type="password"
            name="password1"
            value={password1}
            required
            onChange={handleChange}
          />
          <TextField
            label="Conferm password"
            variant="outlined"
            type="password"
            name="password2"
            value={password2}
            required
            sx={{ width: "550px", marginTop: "10px" }}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" sx={{ width: "550px", marginTop: "10px" }}>
            Save
          </Button>
        </span>
      </form>
    </>
  );
};

export default Register;
