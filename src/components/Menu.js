import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/auth'

export const Menu = () => {
  const auth = useAuth()

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.private && !auth.user) return null

          if (route.publicOnly && auth.user) return null

          return (
            <li key={route.to}>
              <NavLink
                to={route.to}
                style={({ isActive }) => ({
                  color: isActive ? 'blue'  : 'red'
                })} 
              >
                {route.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const routes = [
  {
    to: '/',
    text: 'Home',
    private: false
  },
  {
    to: '/blog',
    text: 'blog',
    private: false
  },
  {
    to: '/profile',
    text: 'profile',
    private: true
  },
  {
    to: '/login',
    text: 'Login',
    private: false,
    publicOnly: true
  },
  {
    to: '/logout',
    text: 'logout',
    private: true
  }
]
