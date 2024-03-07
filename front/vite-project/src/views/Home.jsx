import HomeCards from "./home-components/HomeCards"
import HomeAside from "./home-components/HomeAside"
import styles from "./Home.module.css"

const Home = ()=>{
    return (<>
        <div className={styles.HomeGralCont}>
            <div className={styles.HomeAsideGralCont}>
                <HomeAside/>
            </div>
            <div className={styles.HomeCardsGralCont}>
                <HomeCards/>
                <HomeCards/>
                <HomeCards/>
                <HomeCards/>
            </div>
        </div>
    </>)
}

export default Home;