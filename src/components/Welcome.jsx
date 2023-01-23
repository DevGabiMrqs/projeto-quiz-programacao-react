import Quiz from '../img/quiz.svg';
import './Welcome.css';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

//com o dispatch eu entro no reducer e executo meu switch
//com o quiz state eu pego os valores, e o dispacht eu executo os valores
const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome"> 
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz}/>
    </div>
  );
};

export default Welcome;



