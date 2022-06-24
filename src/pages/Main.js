import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import Parking from "../components/ParkingLot";
import createParkingLot from "../utils/distributeSlots";
import ParkingLot from "../utils/parkingLot";

import classes from './Main.module.css';

const Main = ({slotSize}) => {
  const [parkingLot,  setParkingLot] = useState(null);
  const [distributedSLots, setDistributedSlots] = useState([]);
  const [freeSlots, setFreeSlots] = useState([]);
   
  useEffect(() => {
    setParkingLot(new ParkingLot(slotSize))
  }, [slotSize])

  useEffect(() => {
    if(parkingLot){
      setDistributedSlots(createParkingLot(parkingLot.slots, 4))
    }
    console.log(parkingLot)
  }, [parkingLot])

  const parkCar = () => {
    parkingLot.park('ab1234bc');
    setDistributedSlots(createParkingLot(parkingLot.slots, 4));
  }

  const unparkCar = (i) => {
    console.log(parkingLot.removeCar(i))
    if(parkingLot.removeCar(i)){
      console.log(i)
      setDistributedSlots(createParkingLot(parkingLot.slots, 4));
      setFreeSlots(parkingLot.getAvailable());
    }
  }

  return (
    <div className={classes.container}>
      <Parking slots={distributedSLots} unparkCar={unparkCar}/>
      <Dashboard freeSlots={freeSlots.length} handleClick={parkCar}/>
    </div>
  );
};

export default Main;
