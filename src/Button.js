import React from 'react';

const Button = React.memo(({ onClick, className, children }) => {
  let classes = "button";
  if (className) {
    classes += " " + className;
  }
  
  return (
    <div className={classes} onClick={() => onClick && onClick()}>
      {children}
    </div>
  );
});
export default Button;