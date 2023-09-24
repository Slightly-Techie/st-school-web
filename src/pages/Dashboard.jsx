import {React , useState} from 'react'
import Admin from '../components/Dashboards/Admin';
import User from '../components/Dashboards/User';


const Dashboard = () => {
const [admin, setAdmin] = useState(true)


  return (
    <div className="dashboard">
        {admin ? <Admin/> : <User/>}
    </div>

  
  )
}

export default Dashboard