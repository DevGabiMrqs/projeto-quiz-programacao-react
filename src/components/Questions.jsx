import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';


//quizState pego os valores, dispatch executo, o hook useContext, e o QuizContext está sendo utilizado para inicializar.
const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  // const currentOptions = quizState.questions[quizState.currentQuestion[options]]

  return (
    <div id="question">
      <p>Pergunta {quizState.currentQuestion +1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {/* <p>{currentOptions.question[options]}</p> */}
      </div>
      <button>Continuar</button>
    </div>
  )
}

export default Questions