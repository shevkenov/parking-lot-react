import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Parking from "../components/ParkingLot";
import createParkingLot from "../utils/distributeSlots";
import ParkingLot from "../utils/parkingLot";
import createPlateNumber from "../utils/createPlateNumber";

import classes from './Main.module.css';

const Main = ({slotSize}) => {
  const [parkingLot,  setParkingLot] = useState(null);
  const [distributedSLots, setDistributedSlots] = useState([]);
  const [freeSlots, setFreeSlots] = useState(slotSize);
   
  useEffect(() => {
    setParkingLot(new ParkingLot(slotSize))
  }, [slotSize])
  
  useEffect(() => {
    if(parkingLot){
      setDistributedSlots(createParkingLot(parkingLot.slots, 4));
      setFreeSlots(parkingLot.getAvailable());
    }
  }, [parkingLot, freeSlots])

  const parkCar = () => {
    parkingLot.park(createPlateNumber());
    setFreeSlots(parkingLot.getAvailable());
  }

  const unparkCar = (i) => {
    if(parkingLot.removeCar(i)){
      setDistributedSlots(createParkingLot(parkingLot.slots, 4));
      setFreeSlots(parkingLot.getAvailable());
    }
  }

  return (
    <div className={classes.container}>
      <Parking slots={distributedSLots} unparkCar={unparkCar}/>
      <Dashboard freeSlots={freeSlots} handleClick={parkCar}/>
    </div>
  );
};

export default Main;
