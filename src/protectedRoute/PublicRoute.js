import { useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function PublicRoute({ children }) {
    const {isAuthenticated } = useAuthContext()

    
    const navigate = useNavigate()

    useEffect(() => {
      if(isAuthenticated) return navigate('/dashboard')
    }, [isAuthenticated])


    return children
  
}

export default PublicRoute