import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RiFileEditFill } from "react-icons/ri";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaXmark } from 'react-icons/fa6';
import jobRole from '../assets/jobRole.json'
import { toast } from 'react-toastify';
import { editResumeAPI } from '../services/apiService';



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

function Edit({resumeDetails,setresumeDetails}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillref = React.useRef()

  const removeSkill=(skill)=>{
    setresumeDetails({...resumeDetails,skills:resumeDetails.skills.filter(item=>item!=skill)})
  }

const addskill =(skill)=>{
  if(skill){
    if(resumeDetails?.skills?.map(item=>item.toLowerCase()).includes(skill.toLowerCase())){
      toast.warning("Given skill is already available...please add another!!!")
    }else{
      setresumeDetails({...resumeDetails,skills:[...resumeDetails?.skills,skill]})
    }
    skillref.current.value=""
  }else{
    toast.info("Input valid skill!!!")
  }
}

const handleUpdateResume=async()=>{
    const{fullName,location,job,email,phone,github,linkedin,degree,college,year,skills,summary}=resumeDetails
    if(fullName && location && job && email && phone && github && linkedin && degree && college && year && skills.length>0 &&summary){
     //api call
     const response = await editResumeAPI(resumeDetails.id,resumeDetails)
     //console.log(response);
     if(response.status==200){
      toast.success("Resume Updated successfully!!!!")
    setTimeout(() => {
       handleClose()
    }, 2000);
     }
     
    }else{
      toast.warning("please fill the form completely!!!!")
    }
  }



  return (
   <div>
      <button onClick={handleOpen} style={{color:'#482b19'}} className='btn'> <RiFileEditFill className='fs-3' /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <box id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
          <h3>Personal Details</h3>
         <div className="p-3 row">
            <TextField value={resumeDetails.fullName} onChange={e=>setresumeDetails({...resumeDetails,fullName:e.target.value})} id="standard-basic-name" label="FullName" variant="standard" />
            <TextField value={resumeDetails.location} onChange={e=>setresumeDetails({...resumeDetails,location:e.target.value})}  id="standard-basic-loc" label="Location" variant="standard" />
              <FormControl variant='standard'>
        <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
        <Select value={resumeDetails.job} onChange={e=>setresumeDetails({...resumeDetails,job:e.target.value})}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Job"
        >
          {
            jobRole.jobRoles.map(job=>(
            <MenuItem key={job} value={job}>{job}</MenuItem>
          
            ))
    }
        </Select>
      </FormControl>
          </div>
        </div>

          <div>
                   <h3>Contact Details</h3>
                   <div className="p-3 row">
                     <TextField value={resumeDetails.email} onChange={e=>setresumeDetails({...resumeDetails,email:e.target.value})}  id="standard-basic-email" label="Email" variant="standard" />
                     <TextField value={resumeDetails.phone} onChange={e=>setresumeDetails({...resumeDetails,phone:e.target.value})}  id="standard-basic-num" label="Contact Number" variant="standard" />
                     <TextField value={resumeDetails.linkedin} onChange={e=>setresumeDetails({...resumeDetails,linkedin:e.target.value})}  id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                     <TextField value={resumeDetails.github} onChange={e=>setresumeDetails({...resumeDetails,github:e.target.value})}  id="standard-basic-github" label="Github Link" variant="standard" />
                     
                   </div>
                 </div>

                <div>
                         <h3>Education Details</h3>
                          <div className="p-3 row">
                           <TextField value={resumeDetails.degree} onChange={e=>setresumeDetails({...resumeDetails,degree:e.target.value})}  id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                           <TextField value={resumeDetails.college} onChange={e=>setresumeDetails({...resumeDetails,college:e.target.value})}  id="standard-basic-college" label="College/University Name" variant="standard" />
                           <TextField value={resumeDetails.year} onChange={e=>setresumeDetails({...resumeDetails,year:e.target.value})}  id="standard-basic-year" label="Year Of Graduation" variant="standard" />
                           
                           
                         </div>
                       </div>

                  <div>
                    <h3>Skills</h3>
                    <div className="d-flex p-3">
                      <input ref={skillref} type="text" placeholder='Add New skill'
                      className='form-control'/>
                      <Button onClick={()=>addskill(skillref.current.value)} style={{color:'#d88628'}}>add</Button>
                    </div>

                    <h6>Added skills</h6>
                    <div className="p-3 d-flex justify-content-between flex-wrap">
                      {
                        resumeDetails?.skills?.map(skill=>(
                    <Button onClick={()=>removeSkill(skill)} key={skill} variant='contained' sx={{backgroundColor:'#c19868'}} className='my-1'>{skill}<FaXmark className='ms-2'/></Button>
                        )

                        )
                      }
                    </div>
                  </div>

                  <div>
                    <h3>summary</h3>
                    <div className="p-3 row">
                      <TextField value={resumeDetails.summary} onChange={e=>setresumeDetails({...resumeDetails,summary:e.target.value})} id="summary" label="summary" multiline variant='standard'/>
                    </div>
                  </div>

                  <button onClick={handleUpdateResume} className='btn text-light mt-3'style={{backgroundColor:'#b6614e'}}>UPDATE CV</button>


          </box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit