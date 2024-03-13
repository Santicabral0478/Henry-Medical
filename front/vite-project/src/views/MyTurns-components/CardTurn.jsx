// MyTurns/CardTurn.jsx
import React from 'react';
import styles from './CardTurn.module.css';

const CardTurn = ({ turn, handleOnClick }) => {
  const { id, date, time, status } = turn;

  return (
    <div className={styles.CardItem}>
      <div className={styles.PictCont}>
        <img src="/ruta/a/la/imagen.jpg" alt="Imagen del turno" /> {/* Reemplaza "/ruta/a/la/imagen.jpg" con la ruta real de la imagen */}
      </div>
      <div className={styles.TextInfoCard}>
        <span><b>Date:</b> {date}</span>
        <span><b>Time:</b> {time}</span>
        <span><b>Status:</b> {status}</span>
        <button onClick={() => handleOnClick(id)}>Ver detalles</button>
      </div>
    </div>
  );
};

export default CardTurn;