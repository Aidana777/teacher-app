import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './components/Admin/Admin'
import About from './components/About/About'
import Telegram from './components/Telegram/Telegram'
import Principles from './components/Principles/Principles'
import { Layout } from './components/Layout/Layout'
import Home from './components/Home/Home'
import TeachersList from './components/TeachersList/TeachersList '
import TeacherDetail from './components/TeacherDetail/TeacherDetail '
import data from './db.json';
const App = () => {
  return (
    <div className='app'>
      <Layout />
      <Routes>
        <Route index path='/' element={<Home data={data} />} />
        <Route path='admin' element={<Admin />} />
        <Route path='about' element={<About />} />
        <Route path='telegram' element={<Telegram />} />
        <Route path='principles' element={<Principles />} />
        <Route path='teachers' element={<TeachersList data={data} />} />
        <Route exact path="/teacher/:id" element={<TeacherDetail data={data} />} />
      </Routes>
    </div>
  )
}

export default App