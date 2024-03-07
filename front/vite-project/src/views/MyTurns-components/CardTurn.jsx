import styles from "./CardTurn.module.css"
import turn from "../../assets/turn.png"

const CardTurn = ({turn: {date, time, status}})=>{






    return (<>
        <div className={styles.CardItem}>
            <div className={styles.PictCont}>
                <img src={turn} alt="" />
            </div>
            <div className={styles.TextInfoCard}>
                <span><b>Date:</b> {date}</span>
                <span><b>Time:</b> {time}</span>
                <span><b>Status:</b> {status}</span>
            </div>
        </div>
    </>)
}

export default CardTurn; 