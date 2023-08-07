import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function register() 
{
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => 
  {
    e.preventDefault();
    const { name, email, password } = data;

    try {
      const response = await axios.post('/register', {
        name,
        email,
        password
      });

      const responseData = response.data;
      if (responseData.error) 
      {
        toast.error(responseData.error);
      } 
      else 
      {
        setData({}); 
        toast.success('Registration Successful');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          type='text'
          placeholder='enter name...'
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder='enter email...'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder='enter password...'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button type='submit'>submit</button>
      </form>
    </div>
  );
}
