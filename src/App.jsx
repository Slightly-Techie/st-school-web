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
import ViewCertificate from './pages/ViewCertificate'
import DataTable from './components/Dashboards/DataTable'
import ProtectedRoute from '../protectedRoute/ProtectedRoute'
import { useAuthContext } from './context/AuthContext'

function App() {
  const { userRole } = useAuthContext()
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/redirect" element={<PaymentSuccess />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route path="" element={<Home />} />
          <Route path="Lessons" element={<Lessons />} />
          <Route path="Lessons/:course_title" element={<LessonDetails />} />
          <Route path="Assignments" element={<Assingments />} />
          <Route path="Assignments/:assignment_title" element={<AssignmentDetails />}/>
          <Route path="/dashboard/profile/certificate"element={<Certificate />}/>
          {userRole && (
            <Route path="users" element={<DataTable />}/>
          )}
        </Route>
        <Route path="/view/user/certificate" element={<ViewCertificate />} />
        <Route path="*" element={<h1>Page Not Found </h1>} />
      </Routes>
    </>
  )
}

export default App
