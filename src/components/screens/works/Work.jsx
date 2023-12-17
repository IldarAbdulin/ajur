import React from 'react';

export const Work = ({ h3, p }) => {
  return (
    <div className="works__items-item">
      <div className="item-number">
        <h3>{h3}</h3>
      </div>
      <div className="item-title">
        <p>{p}</p>
      </div>
    </div>
  );
};
