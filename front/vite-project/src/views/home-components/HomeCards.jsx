import styles from "./HomeCards.module.css";

const HomeCards = ({card: {title, text, img}})=>{
    return (<>
        <div className={styles.CardTI}>
            <img src={img} alt="" />
            <div className={styles.textCardCont}>
            <h1>{title}</h1>
            <p>{text}</p>
            </div>
        </div>
    </>)
}

export default HomeCards;