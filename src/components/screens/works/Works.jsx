import React from 'react';
import { Work } from './Work';

const arrOfWorks = [
  { id: 1, h3: '1', p: 'Обсуждение заявки с менеджером.' },
  {
    id: 2,
    h3: '2',
    p: 'Отрисовка эскиза, согласование деталей.',
  },
  {
    id: 3,
    h3: '3',
    p: 'Согласование количества изделий и стоимости.',
  },
  {
    id: 4,
    h3: '4',
    p: 'Изделия мы примем обратно для переработки.',
  },
];

export const Works = () => {
  return (
    <article className="works">
      <h3>Так выглядит процесс работы:</h3>
      <section className="works__items">
        {arrOfWorks.map((work) => (
          <Work key={work.id} h3={work.h3} p={work.p} />
        ))}
      </section>
    </article>
  );
};
