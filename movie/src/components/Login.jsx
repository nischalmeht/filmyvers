import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { userRef } from '../firebase/Firebase';
import { where, query, getDocs } from 'firebase/firestore';  // Import missing parts for Firestore query
import swal from 'sweetalert2';  // Correct way to import SweetAlert
import bcrypt from 'bcryptjs';  // Ensure bcrypt is installed and imported

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();  // For navigation after successful login

    const [form, setForm] = useState({
        email: "",  // Updated form state to include email
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
 
    
    const login = async () => {
      setLoading(true);
    
      try {
        // Query Firestore to find the user based on email
        const quer = query(userRef, where('email', '==', form.email)); // Querying with 'email' field
        const querySnapshot = await getDocs(quer);  // Correct method to get documents
    
        // If no user is found
        if (querySnapshot.empty) {
          swal.fire({
            text: "User not found",
            icon: "error",
          });
          setLoading(false);
          return;
        }
    
        // Assuming we found one user (you may want to handle the case of multiple results)
        const userDoc = querySnapshot.docs[0]; // Get the first document (user)
        const userData = userDoc.data(); // Get the user data
    
        // Compare the password (bcrypt compares the plain password with the hashed one)
        const isPasswordCorrect = bcrypt.compareSync(form.password, userData.password);
    
        if (isPasswordCorrect) {
          swal.fire({
            text: "Login successful",
            icon: "success",
          });
          // Navigate to dashboard or home page
          navigate('/');
        } else {
          swal.fire({
            text: "Incorrect password",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Error during login: ", error);
        swal.fire({
          text: "An error occurred, please try again",
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    };
    

    return (
        <div className="w-full flex flex-col mt-8 items-center">
            <h1 className="text-xl font-bold">Login</h1>
            <div className="p-2 w-full md:w-1/3">
                <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            <div className="p-2 w-full md:w-1/3">
                <div className="relative">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-300">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            <div className="p-2 w-full">
                <button
                    onClick={login}
                    className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
                >
                    {loading ? <TailSpin height={25} color="white" /> : "Login"}
                </button>
            </div>
            <div>
                <p className='text-white'>Do not have an account? <Link to={'/signup'}><span className="text-blue-500">Sign Up</span></Link></p>
            </div>
        </div>
    );
}

export default Login;
