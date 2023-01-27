import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import './Questions.css';

//quizState pego os valores, dispatch executo, o hook useContext, e o QuizContext está sendo utilizado para inicializar.
const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  // const currentOptions = quizState.questions[quizState.currentQuestion[options]]

  return (
    <div id="question">
      <p id="perguntas">Pergunta {quizState.currentQuestion +1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        <p id="opcoes">Opções</p>
      </div>
      <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Questions