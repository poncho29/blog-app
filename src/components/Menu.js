import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({
                color: isActive ? 'blue'  : 'red'
              })} 
            >
              {route.text}
            </NavLink>
          </li>
        ))}

        {/* <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li> */}
      </ul>
    </nav>
  )
}

const routes = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/blog',
    text: 'blog'
  },
  {
    to: '/profile',
    text: 'profile'
  }
]
