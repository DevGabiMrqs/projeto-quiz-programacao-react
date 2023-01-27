//primeiro componente quando a aplicação começa é o app
//react, components, estaticos

import { QuizContext } from './context/quiz';
import { useContext } from 'react';

import './App.css';

import Questions from './components/Questions';
import Welcome from './components/Welcome';
import GameOver from './components/GameOver';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}   
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage ==="End" && <GameOver/>}
    </div>
  )
}

//Se o stage do game for "start" eu passo o componente Welcome que irá renderizar a página do file welcome.
//Se o stage do game for "playing" eu passo o componente Questions 


export default App
