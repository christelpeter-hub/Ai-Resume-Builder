import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';




function Header() {
  const aboutUsContent = "An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*app icon*/}
            <img width={'50px'} src="https://imgs.search.brave.com/P-2hTNuZxaKoNFl0ViZSZfTUhJHOR9C2osB1bVRwUa4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvOC9SZXN1/bWUtUE5HLUltYWdl/LnBuZw" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:'sans-serif' }}>
         <Link to={'/'} className='text-light text-decoration-none'> AI rBuilder</Link>
          </Typography>
         <Tooltip title={aboutUsContent}><Button color="inherit">ABOUT US </Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header