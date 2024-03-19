// views/MyTurnsPresent.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { fetchUserTurns } from '../redux/userSlice';
import CardTurn from './MyTurns-components/CardTurn';
import styles from './MyTurnsPresent.module.css';

const MyTurnsPresent = () => {
  const user = useSelector(state => state.user.user);
  const turns = useSelector(state => state.user.turns);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    // Verificar si hay un usuario logueado
    if (user) {
      // Realizar una solicitud al backend para obtener los turnos del usuario
      dispatch(fetchUserTurns());
    } else {
      // Redirigir a la página de inicio si no hay un usuario logueado
      navigate("/home");
    }
  }, [user, dispatch, navigate]);

  const handleTurnCancelled = () => {
    // Realizar una nueva solicitud para obtener los turnos actualizados del usuario
    dispatch(fetchUserTurns());
  };

  return (
    <>
      <div className={styles.CardTurnGralCont}>
        {/* Utilizar un selector para obtener los datos de los turnos del estado global */}
        {turns.length > 0 ? (
          // Renderizar los turnos si hay alguno
          turns.map(turn => (
            <CardTurn key={turn.id} turn={turn} onTurnCancelled={handleTurnCancelled} />
          ))
        ) : (
          // Mostrar un mensaje si no hay turnos agendados
          <h2>No hay turnos agendados.</h2>
        )}
      </div>
    </>
  );
};

export default MyTurnsPresent;
