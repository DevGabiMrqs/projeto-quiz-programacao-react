import { createContext, useReducer } from "react";
// import questions from '../data/questions.js'


//criar um const que vai determinar os estados do jogo
const STAGES = ["Start", "Playing", "End"]

const data = [
    {

        question: "O que é Vanilla JavaScript?",
        options: [
            "JavaScipt puro",
            "Uma biblioteca JavaScript",
            "Um framework JavaScript",
            "Um compilador de JavaScript"
        ],
        answer: "JavaScript puro",
    },
    {
        question: "Com qual instrução declaramos uma constante em JavaScript",
        options:["let", "var", "const", "casseta"],
        answer:"const"
    },
    {
        question: "Qual dos tipos de dados a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"]
    },
    {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "ParseInt", "sort", "reduce"],
        answer: "querySelector",
    },
]


const initialState = {
    gameStage : STAGES[0],
    questions: data,
    currentQuestion: 0,
}

//esse questions está sendo importado do folder data e sendo utilizado para passar as questões

//Com o reducer eu controlo o estado do jogo e posso passar uma ação
//spread no state, pois consigo utilizar o estado anterior e passar o novo stage do game, que nesse caso é o playing.
const quizReducer = (state, action) => {
    console.log(state, action);

    switch(action.type) {
        case "CHANGE_STATE":

        return{
            ...state,
            gameStage : STAGES[1],
        }; 

        case "REORDER_QUESTIONS":
            const reoderedQuestions = question.sort(() => {
                return Math.random() - 0,5;
            });

            return {
                ...state,
                question: reoderedQuestions
            }

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
