import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import "./Option.css";

const Option = ({option, key, answer, selectOption}) => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
        <p className='option' onClick={() => selectOption()}>{option}</p>
    </div>
  )
}

export default Option