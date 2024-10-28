import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce1"></div>
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce2"></div>
      <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce3"></div>
    </div>
  </div>
  )
}

export default Loading