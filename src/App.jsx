//primeiro componente quando a aplicação começa
//react, components, estaticos

import { useContext } from 'react';
import './App.css';
import Questions from './components/Questions';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome';
import { useEffect } from 'react';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

//embaralhar as perguntas, fazendo tudo no reducer.
  useEffect(() => {
    dispatch({type:"REORDER_QUESTIONS"});
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}   
      {quizState.gameStage === "Playing" && <Questions/>}
    </div>
  )
}

//Se o stage do game for "start" eu passo o componente Welcome que irá renderizar a página do file welcome.
//Se o stage do game for "playing" eu passo o componente Questions 


export default App
