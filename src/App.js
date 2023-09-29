// Import Library
import './App.css';

// router react
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import QuestionPage from './component/QuestionPage';
import StartPage from './component/StartPage';
import ResultPage from './component/ResultPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <StartPage/> }></Route>
        <Route path="/question" element={ <QuestionPage/> }></Route>
        <Route path="/result/:mbti" element={ <ResultPage/> }></Route>
      </Routes>
    </div> 
  );
}

export default App;
