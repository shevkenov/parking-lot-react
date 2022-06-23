import React from 'react'
import Button from './Button'
import Heading from './Heading'

import classes from "./Dashboard.module.css"
import car from '../assets/car.png';

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
        <Heading />
        <Button />
        <p>Click on busy parking lot to unpark the car</p>
        <div className={classes.carContainer}>
            <img src={car} alt="car"/>
        </div>
    </div>
  )
}

export default Dashboard