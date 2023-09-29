import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import mbti_db from '../db/mbti.json';

export default function CharacterBox() {
  const location = useLocation();
  const mbti = location.pathname.split('/')[2];

  const [img_file, setImgFile] = useState(""); 
  const [name, setName] = useState("");
  const [name_description, setNameDescription] = useState("");

  useEffect(() => {
    mbti_db.MBTI.map(character => {
      if (character.mbti_name.split(" ")[0] === mbti) {
        setImgFile(process.env.PUBLIC_URL + "/images/" + mbti + ".jpg");
        console.log(img_file);
        setName(character.mbti_name.split(" ")[1]);
        setNameDescription(character.person_description.split("\n")[0]);
      }
    });
  });
  

  return (
    <>
      <h1 className="white-font"> SBTI 결과! </h1>
      <h2 className="white-font">나의 성격과 가장 비슷한 성경 인물은?</h2>
      <img className="person-img" src={img_file}/>
      <h3 className="white-font"> {name_description} </h3>
      <h1 className="white-font"> {mbti + " " + name} </h1>
    </>
  );
}