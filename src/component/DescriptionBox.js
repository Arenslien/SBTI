import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import mbti_db from '../db/mbti.json';

export default function DescriptionBox() {
  const location = useLocation();
  const mbti = location.pathname.split('/')[2];

  const [mbti_description, setMbtiDescription] = useState([]);
  const [good_mbti, setGoodMbti] = useState("");
  const [bad_mbti, setBadMbti] = useState("");
  const good_img_file = process.env.PUBLIC_URL + "/images/" + good_mbti.split(" ")[0] + ".jpg";
  const bad_img_file = bad_mbti !== "딱히 없습니다." ? process.env.PUBLIC_URL + "/images/" + bad_mbti.split(" ")[0] + ".jpg": "";


  const [person_description, setPersonDescription] = useState("");
  const [word, setWord] = useState("");

  useEffect(() => {
    mbti_db.MBTI.map(character => {
      if (character.mbti_name.split(" ")[0] === mbti) {
        setMbtiDescription(character.mbti_description);
        setPersonDescription(character.person_description.split("\n")[1]);
        setWord(character.word);
        setGoodMbti(character.good_relationship);
        setBadMbti(character.bad_relationship);
      }
    });
    console.log(mbti_description)
  });


  return (
    <>
      <div className='description-box'>
        <h2 className='grey-font'>
          성격 특징
        </h2>

        <ul>
          {mbti_description.map(description => {
            if (description === "") {
              return (
                <h2 className='grey-font'>기독교적 성격 특징</h2>
              );
            } else {
              return (
                <li> {description} </li>
              );
            }
          })}
        </ul>

        <h2 className='grey-font'>
          관련 구절
        </h2>
        <p className="description">
          { word }
        </p>

        <h2 className='grey-font'>
          인물 소개
        </h2>
        <p className="description">
          { person_description }
        </p>

        <br/>

          <h3 className='inline'>잘 맞는 성경 인물</h3>
          <h3 className='inline'>안 맞는 성경 인물</h3>
        <div className="relationship-box">
          <div className='relationship-card'>
            <br></br>
            <img className="person-img" src={good_img_file}/>
            <h4> {good_mbti} </h4>
          </div>
          <div className='relationship-card'>
            <br/>
            <img className="person-img" src={bad_img_file}/>
            <h4> {bad_mbti} </h4>
          </div>
        </div>

        <br/>
        <br/>
        <br/>

      </div>
    </>
  );
}