import ilust from "../../assets/ilust.jpg"
import styles from "./HomeCards.module.css";

const HomeCards = ()=>{
    return (<>
        <div className={styles.CardTI}>
            <img src={ilust} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Perferendis iusto, voluptate, fugiat, tenetur sint tempora 
                maxime eos expedita enim ipsam et? Laudantium fugit iste, 
                minus animi ipsa itaque doloribus ab?
            </p>
        </div>
    </>)
}

export default HomeCards;