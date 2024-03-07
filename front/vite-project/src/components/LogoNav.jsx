import medical from "../assets/medical.jpg"
import styles from "./LogoNav.module.css"

const LogoNav = ()=>{
    return (<>
        <div className={styles.logonavpict}>
            <img src={medical} alt="" />
        </div>
    </>)
}

export default LogoNav;