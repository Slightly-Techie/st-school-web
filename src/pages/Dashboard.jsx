import Admin from '../components/Dashboards/Admin';
import User from '../components/Dashboards/User';
import { useAuthContext } from '../context/AuthContext';


const Dashboard = () => {
  const {userRole} = useAuthContext()
  return (
    <div className="dashboard">
        {userRole ? <Admin/> : <User/>}
    </div>

  
  )
}

export default Dashboard