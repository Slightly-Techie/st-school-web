import React,{ useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../src/context/AuthContext'

function ProtectedRoute({ children }) {
    const {isAuthenticated, user} = useAuthContext()

    
    const navigate = useNavigate()

    useEffect(() => {
      if(!isAuthenticated) return navigate('/')
    }, [isAuthenticated])


    return children
  
}

export default ProtectedRoute