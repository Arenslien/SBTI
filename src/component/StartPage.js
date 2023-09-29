import React from 'react';
import { Link } from 'react-router-dom';

export default function StartPage() {
  // Variable
  const title = "SBTI(Siloam Bible Type Indicator)";

  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 className='white-font'> {title} </h1>
      <Link to="/question"><button className="start-button">시작하기!</button></Link>
    </>
  );
}