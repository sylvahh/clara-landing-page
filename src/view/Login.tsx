import React, { useState } from 'react';
import logo from '../assets/logo~green.png';
import { useStore } from '../store/StoreProvider';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useStore()

    const handleLogin = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        if (email && password) {
            login(data)
        }
     }
    
  return (
    <div className='  flex justify-center flex-col items-center h-screen w-screen space-y-10 px-5 bg-alt-tertiary'>
      <div className='mx-auto'>
        <img src={logo} alt='' className='mx-auto w-[75%]' />
      </div>
      <form className='w-full sm:w-[50%] bg-white p-5 rounded-lg shadow shadow-black'>
        <div className='mb-5'>
          <h1 className='text-3xl font-bold text-tertiary '> Login</h1>
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email address
          </label>
                  <input
            onChange={(e)=> setEmail(e.target.value)}
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='john.doe@company.com'
            required
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Password
          </label>
                  <input
            onChange={(e)=> setPassword(e.target.value)}
            type='password'
            id='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='•••••••••'
            required
          />
        </div>

        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
                      <input
              id='remember'
              type='checkbox'
              value=''
              className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
            
            />
          </div>
          <label
            htmlFor='remember'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Remember me .
          </label>
        </div>
              <button
                onClick={(e) =>handleLogin(e)} 
          type='submit'
          className='text-white bg-tertiary-100 transition-all duration-500 hover:bg-primary  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
