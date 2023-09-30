import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Lessons from './pages/Lessons'
import Dashboard from './pages/Dashboard'
import Assingments from './pages/Assingments'
import Home from './components/Dashboards/Home'
import LessonDetails from './pages/LessonDetails'
import AssignmentDetails from './pages/AssignmentDetails'
import Certificate from './pages/Certificate'
import PaymentSuccess from './components/Signup/PaymentSuccess'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/redirect" element={<PaymentSuccess />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="Lessons" element={<Lessons />} />
          <Route path="Lessons/:course_title" element={<LessonDetails />} />
          <Route path="Assignments" element={<Assingments />} />
          <Route
            path="Assignments/:assignment_title"
            element={<AssignmentDetails />}
          />
          <Route
            path="/dashboard/profile/certificate"
            element={<Certificate />}
          />
        </Route>
        <Route path="*" element={<h1>Page Not Found </h1>} />
      </Routes>
    </>
  )
}

export default App
