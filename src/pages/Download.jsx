import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";
import { FaTrash } from 'react-icons/fa6';
import { getAlldownloadAPI} from '../services/apiService';
import { resume } from 'react-dom/server';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Download() {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const[downloadList,setDownloadList]=useState([])
  const[label,setLabel]=useState([])
  const[value,setValue]=useState([])
  const colorpallete = ['#2596be','#df8144','#b4d3d5','#e82615','#4439a8','#c270a7']
  const backgroundColor = label.map((value,index)=>colorpallete[index%colorpallete.length])
 // console.log(downloadList);

 const data ={
  labels:label,
  datasets:[{
    label:'download count',
    data:value,
    backgroundColor
  }
]
 }

useEffect(()=>{
  getAlldownloads()
},[])

const getAlldownloads=async()=>{
  const result= await getAlldownloadAPI()
  setDownloadList(result.data)
  const output={}
  result.data.forEach(item=>{
    const currentJob=item.jobRole
    if(currentJob in output){
      output[currentJob]+=1
    }else{
      output[currentJob]=1
    }
  })
  const allJobs=Object.keys(output)
  const allCount=Object.values(output)
  setLabel(allJobs)
  setValue(allCount)
}

  return (
    <div className='container my-5'>

      <div className="d-flex justify-content-between align-items-center">
        <h2> All Downloaded Resume Details</h2>
         <button onClick={handleOpen} style={{backgroundColor:'#411e09'}} className='btn text-light'>View in Chart</button>
      </div>
      {downloadList.length>0 &&
        <p className='my-3 fw-bolder'>Total Downloaded resume from our site is <span className='text-danger fs-4'>{downloadList.length}</span></p>
      }
      <div className="row my-5">
        {
          downloadList?.length>0 ?
          downloadList?.map(resume=>(
            <div key={resume?.id} className="col-lg-4 mb-3">
          <div style={{height:'400px'}} className="shadow p-3 rounded">
              <h6>Review at : {resume?.timestamp}</h6>
          <div className="mt-3 text-center">
           <Link to={`/resume/${resume?.resumeId}`}><img className='w-100' height={'300px'} src={resume?.resumeImg} alt="download cv" /></Link>
            </div>
          </div>
        </div>
          ))
          :
          <div className="text-center">User not Downloaded any resume yet !!!</div>
        }

        
      </div>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor:'#8a4f58', width:'100%', padding:'10px',color:'white', textAlign:'center'}}>
      CV download count by job role
    </Typography>
    <Box id="modal-modal-description" sx={{mt:2}}>
      <div className='d-flex justify-content-center align-items-center m-5'><Pie data={data}/>
      </div>
      <p style={{textAlign:'justify'}}>This chart provides an overview of the number of CV downloads associated with different job roles on the website. It helps visualize the demand and engagement for CVs across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing download counts across roles, the chart can provide useful insights into user preferences and the popularity of different career opportunities on the platform.</p>

    </Box>
  </Box>
</Modal>

    </div>

  )
}

export default Download