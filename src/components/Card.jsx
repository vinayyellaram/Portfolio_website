import React from "react";
import '../Styles/Projects.css'
const Card = ({ id, img, title, discription, techstack }) => {

  return (
    <div className="card">
      <img className='card-img' src={img} alt="project Img" />
      <div className='card-content'>
        <span className='card-title'><h3>{title}</h3></span>
        <div>{discription}</div>
        {/* <div>bottom container</div> */}
      </div>
      <div className='tech-container'>
        <h3>{techstack}</h3>
      </div>



    </div>
  );
};
export default Card;
