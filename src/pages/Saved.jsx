import React,{useState,useEffect} from 'react'
import { FaTrash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { deleteResumeAPI, getAllResumeAPI } from '../services/apiService'
import { FaSearch } from 'react-icons/fa'




function Saved() {

  const [allResumes,setAllResumes]=useState([])
  const [searchKey,setSearchkey]=useState("")
  const [dummyAllResumes,setDummyAllResumes]=useState([])

  console.log(searchKey);

  useEffect(()=>{
   searchKey==""? getAllResumes():searchCandidate()
  },[searchKey])


  const searchCandidate=()=>{
    setAllResumes(dummyAllResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLowerCase())))
  }

  const getAllResumes=async()=>{
    const response=await getAllResumeAPI()
    if(response.status==200){
      setAllResumes(response.data)
      setDummyAllResumes(response.data)
    }
  }
  
  const removeResume=async(id)=>{
    if (confirm("Are you sure,Do you want to delete the resume?")){
      const response=await deleteResumeAPI(id)
      if(response.status==200){
        getAllResumes()
      }
    }
  }

  
  return (
    <div className='my-5 container d-flex justify-content-center align-items-center flex-column'>
      <h1>All Saved Resumes </h1>
      <p style={{textAlign:'justify'}} className="my-5">All resume submitted to the platform in one place ,allowing administrators or recruiters to Efficently view,search,filter,and manage  candidate profiles.It provides a quick overview of available  and thier key details,making the recuritement and candidate-selection process more organized and efficent.</p>
      <div className="d-flex justify-content-center align-items-center w-50">
        <input onChange={(e)=>setSearchkey(e.target.value)} type="text" placeholder='Search candidate by their job role ' className="form-control"/>
        <FaSearch style={{marginLeft:'-30px'}}/>
      </div>
      <table className="my-5 table table-hover table-striped">
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
        {
          allResumes?.length>0?
          allResumes?.map((resume,index)=>(  
          <tr key={resume?.id}>
            <td>{index+1}</td>
            <td> <Link to={`/resume/${resume?.id}`}>{resume?.fullName.toUpperCase()}</Link></td>
            <td>{resume?.job.toUpperCase()}</td>
            <td><button onClick={()=>removeResume(resume?.id)} className='btn text-danger'><FaTrash/></button></td>
          </tr>
          ))
          :
          <p className="text-center">No Resumes added yet!!!</p>
        }
        </tbody>
      </table>
    </div>
  )
}

export default Saved