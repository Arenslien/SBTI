import React, { useState, useRef } from 'react';
import questions from "../db/question.json";
import { useNavigate } from 'react-router-dom';

export default function QuestionPage() {
  // useRef
  const nextRef = useRef([]);
  const navigate = useNavigate();

  // Variable
  let [ei_score, setEIScore] = useState(0);
  let [sn_score, setSNScore] = useState(0);
  let [tf_score, setTFScore] = useState(0);
  let [jp_score, setJPScore] = useState(0);

  let my_mbti = "";

  // Button Funtion 
  const nextQuestion = (idx, type) => {
    switch(type) {
      case "e":
        setEIScore(ei_score+1);
        break;
      case "s":
        setSNScore(sn_score+1);
        break;
      case "t":
        setTFScore(tf_score+1);
        break;
      case "j":
        setJPScore(jp_score+1);
        break;
      default:
        break;
    }

    if (idx !== 20) {
      nextRef.current[idx+1].scrollIntoView({ behavior: "smooth" });
      console.log(idx);
    } else {
      console.log(idx);
      setFinalMBTI();

      navigate(`/result/${my_mbti}`);
    }
  }

  function setFinalMBTI() {
    my_mbti += ei_score >= 3 ? "E":"I";
    my_mbti += sn_score >= 3 ? "S":"N";
    my_mbti += tf_score >= 3 ? "T":"F";
    my_mbti += jp_score >= 3 ? "J":"P";
    console.log("My Mbti: " + my_mbti);
  }

  return (
    <div id="list-view-wrapper">
      <div>
        {questions.QUESTION.map(q => (
          <div key={q.id} className="question-box" ref={element => nextRef.current[q.id] = element}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 className='white-font'>{q.id}/20</h2>
            <h2 className='white-font'> {q.question} </h2>
            <button className="answer-button" onClick={() => nextQuestion(q.id, q.answer1[1])}> {q.answer1[0]} </button>
            <br></br>
            <br></br>
            <button className="answer-button" onClick={() => nextQuestion(q.id, q.answer2[1])}> {q.answer2[0]} </button>
          </div>
        ))}
      </div>
    </div>
  );
}