import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Parking from "../components/ParkingLot";
import createParkingLot from "../utils/createMatrix";
import ParkingLot from "../utils/parkingLot";

import classes from './Main.module.css';

const Main = ({slotSize}) => {
  const [parkingLot,  setParkingLot] = useState([]);
  
  useEffect(() => {
    const newLot = new ParkingLot(slotSize);
    setParkingLot(createParkingLot(newLot.slots))
  }, [slotSize])

  console.log(parkingLot)


  return (
    <div className={classes.container}>
      <Parking slots={20} />
      <Dashboard />
    </div>
  );
};

export default Main;
