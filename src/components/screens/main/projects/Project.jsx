import React from 'react';

export const Project = ({ h3, p, img, alt }) => {
  return (
    <div className="projects__items-content">
      <div className="content-overlay"></div>
      <img src={img} alt={alt} />
      <div className="content-details fadeIn-bottom">
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
};
