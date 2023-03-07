import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState(null)  

  const login = ({ username }) => {
    setUser({username})
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