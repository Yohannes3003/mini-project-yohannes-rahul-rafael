import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const navigate = useNavigate('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Account created successfully');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen m-auto flex items-center justify-center">
        <div className="bg-color-primary px-6 lg:px-16 py-[20px] lg:py-[30px] rounded-md shadow-md">
          <h1 className="text-center lg:text-[42px] text-white mb-[12px]">Register</h1>
          <form className="flex flex-col gap-[12px] text-left lg:w-[480px]" onSubmit={handleRegister}>
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-white py-1 lg:text-[20px]">
                Full Name
              </label>
              <input type="text" name="fullName" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Please type here..." className="input-field" required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-white py-1 lg:text-[20px]">
                Email
              </label>
              <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please type here..." className="input-field" required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-white py-1 lg:text-[20px]">
                Password
              </label>
              <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please type here..." className="input-field" required />
            </div>
            <button type="submit" className="text-white border-2 btn w-[220px] mx-auto mt-2">
              Register
            </button>
          </form>
          <p className="text-center mt-2 text-white underline">
            <Link to="/">Back to home</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
