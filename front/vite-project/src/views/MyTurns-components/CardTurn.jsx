import React from 'react';
import axios from 'axios';
import styles from './CardTurn.module.css';
import turn from '../../assets/turn.png';

const CardTurn = ({ turn, onTurnCancelled }) => {
  const { id, date, time, status } = turn;

  const handleCancelTurn = async () => {
    const confirmed = window.confirm('¿Estás seguro de cancelar este turno?');
    if (confirmed) {
      try {
        await axios.put(`http://localhost:3005/turns/cancel/${id}`);
        alert('Turno cancelado exitosamente');
        onTurnCancelled(); // Emitir la señal de cancelación del turno
      } catch (error) {
        console.error('Error al cancelar turno:', error);
        alert('Error al cancelar turno');
      }
    }
  };

  return (
    <div className={styles.CardItem}>
      <div className={styles.PictCont}>
        <img src={turn} alt="Imagen del turno" /> 
      </div>
      <div className={styles.TextInfoCard}>
        <span><b>Date:</b> {date}</span>
        <span><b>Time:</b> {time}</span>
        <span><b>Status:</b> {status}</span>
        {status !== 'cancelled' && ( // Evitar mostrar el botón si el turno ya está cancelado
          <button onClick={handleCancelTurn}>Cancelar mi turno</button>
        )}
      </div>
    </div>
  );
};

export default CardTurn;
