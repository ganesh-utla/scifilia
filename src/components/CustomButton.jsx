import React from 'react'

const CustomButton = ({ type='filled', title, customStyles='', handleClick, bgColor='' }) => {

  const additionalStyles = type==='outlined'? 'border border-purple-500 text-purple-500 hover:text-light-1' : 'bg-purple-500';

  return (
    <button
      className={`px-3 py-2 rounded-lg ${customStyles} ${additionalStyles} hover:bg-purple-600 transition-all`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton