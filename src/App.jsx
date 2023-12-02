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
import ProtectedRoute from './protectedRoute/ProtectedRoute'
import { useAuthContext } from './context/AuthContext'
import Homepage from './pages/Homepage'
import PublicRoute from './protectedRoute/PublicRoute'
import ProtectedWrapper from './protectedRoute/ProtectedWrapper'

function App() {
  const { userRole } = useAuthContext()
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login"  element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/signup/redirect" element={<PublicRoute><PaymentSuccess /></PublicRoute>} />
        {/* <Route element={<ProtectedWrapper />}> */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="Lessons" element={<Lessons />} />
          <Route path="Lessons/:course_title" element={<LessonDetails />} />
          <Route path="Assignments" element={<Assingments />} />
          <Route path="Assignments/:assignment_title" element={<AssignmentDetails />}/>
          <Route path="profile/certificate"element={<Certificate />}/>
          {userRole && (
            <Route path="users" element={<DataTable />}/>
          )}
        </Route>
        {/* </Route> */}
        <Route path="/view/user/certificate" element={<ViewCertificate />} />
        <Route path="*" element={<h1>Page Not Found </h1>} />
      </Routes>
    </>
  )
}

export default App
