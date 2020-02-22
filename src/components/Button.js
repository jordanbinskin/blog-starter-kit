import React from 'react';

const Button = props => {
  return (
    <button href={ props.href ? props.href : ''}>
      {props.text ? props.text : 'placeholder'}
    </button>
  )
}

export default Button;