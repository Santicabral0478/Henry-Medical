import CardTurn from "./MyTurns-components/CardTurn";
import styles from "./MyTurnsPresent.module.css"
import myTurns from "../helpers/myTurns";
import { useState, useEffect } from "react";
import axios from "axios";
import DetailTurn from "./DetailTurn";

const MyTurnsPresent = ()=>{


    
    const[turns, setTurns] = useState([]); //myTurns <--- antes un array en js
    const[detail, setDetail] = useState(false);
    const[id, setId] = useState(0)
    console.log(detail);
    console.log(id);

    const handleOnClick = (id) =>{
      setId(id);
      setDetail(true);
    }

    const handleOnClose = ()=>{
      setDetail(false);
    }

      useEffect(() =>{
        fetch("http://localhost:3005/turns")
          .then((response) => response.json())
          .then((data) => setTurns(data))
          return () =>{setId(0)}
        }, []);


    return (<>
        <div className={styles.CardTurnGralCont}>
        {
          turns.map((turn) =>{
            return <CardTurn key={turn.id} turn={turn} handleOnClick={handleOnClick}/>
          })
        }
        {detail && <DetailTurn id={id} handleOnClose={handleOnClose}/>}
        </div>
    </>)
}

export default MyTurnsPresent;