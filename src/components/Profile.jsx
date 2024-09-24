import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext);

  return (
    <>
          <div className="w-full mt-40 h-auto">
              {!user ? <h1 className='text-4xl text-white font-bold text-center'>No User Found</h1> : <h1 className='text-4xl text-white font-bold text-center'>Welcome { user }</h1>}
      </div>
    </>
  )
}

export default Profile
