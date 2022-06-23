import React from 'react'

import classes from "./Heading.module.css";

const Heading = ({freeSlots}) => {
  return (
    <div className={classes.container}>
        <h1 className={classes.heading}>Parking Lot Software Inc.</h1>
        <p className={classes.infoSection}>Available slots: <span>9</span></p>
    </div>
  )
}

export default Heading;