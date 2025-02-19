import './App.css';
import { useCallback, useState } from 'react';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";

let exerciseList = [
  {type: DURATION_EXERCISE, name: "Running"},
  {type: DURATION_EXERCISE, name: "Rowing"},
  {type: DURATION_EXERCISE, name: "Swimming"},
  {type: REPETITION_EXERCISE, name: "Push Ups"}
];

function App() {
  let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  let [currentExercise, setCurrentExercise] = useState("");
  let screenComponent = undefined;
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  });

  if (currentScreen === MENU_SCREEN) {
    screenComponent = <div>
      <p>Exercise Menu</p>
      <ul>
        {exerciseList.map((exercise) => {
          return <li>
            <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
          </li>
        })}
      </ul>
    </div>
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch(currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = <DurationExercise
          exercise={currentExercise}
          setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
      break;
      case REPETITION_EXERCISE:
        screenComponent = <RepetitionExercise
          exercise={currentExercise}
          setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
      break;
      default:
        screenComponent = undefined
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;