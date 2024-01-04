import React from 'react';

export default function Modal({ modal, setModal }) {
  return (
    <section className="modal" onClick={() => setModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Хотите узнать стоимость пошива?</h2>
        <p>Заполните форму и мы вышлем Вам коммерческое предложение</p>
        <div className="modal-content-form">
          {' '}
          <input
            type="text"
            placeholder="ФИО"
            autoComplete="name"
            name="Name"
          />
          <input type="text" placeholder="Ваш Email" />
        </div>
      </div>
    </section>
  );
}
