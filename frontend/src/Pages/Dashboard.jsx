import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex'>
      {/* Add a margin on the left to create space for the Sidebar */}
      <div className='w-1/5'></div>
      <div className='flex-1 justify-center items-center'>
        Dashboard content
      </div>
    </div>
  )
}

export default Dashboard
