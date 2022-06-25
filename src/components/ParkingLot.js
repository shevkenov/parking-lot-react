import React from 'react'
import Slot from './Slot'

import classes from "./ParkingLot.module.css"; 

const ParkingLot = ({slots, unparkCar}) => {
  return (
    <div className={classes.parkinglot}>
      {
        slots.map((rows, inx) => {
          return (
            <div className={classes.row} key={inx}>
              {
                rows.map((r) => <Slot plate={r.plateNumber} handleClick={unparkCar} key={r.plateNumber} isTaken={r.isTaken}>{r.plateNumber}</Slot>)
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default ParkingLot