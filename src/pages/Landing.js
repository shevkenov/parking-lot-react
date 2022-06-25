import React, { useState } from "react";

import classes from "./Landing.module.css"; 

export const Landing = ({handleClick}) => {
    const [value, setValue] = useState("");
  return (
    <div className={classes.lendingContainer}>
      <div className={classes.siteHeading}>
        <h1>Welcome to Parking Lot Software Inc.</h1>
      </div>
      <div className={classes.inputContainer}>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter your desired size here (1-20)" max={20} min={1}/>
        <button onClick={() => handleClick(value)}>Submit</button>
      </div>
    </div>
  );
};
