import React from 'react';

const Button = ({ label, id, type, handleClick }) => {
  return ( 
    <button
      type="button"
      label={label}
      id={id}
      data-type={type}
      onClick={handleClick}
    >
      {label}
    </button>
   );
}
 
export default Button;