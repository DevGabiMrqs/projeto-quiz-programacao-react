import { createContext, useReducer } from "react";


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
    score: 0,
    answerSelected: false,
};

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

        case "CHANGE_QUESTION":
        const nextQuestion = state.currentQuestion +1;
        let endGame = false;

        if(!question[nextQuestion]) {
            endGame = true;
        }

        return{
            ...state,
            currentQuestion:nextQuestion,
            gameStage: endGame ? STAGES[2] : state.gameStage,
        };

        case "NEW_GAME":
            return initialState;


        case "CHECK_ANSWER":
            if(state.answerSelected) return state;

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if(answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }

            default:
                return state;
    }
}

//Para mudar as questões passei no case changequestions e no onclick tb usando o dispatch, depois criei,
//uma const para pegar o estado das questões atuaiz e acrescentei +1 para ir para a próxima questão.
//depois dou o return com o spread atual do state, e passo a nextQuestion como atributo para puxar as próximas questões.
//passo um let endGame, pois quando clico até a quarta questão da erro.
//Então passo o verificador (!) se o endGame for true eu passo STAGES2 caso não, passo estado atual do game.


//currentQuestion: 0, começo com justamente para acessar o array de perguntas. Os arrays, são baseados em zeros. 
// para inicializar criamos o quizContext e adicionamos o hook createContext

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};
