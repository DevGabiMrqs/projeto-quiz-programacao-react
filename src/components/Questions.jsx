import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import './Questions.css';
import Option from './Option';

//quizState pego os valores, dispatch executo, o hook useContext, e o QuizContext está sendo utilizado para inicializar.
const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];


  const onSelectOption = (option) => {
    dispatch({
      type:"CHECK_ANSWER",
      payload:{ answer: currentQuestion.answer, option }
    })
  };

  return (
    <div id="question">
      <p id="perguntas">Pergunta {quizState.currentQuestion +1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option 
          option={option} 
          key={option} 
          answer={currentQuestion.answer}
          selectOption={() => onSelectOption(option)}/>
        ))}
        <p id="opcoes"></p>
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
      )}
    </div>
  )
}

//No initialState passo o estado inicial do jogo e o answerSelected, como false,
//será true quando a pessoa resposta for selecionada, nesse caso irá aparecer a próxima questão
//utilizo a props option para passar as opções, a key, para passar os valores
//a props answer é a resposta da questão atual
//selectOption, quando eu dar o clique a função selecionada deve demonstrar a opção correta.
//dentro do onSelectOption eu passo a 


export default Questions