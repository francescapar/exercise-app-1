import { useState } from 'react';

export default function DistanceExercise({ exercise, setMenuScreen }) {
  let [distance, setDistance] = useState(0); 
  const [cycling, setCycling] = useState(false); 

  const handleStartStop = () => {
    setCycling(!cycling); 
  };

  const handleReset = () => {
    setDistance(0); 
  };

  const incrementDistance = () => {
    if (cycling) {
      setDistance(prevDistance => prevDistance + 0.1); 
    }
  };

  if (cycling) {
    setTimeout(incrementDistance, 1000);
  }

  return (
    <div>
      <p>{exercise.name}</p>
      <p style={{ fontSize: "3em" }}>{distance.toFixed(1)} km</p>
      <button onClick={handleStartStop} style={{ fontSize: "3em" }}>
        {cycling ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset} style={{ fontSize: "3em" }}>
        Reset
      </button><br />
      <button style={{ fontSize: "2em" }} onClick={setMenuScreen}>Return to Menu</button>
    </div>
  );
}
