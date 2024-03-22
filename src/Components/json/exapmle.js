// import React from "react";
// import './example.css'
// import globe1 from '../Assest/globe1.png'
// import globe2 from '../Assest/globe2.png'
// import flow from '../Assest/WhatsApp Image 2024-03-02 at 2.37.02 PM.jpeg'
// export function Example(){
//     return(
//         <>
          
//                 <div className="col-lg-12">
//                     <img src={flow} className="container-fluid"/>
//                 </div>
          
           

           
//         </>
//     );
// }
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
// import fs from 'fs';
export function Example() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // Add more form fields as needed
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const jsonData = JSON.stringify(formData);
    
        // Save JSON data to a local file
        const blob = new Blob([jsonData], { type: 'application/json' });
        saveAs(blob, './form.json');
      };
    
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      {/* Add more form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
}


