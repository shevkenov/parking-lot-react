import React from 'react';

import classes from './Slot.module.css';

const Slot = ({children, handleClick, isTaken, id}) => {
  return (
    <div className={`${classes.slot} ${isTaken && classes.busy}`} onClick={() => handleClick(id)}>{children}</div>
  )
}

export default Slot