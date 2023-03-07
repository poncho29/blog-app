import React from 'react'

import { useAuth } from '../context/auth'

export const Profile = () => {
  const auth = useAuth()
  console.log(auth)

  return (
    <>
      <h1>Profile</h1>

      <p>Welcome, {auth.user.username}</p>
    </>
  )
}
