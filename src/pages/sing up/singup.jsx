import React from 'react';
import Footer from '../../layouts/footer';

const Singup = () => {
    return (
        <>
        <div className=' absolute left-[41.2vh] flex flex-col gap-8'>

       <div className="min-h-screen bg-white px-4 py-5 sm:px-4 lg:px-8">
      <nav className="mb-8 text-sm text-gray-500">
        Home &nbsp;›&nbsp; <span className="text-black">Account</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      
        <div className="border p-6 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">New Customer</h2>
          <h3 className="font-medium text-gray-700 mb-2">Register Account</h3>
          <p className="text-gray-500 mb-6">
            By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            CONTINUE
          </button>
        </div>

       
        <div className="border p-6 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Returning Customer</h2>
          <h3 className="font-medium text-gray-700 mb-4">I am a returning customer</h3>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-1 w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="text-sm text-gray-500">
              <a href="#" className="hover:underline">Forgot your password?</a>
            </div>
            <div className="flex items-center gap-4">
              <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                SIGN IN
              </button>
              <a href="#" className="text-gray-500 hover:underline text-sm">Return to Store</a>
            </div>
          </form>
        </div>
      </div>
    </div>
      <Footer></Footer>
        </div>
       
        </>
    );
};

export default Singup;