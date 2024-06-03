// Join.js
import React, { useState } from 'react';
import haldiram3 from '.././assets/img/haldiram3.png';
import IQ from '.././assets/img/IQ.svg';


import './Join.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {firestore }from '../firebase'
import { collection, addDoc } from 'firebase/firestore';
import NewNav from './NewNav';
import Footer from './Footer';

const Join = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      gender: '',
      userType: '',
      university: '',
      graduationYear: '',
      address: '',
      postalCode: '',
      interests: []
  });

  const handleChipClick = (interest) => {
    let updatedInterests = [];
    if (selectedInterests.includes(interest)) {
        updatedInterests = selectedInterests.filter(item => item !== interest);
    } else {
        updatedInterests = [...selectedInterests, interest];
    }

    setSelectedInterests(updatedInterests); // Update the selectedInterests state

    // Update the formData state to include the updated interests
    setFormData({ ...formData, interests: updatedInterests });
};


  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Extracting data from the form data and setting default value for interests if none selected
    const interests = selectedInterests.length > 0 ? selectedInterests : ['None'];
    const { name, email, phone, gender, userType, university, graduationYear, address, postalCode } = formData;
    
    try {
        // Accessing the "form" collection in Firestore and adding a new document
        await addDoc(collection(firestore, 'form'), {
            name,
            email,
            phone,
            gender,
            userType,
            university,
            graduationYear,
            address,
            postalCode,
            interests,
            timestamp: new Date() // Adding a timestamp field with the current date and time
        });
      console.log(formData)
        setFormSubmitted(true); // Setting formSubmitted state to true after successful submission
    } catch (error) {
        console.error('Error adding document: ', error); // Logging any errors that occur during the process
    }
};


    return (
<div>
    <NewNav />
    <div className="bg-gray-900 text-white">
        <div className="join-container mx-auto max-w-5xl px-4 py-12 flex justify-center items-center">
            <div className="left-column mr-12">
                <div className="heading mb-8">
                    <h3 className="text-4xl font-bold">Welcome to<span className="text-color-green">  WorldLynk</span></h3>
                    <h3 className="text-2xl font-bold">Seamless student experience in the UK: a one-stop solution</h3>
                </div>
                <p className="large-text mb-8">Be among the first to experience the future of student life in the UK! Join our waiting list today and gain early access to our comprehensive platform designed to revolutionize your student experience.</p>
                <img src="https://join.getwyld.in/assets/images/line.png" alt="Divider" className="mb-8" />
                <div className="nav-right-content desktop">
                    <a href="/" className="glass-button smaller w-button" style={{textDecoration:'none', color:'white'}}>Back to homepage</a>
                </div>
            </div>
            <div className="right-column rounded-lg shadow-md">
    <div className="form-section">
        {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Join waiting list</h3>
                <div className="grid grid-cols-2 gap-6">
                    <div className="form-group">
                        <label htmlFor="name" className="block text-sm font-medium text-white">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email address" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200" onChange={handleChange} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="form-group">
                        <label htmlFor="phone" className="block text-sm font-medium text-white">Phone:</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender" className="block text-sm font-medium text-white">Gender:</label>
                        <input type="text" id="gender" name="gender" placeholder="Enter your gender" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200" onChange={handleChange} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="form-group">
                        <label htmlFor="university" className="block text-sm font-medium text-white">University Name:</label>
                        <input type="text" id="university" name="university" placeholder="Enter your university name" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="graduationYear" className="block text-sm font-medium text-white">Graduation Year:</label>
                        <input type="text" id="graduationYear" name="graduationYear" placeholder="Enter your graduation year" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200" onChange={handleChange} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="form-group">
                        <label htmlFor="address" className="block text-sm font-medium text-white">Address:</label>
                        <input type="text" id="address" name="address" placeholder="Enter your address" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode" className="block text-sm font-medium text-white">Postal Code:</label>
                        <input type="text" id="postalCode" name="postalCode" placeholder="Enter your postal code" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-200" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-white">User Type:</label>
                    <div className="user-type-options">
                        <div className="user-type-option">
                            <input type="radio" id="student" name="userType" value="student" onChange={handleChange} />
                            <label htmlFor="student">Student</label>
                        </div>
                        <div className="user-type-option">
                            <input type="radio" id="professional" name="userType" value="professional" onChange={handleChange} />
                            <label htmlFor="professional">Working Professional</label>
                        </div>
                    </div>
                </div>
                <div className="form-group interests-group">
                    <label className="block text-sm font-medium text-white">Interests:</label>
                    <div className="flex flex-wrap space-x-2">
                        <Chip
                            label="Jobs"
                            variant="outlined"
                            clickable
                            onClick={() => handleChipClick("Jobs")}
                            color={selectedInterests.includes("Jobs") ? "primary" : "default"}
                        />
                        <Chip
                            label="Mentorship"
                            variant="outlined"
                            clickable
                            onClick={() => handleChipClick("Mentorship")}
                            color={selectedInterests.includes("Mentorship") ? "primary" : "default"}
                        />
                        <Chip
                            label="Events"
                            variant="outlined"
                            clickable
                            onClick={() => handleChipClick("Events")}
                            color={selectedInterests.includes("Events") ? "primary" : "default"}
                        />
                        <Chip
                            label="Accommodation"
                            variant="outlined"
                            clickable
                            onClick={() => handleChipClick("Accommodation")}
                            color={selectedInterests.includes("Accommodation") ? "primary" : "default"}
                        />
                    </div>
                </div>
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-300">Join</button>
            </form>
        ) : (
            <div className="message-container">
                <h2 className="text-2xl font-bold">You are in waitlist!</h2>
                <p>Your application has been received.</p>
                {/* Add any additional content or styling for the message */}
            </div>
        )}
    </div>
</div>

        </div>
    </div>
    <Footer />
    <div className="footer-brand-logos bg-gray-800 py-8">
        <h4 className="brand-text text-black text-xl mb-4">BRANDS THAT<br />LOVE US !</h4>
        <div className="brand-logos flex justify-center items-center">
            <a href="https://www.haldiramuk.com/" className="mr-4">
                <img src={haldiram3} alt="HALDIRAM'S" className="h-12" />
            </a>
            <a href="https://www.iqstudentaccommodation.com/" className="mr-4">
                <img src={IQ} alt="IQ-STUDENT-ACCOMODATION" className="h-12" />
            </a>
            <a href="https://www.nus.org.uk/">
                <img src="https://assets.nationbuilder.com/themes/660d3381d0055b53937ac0db/attachments/original/1659555380/logo.webp?1659555380" alt="NUS" className="h-12" />
            </a>
        </div>
    </div>
</div>


    );
};

export default Join;
