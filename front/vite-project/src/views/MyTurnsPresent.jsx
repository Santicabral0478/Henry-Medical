import CardTurn from "./MyTurns-components/CardTurn";
import styles from "./MyTurnsPresent.module.css"
import myTurns from "../helpers/myTurns";
import { useState } from "react";

const MyTurnsPresent = ()=>{


    
    const[turns, setTurns] = useState(myTurns)
    console.log(myTurns);

    return (<div>
        <div className={styles.CardTurnGralCont}>
        {
          turns.map((turn) =>{
            return (
              <CardTurn key={turn.id} turn={turn}/>
            )
          })
        }
        </div>
    </div>)
}

export default MyTurnsPresent;