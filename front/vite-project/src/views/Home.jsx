//views/Home.jsx
import HomeCards from "./home-components/HomeCards"
import HomeAside from "./home-components/HomeAside"
import styles from "./Home.module.css"
import myHomeTextImg from "../helpers/myHomeTextImg"
import { useState } from "react"

const Home = ()=>{

    const[cards, setCards] = useState(myHomeTextImg)

    return (<>

       <div className={styles.HomeGralCont}>
            <div className={styles.HomeAsideGralCont}>
                <HomeAside/>
            </div>
            <div className={styles.HomeCardsGralCont}>
                {
                 cards.map((card) =>{
                    return (
                      <HomeCards key={card.id} card={card}/>
                    )
                })
                }
            </div>
        </div>
    
    </>)
}

export default Home; 

