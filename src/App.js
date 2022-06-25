import { useState } from 'react';
import { Landing } from './pages/Landing';
import Main from './pages/Main';

function App() {
  const [slotSize, setSlotSize] = useState(null);
  return (
    <>
      {
        slotSize ? 
        <Main slotSize={+slotSize}/> :
        <Landing handleClick={setSlotSize}/>
      }
      
    </>
  );
}

export default App;
