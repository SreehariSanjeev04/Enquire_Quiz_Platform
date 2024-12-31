import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner'; 
import { useContext } from 'react';
import { AuthContext } from '../service/AuthContext';
import { useNavigate } from 'react-router-dom';
import { fetchDataFromLocalStorage } from "../service/AuthContext";

const LoginPage = () => {
  const { user, loading, setUser } = useContext(AuthContext); 
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = userData;

    if(!email || !password) {
      toast.error('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json"
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Login successful!');
        localStorage.setItem('enquireUserToken', result.token);
        setUser(fetchDataFromLocalStorage());
        console.log(result.user.role);
        if(result.user.role === "Admin") {
          navigate('/admin');
        } else navigate('/quiz');
      } else {
        toast.error(result.error || 'Invalid credentials, please try again.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      toast.error('Unable to connect to the server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(!loading) {
      if(user) {
        navigate(user.role === "Admin"? '/admin' : '/quiz');
      }
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg">
        <img
          src="/enquire.png"
          alt="Logo"
          className="w-32 h-32 mx-auto object-cover mb-8"
        />
        <h1 className="text-white font-bold text-4xl text-center mb-4">Login</h1>
        <h3 className="text-gray-400 text-center font-medium text-lg mb-8">
          Challenge your mind, ignite your curiosity
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <div>
            <label htmlFor="email" className="text-gray-300 text-sm mb-2 block">
              Email Id
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={userData.email}
              onChange={handleChange}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-300 text-sm mb-2 block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={userData.password}
              onChange={handleChange}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Password"
            />
          </div>
          <p className="font-semibold text-zinc-400">
            Don't have an account?{' '}
            <Link className="font-bold text-white" to="/">
              Register
            </Link>
          </p>
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full ${
                isLoading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
