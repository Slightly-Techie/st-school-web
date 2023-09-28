import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Lessons from './pages/Lessons'
import Dashboard from './pages/Dashboard'
import Assingments from './pages/Assingments'
import Home from './components/Dashboards/Home'
import LessonDetails from './pages/LessonDetails';
import AssignmentDetails from './pages/AssignmentDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="Lessons" element={<Lessons />} />
          <Route path="Lessons/:course_title" element={<LessonDetails />} />
          <Route path='Assignments' element={<Assingments />} />
          <Route path='Assignments/:id' element={<AssignmentDetails/>} />
        </Route>
        <Route path="/assignments" element={<Assingments />} />
      </Routes>
    </>
  )
}

export default App
