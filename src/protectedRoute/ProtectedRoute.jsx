import { useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function ProtectedRoute({ children }) {
    const {isAuthenticated } = useAuthContext()

    
    const navigate = useNavigate()

    useEffect(() => {
      if(!isAuthenticated) return navigate('/login')
    }, [isAuthenticated])


    return children
  
}

export default ProtectedRoute