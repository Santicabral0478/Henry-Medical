import React from 'react';
import axios from 'axios';
import styles from './CardTurn.module.css';

const CardTurn = ({ turn, onTurnCancelled }) => {
  const { id, date, time, status, details } = turn;

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
        <img src="https://municipiosanjuan.gob.ar/images/turnos-transparente.png" alt="Imagen del turno" /> 
      </div>
      <div className={styles.TextInfoCard}>
        <span><b>Date:</b> {date}</span>
        <span><b>Time:</b> {time}</span>
        <span><b>Status:</b> <span style={{ color: status === 'active' ? 'green' : status === 'cancelled' ? 'red' : 'inherit' }}>{status}</span></span>
        <span><b>Details:</b> {details}</span>
        {status !== 'cancelled' && ( 
          <button onClick={handleCancelTurn}>Cancelar turno</button>
        )}
      </div>
    </div>
  );
};

export default CardTurn;
