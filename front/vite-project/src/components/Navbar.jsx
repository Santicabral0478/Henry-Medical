import LogoNav from "./LogoNav";
import Navegation from "./Navegation";
import Profile from "./Porfile";
import styles from "./Navbar.module.css"

const Navbar = ()=>{
    return (<>
        <div className="cont-gral">
            <div className={styles.NavBarcontainer}>
                <LogoNav/>
                <Navegation/>
                <Profile/>
            </div>
        </div>
    </>)
}

export default Navbar;