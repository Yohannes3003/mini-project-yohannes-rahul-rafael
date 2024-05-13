import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../assets/hero.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Mengatur isLoading menjadi true saat proses login dimulai
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      const displayName = user.displayName ? `Welcome, ${user.displayName}` : `Welcome, ${email}`;
      toast.success(displayName);
      navigate('/dashboard');
    } catch (error) {
      console.log('Login failed', error);
      setIsLoading(false); // Mengatur isLoading menjadi false setelah proses login selesai
    }
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="container min-h-[700px] mx-auto flex justify-around items-center lg:w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center justify-center text-left lg:gap-[120px]">
          <div className="flex-1">
            <img src={Banner} alt="Banner" className="w-[220px] lg:w-screen" />
          </div>
          <div className="flex-1 bg-color-primary px-[42px] py-[32px] rounded-md">
            <form className="flex flex-col gap-[12px] text- mx-auto lg:w-[480px]" onSubmit={handleLogin}>
              <h1 className="text-white text-center text-[24px] lg:text-[42px]">Login Account</h1>
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
                {isLoading ? 'Loading...' : 'Login'}
              </button>
            </form>
            <p className="text-center mt-2 text-white">
              Don't have an account?{' '}
              <Link to="/register" className="underline font-semibold">
                Register Now.
              </Link>
              <br />
              <span className="font-semibold underline">
                <Link to="/">Back to home</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
