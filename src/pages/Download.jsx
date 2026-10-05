import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";
import { FaTrash } from 'react-icons/fa6';


function Download() {
  return (
    <div className='container my-5'>

      <div className="d-flex justify-content-between align-items-center">
        <h2>Downloaded Resume History</h2>
        <Link to={'/resume-details'}><IoArrowBackCircle />Back</Link>
      </div>
      <div className="row my-5">
        <div className="col-lg-4 mb-3">
          <div style={{height:'400px'}} className="shadow p-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <h6>Review at : timestamp</h6>
              
            </div>
          <div className="mt-3 text-center">
           <Link to={'/resume/:id'}><img className='w-100' height={'300px'} src="https://imgs.search.brave.com/ePTiWDR3JLVSYrGcurRfzvxh63-6bpV8GDls4PI82_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGFu/ZG91dC1jdi5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvQnVzaW5lc3Mt/b3BlcmF0aW9ucy1D/Vi1leGFtcGxlcy0x/LTMwMHgyNjIucG5n" alt="download cv" /></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Download