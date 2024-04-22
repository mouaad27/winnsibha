import Navbar from "./Navbar";
import "../singup.css";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

import { FaGoogle } from "react-icons/fa6";
const Singup = () => {
    
    return ( 
        <div className="sign">*
         <Navbar></Navbar>

        <div className="singup">
           
            <div className="singup-form ">
            <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
            <link href='https://fonts.googleapis.com/css?family=Jost' rel='stylesheet'></link>
                <div className="caa"><h1 className="font-bold text-3xl mb-6">Create an account</h1></div>
                <div className="as"><p>Already have an account?  <a className="fc">Sign in</a></p></div>
                <div>
                <button type="submit" className="google-button"><div className="google"><FaGoogle className="google-icon" /><div className="google-text">Sign up with google</div></div></button>
                </div>
                <div className="or-with-lign"><div className="or-lign"><div class="line"></div>
                <div class="text-or">Or</div>
                <div class="line"></div>
                </div>
                </div>
                <div className="boxes">
                <div><p className="input-name">email</p><input type="email" className="text-sign mb-4"/> </div>
                 <div><p className="input-name">password</p><input type="password" className="text-sign"/></div>
                 </div>
                 <div>
                <div className="cont-button"><button type="submit" className="continue-button">continue</button></div>
                </div>


            </div>

        </div>
         
         <div className=" bg-slate-400 mr-20 ml-20"><div className="flex justify-between mr-20  ml-20 mb-36"> <div><p className="input-name text-left">email</p><input type="email" className="text-sign1 mb-4 bg-white"/> </div>
         <div><p className="input-name text-left">email</p><input type="email" className="text-sign1 mb-4 bg-white"/> </div></div>
         <div className="flex justify-between mr-20  ml-20 mb-36"><div ><p className="input-name text-left">email</p><input type="email" className="text-sign1 mb-4 bg-white"/> </div>
         <div><p className="input-name text-left">email</p><input type="email" className="text-sign1 mb-4 bg-white"/> </div></div>
         <div className="flex justify-between mr-20  ml-20 mb-36"><div><p className="input-name text-left">email</p><input type="email" className="text-sign1 mb-4 bg-white"/> </div>
         <div><p className="input-name text-left">email</p><input type="email" className="text-sign1 mb-4 bg-white"/> </div></div>
        </div>
        <div class="max-w-md mx-auto py-6 px-4shadow-md rounded-md">
    <h2 class="text-2xl font-semibold mb-4">User Registration Form</h2>
    <div className=" bg-slate-50 h-96 w-full">
    
        <div className="flex"><div class="mb-4">
            <label for="firstName" class="block text-sm font-medium text-gray-700">First Name:</label>
            <input type="text" id="firstName" name="firstName" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <div class="mb-4">
            <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name:</label>
            <input type="text" id="lastName" name="lastName" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div></div>

        <div class="mb-4">
            <label for="userName" class="block text-sm font-medium text-gray-700">Username:</label>
            <input type="text" id="userName" name="userName" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <div className="flex"><div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email Address:</label>
            <input type="email" id="email" name="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number:</label>
            <input type="tel" id="phone" name="phone" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div></div>

        <div class="mb-4">
            <label for="location" class="block text-sm font-medium text-gray-700">Location:</label>
            <input type="text" id="location" name="location" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <div className="flex"><div class="mb-4">
            <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password:</label>
            <input type="password" id="currentPassword" name="currentPassword" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <div class="mb-4">
            <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password:</label>
            <input type="password" id="newPassword" name="newPassword" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div></div>

        <div class="mb-4">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md">Submit</button>
    
</div></div></div>



     );
}
export default Singup;