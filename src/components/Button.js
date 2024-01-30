import React from 'react';

function Button({ text, isClickButton, clickManagement }) {
  return (
    <button
      className={isClickButton ? 'click-button' : 'reset-button'}
      onClick={clickManagement}
    >
      {text}
    </button>
  );
}

export default Button;