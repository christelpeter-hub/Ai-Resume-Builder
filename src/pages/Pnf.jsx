import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'> 
    <img className='w-30' src="https://imgs.search.brave.com/xEB-lHLxWfXEVULASl3_nzqs2MrPvDxXAfLNEvFyNYo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/Njk5LzYzNC9zbWFs/bC80MDQtZXJyb3It/cGFnZS1ub3QtZm91/bmQtaXNvbGF0ZWQt/aW4tcmVkLWJhY2tn/cm91bmQtaWxsdXN0/cmF0aW9uLXBuZy5w/bmc" alt="page not found" />
  <h6 className='mt-5'>WE ARE SORRY ,LOOK LIKE YOUR LOST</h6>
  <p>page your looking for is not available!!!!!</p>
  <Link to={'/'} className='btn btn-dark'>Back to home</Link>
  </div>
  )
}

export default Pnf