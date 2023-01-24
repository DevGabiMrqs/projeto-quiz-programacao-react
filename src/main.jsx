import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QuizProvider } from './context/quiz'
import { QuizContext } from './context/quiz'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
)


//render está renderizando o App, e todo esse conteúdo está sendo colocado na root/raiz do projeto
//e dentro do App.jsx tem todo o conteúdo do projeto
//no React não tem necessidade de colocar a extensão do arquivo no Componente, ou seja App.jsx somente App