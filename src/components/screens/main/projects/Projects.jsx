import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image1 from '../../../../assets/projects/1.jpg';
import Image2 from '../../../../assets/projects/2.jpg';
import Image3 from '../../../../assets/projects/3.jpg';
import Image4 from '../../../../assets/projects/4.jpg';
import Image5 from '../../../../assets/projects/5.jpg';
import Image6 from '../../../../assets/projects/6.jpg';
import Image7 from '../../../../assets/projects/7.jpg';
import Image8 from '../../../../assets/projects/8.jpg';
import { Project } from './Project';

const arrOfProjects = [
  {
    id: 1,
    img: Image6,
    h3: 'Сарафан',
    p: 'Свободный сарафан из мягкой экокожи с вырезом',
    alt: 'image1',
  },
  {
    id: 2,
    img: Image2,
    h3: 'Юбка',
    p: 'Юбка миди с запахом на пуговицах',
    alt: 'image1',
  },
  {
    id: 3,
    img: Image3,
    h3: 'Юбка',
    p: 'Черная юбка миди с поясом',
    alt: 'image1',
  },
  {
    id: 4,
    img: Image8,
    h3: 'Лонгслив',
    p: 'Белый лонгслив со швами снаружи',
    alt: 'image1',
  },
  {
    id: 5,
    img: Image5,
    h3: 'Сарафан',
    p: 'Кожаный сарафан на бретелях из экокожи',
    alt: 'image5',
  },
  {
    id: 6,
    img: Image1,
    h3: 'Юбка',
    p: 'Трикотажная юбка макси с золотыми пайетками',
    alt: 'image5',
  },
  {
    id: 7,
    img: Image7,
    h3: 'Брюки',
    p: 'Черные брюки прямого кроя из экокожи',
    alt: 'image5',
  },
  {
    id: 8,
    img: Image4,
    h3: 'Платье',
    p: 'Чёрное замшевое платье',
    alt: 'image5',
  },
];

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Продукция</h2>{' '}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        className="projects__items"
      >
        {arrOfProjects.map((pj) => (
          <SwiperSlide key={pj.id}>
            {' '}
            <Project img={pj.img} alt={pj.alt} h3={pj.h3} p={pj.p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
