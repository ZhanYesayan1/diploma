'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); 

  const handleLogin = (e) => {
    e.preventDefault(); 

    
    if (email === 'janna.yesayan@mail.ru' && password === 'password123') {
      setError(''); 
      router.push('/dashboard'); 
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="w-full flex h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-bgSoft p-[50px] rounded-lg w-[500px] h-[500px] flex flex-col justify-center gap-[30px]"
      >
        <h2>Login to Book UpSelling!</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-[30px] border-[2px] border-solid rounded bg-bgSoft text-text"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-[30px] border-[2px] border-solid rounded bg-bgSoft text-text"
          required
        />
        {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="p-[30px] bg-teal-400 cursor-pointer text-[var(--text)] bg-transparent border-2 border-solid rounded-md mt-8"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
