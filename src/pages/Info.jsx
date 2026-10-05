import React from 'react'
import ResumeInput from '../components/ResumeInput'
import Preview from '../components/Preview'

function Info() {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-6">
          <ResumeInput/>
        </div>
        <div className="col-lg-6">
           <Preview/>
        </div>
      </div>

    </div>
  )
}

export default Info