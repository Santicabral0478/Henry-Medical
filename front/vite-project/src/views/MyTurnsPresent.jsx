// MyTurnsPresent.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardTurn from "./MyTurns-components/CardTurn";
import styles from "./MyTurnsPresent.module.css"
import { fetchUserTurns } from '../redux/userSlice'; 

const MyTurnsPresent = () => {
  const turns = useSelector(state => state.user.turns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserTurns()); 
  }, [dispatch]);

  return (
    <>
      <div className={styles.CardTurnGralCont}>
        {turns.map(turn => <CardTurn key={turn.id} turn={turn} />)}
      </div>
    </>
  );
}

export default MyTurnsPresent;