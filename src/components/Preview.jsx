import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function Preview() {
  return (
    <div className='w-100'>
      <h2>fullname</h2>
     <p className="fs-6 lh-1">phone:</p>
      <p className="fs-6 lh-1">Email:</p>
       <p className="fs-6 lh-1">Linkedin:</p>
        <p className="fs-6 lh-1">Github:</p>
         <p className="fs-6 lh-1">Location:</p>
     <Divider className='bg-dark my-3'/>
     <h4>Professional summary</h4>
     <p>summary</p>
      <Divider className='bg-dark my-3'/>
     <h4>Techincal skills</h4>
     <span><Button variant="text" className='text-dark'>skill</Button></span>
     <Divider className='bg-dark my-3'/>
     <h4>Education</h4>
      <p className="fs-6 lh-1">Bachelors'degree in </p>
      <p className="fs-6 lh-1">College/University Name: </p>
       <p className="fs-6 lh-1">Year of Graduation: </p>

      
    </div>

    
    
  )
}

export default Preview