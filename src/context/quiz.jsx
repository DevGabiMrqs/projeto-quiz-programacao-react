import { createContext, useReducer } from "react";



//criar um const que vai determinar os estados do jogo
const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage : STAGES[0]
}

//Com o reducer eu controlo o estado do jogo e posso passar uma ação
const quizReducer = (state, action) => {
    console.log(state, action);

    switch(action.type) {
        case "CHANGE_STATE":
            return state;
        default:
            return state;
    }
}



// para inicializar criamos o quizContext e adicionamos o hook createContext
export const QuizContext = createContext();


export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};