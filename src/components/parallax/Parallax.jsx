import React from 'react';
import { Parallax } from 'react-parallax';
import FirstImage from '../../assets/projects/1.jpg';
import SecondImage from '../../assets/projects/2.jpg';
import ThirdImage from '../../assets/projects/3.jpg';

export default function ParallaxEffect() {
  return (
    <Parallax
      bgImage={require('../../assets/bg-lines.avif')}
      bgImageAlt="картинка на фоне"
      strength={600}
    >
      <div className="parallax">
        <div className="parallax-items">
          <div className="parallax-item">
            <img src={FirstImage} alt="" />
          </div>
          <div className="parallax-item">
            <img src={SecondImage} alt="" />
          </div>
          <div className="parallax-item">
            <img src={ThirdImage} alt="" />
          </div>
        </div>
      </div>
    </Parallax>
  );
}
