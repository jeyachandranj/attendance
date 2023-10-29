import React from 'react';

const Card = ({ title, imageUrl }) => {
  return (
    <div className="card">
       {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
      <div className="header-container">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
