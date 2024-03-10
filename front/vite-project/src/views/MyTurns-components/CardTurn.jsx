import styles from "./CardTurn.module.css"

const CardTurn = ({ turn, handleOnClick }) => {
    const { id, date, time, status } = turn;

    return (
        <>
            <div className={styles.CardItem}>
                <div className={styles.PictCont}>
                    <img src={turn} alt="" />
                </div>
                <div className={styles.TextInfoCard}>
                    <span><b>Date:</b> {date}</span>
                    <span><b>Time:</b> {time}</span>
                    <span><b>Status:</b> {status}</span>
                    <button onClick={() => handleOnClick(id)}>Ver detalles</button>
                </div>
            </div>
        </>
    )
}

export default CardTurn;