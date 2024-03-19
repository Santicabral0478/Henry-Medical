// views/MyTurnsPresent.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { fetchUserTurns } from '../redux/userSlice';
import CardTurn from './MyTurns-components/CardTurn';
import styles from './MyTurnsPresent.module.css';

const MyTurnsPresent = () => {
  const user = useSelector(state => state.user.user);
  const turns = useSelector(state => state.user.turns);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
   
    if (user) {
      dispatch(fetchUserTurns());
    } else {
      navigate("/home");
    }
  }, [user, dispatch, navigate]);

  const handleTurnCancelled = () => {
    dispatch(fetchUserTurns());
  };

  return (
    <>
      <div className={styles.CardTurnGralCont}>

        {turns.length > 0 ? (
         
          turns.map(turn => (
            <CardTurn key={turn.id} turn={turn} onTurnCancelled={handleTurnCancelled} />
          ))
        ) : (
        
          <h2>No hay turnos agendados.</h2>
        )}
      </div>
    </>
  );
};

export default MyTurnsPresent;
