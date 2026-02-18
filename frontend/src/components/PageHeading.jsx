import React from 'react'

function PageHeading() {
  return (
    <div className="min-h-[30vh] flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent p-2">
        Email Spam Detector
      </h1>

      <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl">
        Enter an email message below to determine whether it is 
        <span className="font-semibold text-red-500"> Spam </span>
        or 
        <span className="font-semibold text-green-600"> Not Spam</span>.
      </p>

      <div className="mt-6 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

    </div>
  )
}

export default PageHeading
