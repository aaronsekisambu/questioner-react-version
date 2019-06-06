import React from 'react';

const Input = ({className, placeholder, name}) => {
  return (
    <input className={className} placeholder={placeholder} name={name}/>
  )
}

export default Input;