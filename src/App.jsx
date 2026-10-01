import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Saved from './pages/Saved'
import Info from './pages/Info'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Download from './pages/Download'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/resume' element={<Resume/>}/>
        <Route path='/all-resumes' element={<Saved/>}/>
        <Route path='/resume-details' element={<Info/>}/>
        <Route path='/resume/:id' element={<View/>}/>
        <Route path='/downloads' element={<Download/>}/>
       <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
