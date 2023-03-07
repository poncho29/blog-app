import React from 'react'
import { useNavigate } from 'react-router-dom'

import { adminsData } from '../data/adminsData'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState(null)  

  const login = ({ username }) => {
    const isAdmin = adminsData.find(admin => admin.username === username)
    if (isAdmin){
      setUser({...isAdmin})
    } else {
      setUser({username, role: 'user'})
    }
    navigate('/profile')
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  const auth = {user, login, logout}

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const auth = React.useContext(AuthContext);
  return auth
}

export { AuthProvider, useAuth }