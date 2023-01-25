import { createContext, useReducer } from "react";





//criar um const que vai determinar os estados do jogo
const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage : STAGES[0]
}




//Com o reducer eu controlo o estado do jogo e posso passar uma ação
//spread no state, pois consigo utilizar o estado anterior e passar o novo stage do game, que nesse caso é o playing.
const quizReducer = (state, action) => {
    console.log(state, action);

    switch(action.type) {
        case "CHANGE_STATE":
            return{
                ...state,
                gameStage : STAGES[1],
                currentQuestion: 0,
            }; 

            default:
                return state;
    }
}


//currenteQuestion: 0, começo com justamente pára acessar o array de perguntas. Os arrays, são baseados em zeros. 
// para inicializar criamos o quizContext e adicionamos o hook createContext

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};