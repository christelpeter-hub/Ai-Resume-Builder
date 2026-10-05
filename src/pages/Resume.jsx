import React from 'react'
import { HiDocumentChartBar, HiMiniDocumentArrowDown } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div style={{minHeight:'90vh'}} className='my-5'>
      <h1 className="text-center">Create An ATS Friendly Resume in Minutes With AI </h1>
      <div className="container my-5">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4 rounded p-5 shadow text-center ">
          <HiDocumentChartBar className='fs-1 text-warning mb-3' />
          <h4>Add your Details </h4>
          <p>Our AI Will Generate Skills And Summary </p>
          <h5>Step 1</h5>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 rounded p-5 shadow text-center ">
           <HiMiniDocumentArrowDown className='fs-1 text-danger mb-3' />
          <h4>Download Your Resume</h4>
          <p>Download Resume And Start Applying </p>
          <h5>Step 2</h5>
        </div>
        <div className="col-md-1"></div>
      </div>
      </div>
      <div className="mt-5 text-center">
        <Link to={'/resume-details'} style={{background:'#744226'}} className='btn text-light py-3 px-3'>LET'S START</Link>

      </div>
    </div>
    
  )
}

export default Resume