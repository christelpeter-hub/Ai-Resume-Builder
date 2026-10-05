import React from 'react'
import { Link } from 'react-router-dom'
import Preview from '../components/Preview'
import { TbFileDownloadFilled } from "react-icons/tb";
import Edit from '../components/Edit'
import { MdTextSnippet } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaBackwardFast } from "react-icons/fa6";

function View() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">

            <button style={{color:'#482b19'}} className="btn fs-3 mx-2"><TbFileDownloadFilled /></button>


             <Edit/>

            <Link to={'/all-resumes'}style={{color:'#482b19'}} className='btn me-2'><MdTextSnippet className='fs-3'/></Link>

             <Link to={'/downloads'}style={{color:'#482b19'}} className='btn me-2'><FaHistory  className='fs-3'/></Link>

              <Link to={'/resume-details'}style={{color:'#482b19'}} className='btn me-2'><FaBackwardFast  className='fs-4'/></Link>
          </div>

       
       
         <div className="p-5">
          <Preview/>
         </div>
          </div>
        <div className="col-lg-2"></div>
       
      </div>
    </div>
  )
}

export default View