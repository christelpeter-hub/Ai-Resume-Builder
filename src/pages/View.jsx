import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Preview from '../components/Preview'
import { TbFileDownloadFilled } from "react-icons/tb";
import Edit from '../components/Edit'
import { MdTextSnippet } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaBackwardFast } from "react-icons/fa6";
import { downloadResumeAPI, viewResumeAPI } from '../services/apiService';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



function View() {

  const previewRef=useRef()
  const[resume,setResume]=useState({})
  const {id} = useParams()
  console.log(resume);

  useEffect(()=>{
    getResumeDetails()
  },[])
  const getResumeDetails=async()=>{
    const response = await viewResumeAPI(id)
    if(response.status==200){
      setResume(response.data)
    }
  }

  const downloadCV=async()=>{
    const PreviewTag=previewRef.current
    const canvas = await html2canvas(PreviewTag)
    canvas.toBlob(async(imgFile)=>{
      const formData=new FormData()
      formData.append("file",imgFile)
      formData.append("upload_preset","resumes")
      const result =await fetch("https://api.cloudinary.com/v1_1/icq4i5zt/auto/upload",{
      method:"POST",
      body:formData
      })
      const serverData=await result.json()
      const url = serverData.secure_url
     // console.log(url);
      generatePDF(url)
      
    })
  }

  const generatePDF=async(resumeImg)=>{
    
    const pdf=new jsPDF()
    const imageWidth=pdf.internal.pageSize.getWidth()
    const imageHeight=pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeImg,"PNG",0,0,imageWidth,imageHeight)

    const today=new Date()
    const timestamp=`${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`
    const result=await downloadResumeAPI({timestamp,resumeImg,resumeId:resume.id,jobRole:resume.job})
    if(result.status==201){
    pdf.save(`${resume.fullName}-CV.pdf`)
    }
    
  }
  
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">

            <button onClick={downloadCV} style={{color:'#482b19'}} className="btn fs-3 mx-2"><TbFileDownloadFilled /></button>


             <Edit resumeDetails={resume} setresumeDetails={setResume}/>

            {/*<Link to={'/all-resumes'}style={{color:'#482b19'}} className='btn me-2'><MdTextSnippet className='fs-3'/></Link>*/}

             {/*<Link to={'/downloads'}style={{color:'#482b19'}} className='btn me-2'><FaHistory  className='fs-3'/></Link>*/}

              <Link to={'/resume-details'}style={{color:'#482b19'}} className='btn me-2'><FaBackwardFast  className='fs-4'/></Link>
          </div>

       
       
         <div className="p-5">
         <div ref={previewRef}><Preview  resumeDetails={resume}/></div> 
         </div>
          </div>
        <div className="col-lg-2"></div>
       
      </div>
    </div>
  )
}

export default View