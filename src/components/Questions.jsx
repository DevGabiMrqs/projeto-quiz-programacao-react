import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

//quizState pego os valores, dispatch executo, o hook useContext, e o QuizContext está sendo utilizado para inicializar.
function Questions() {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState)

  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion} de {quizState.questions.lenght}</p>
      <h2>Pergunta atual</h2>
      <div id='options-container'>
        <p>Opções</p>
      </div>
      <button>Continuar</button>
    </div>
  )
}

export default Questions