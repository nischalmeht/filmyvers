import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import swal from "sweetalert2";
import { addDoc } from "firebase/firestore";
import { userRef } from "../firebase/Firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [OTP, setOTP] = useState("");

  const auth = getAuth();

 

  // Function to create a new user with email and password
  const handleSubmit = () => {
    alert('hii')
    uploadData()
  };
  const uploadData = async () => {
    try {
      setLoading(true)
      if (!form.email || !form.password) {
        swal({
          text: "Please enter a valid email and password",
          icon: "warning",
        });
        return;
      }    
      const salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(form.password, salt);
      await addDoc(userRef, {
        name: form.name,
        password: hash,
        mobile: form.mobile,
        email:form.email
      });
      setForm({
        name: '',
        password: '',
        mobile: '',
        email:''
      })
      setLoading(false)
      navigate('/login')

    } catch(err) {
      console.log(err);
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex flex-col mt-8 items-center">
      <h1 className="text-xl font-bold">Sign up</h1>
      {otpSent ? (
        <>
          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label htmlFor="otp" className="leading-7 text-sm text-gray-300">OTP</label>
              <input
                id="otp"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button
              onClick={handleSubmit}
              className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
            >
              {loading ? <TailSpin height={25} color="white" /> : "Confirm OTP"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-300">Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label htmlFor="mobile" className="leading-7 text-sm text-gray-300">Mobile No.</label>
              <input
                type="number"
                id="mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full md:w-1/3">
            <div className="relative">
              <label htmlFor="password" className="leading-7 text-sm text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button
            onClick={handleSubmit}
             
              className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
            >
              {loading ? <TailSpin height={25} color="white" /> : "Submit"}
            </button>
          </div>
        </>
      )}
      <div>
        <p className="text-white">Already have an account? <Link to="/login"><span className="text-blue-500">Login</span></Link></p>
      </div>
      <div id="recaptcha"></div>
    </div>
  );
};

export default Signup;
