// views/MyTurnsPresent.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserTurns } from '../redux/userSlice';
import CardTurn from './MyTurns-components/CardTurn';
import styles from './MyTurnsPresent.module.css';

const MyTurnsPresent = () => {
  const user = useSelector(state => state.user.user);
  const turns = useSelector(state => state.user.turns);
  const dispatch = useDispatch();

  useEffect(() => {
    // Verificar si hay un usuario logueado
    if (user) {
      // Realizar una solicitud al backend para obtener los turnos del usuario
      dispatch(fetchUserTurns());
    }
  }, [user, dispatch]);

  // Redirigir a la página de inicio si no hay un usuario logueado
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={styles.CardTurnGralCont}>
        {/* Utilizar un selector para obtener los datos de los turnos del estado global */}
        {turns.length > 0 ? (
          // Renderizar los turnos si hay alguno
          turns.map(turn => <CardTurn key={turn.id} turn={turn} />)
        ) : (
          // Mostrar un mensaje si no hay turnos agendados
          <p>No hay turnos agendados</p>
        )}
      </div>
    </>
  );
}

export default MyTurnsPresent;