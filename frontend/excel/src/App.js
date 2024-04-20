import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('');

  const handleFileUpload = async (event) => {

    const file = event.target.files[0];
    
    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('excelFile', file);

    try {
      // eslint-disable-next-line 
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
         
        }
      });
     
      setTimeout(() => {
        setMessage('Thank you for uploading the files.');
        const paraElement = document.querySelector('.para');
        if (paraElement) {
          paraElement.innerHTML = 'Your records will be processed shortly.';
        }
      }, 1000); 

    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (

    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Candidate Record Upload</h1>
      {/* <label htmlFor="file-upload" className="file-upload-label">Add files </label> */}
      <input type="file" id="file-upload" className="file-upload" onChange={handleFileUpload} />
      <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>
      <p className='para' style={{ color: 'blue', textAlign: 'center' }}>Add files to store in database</p>
    </div>

  );
}

export default App;