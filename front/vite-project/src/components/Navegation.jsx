import styles from "../components/Navegation.module.css"      
import { Link } from "react-router-dom";      
      
const Navegation = ()=>{      
    return (<>      
       <div className={styles.navegationlistpr}>      
            <Link to="/home">Home</Link>      
            <Link to="/turns">Turns</Link>      
       </div>      
    </>)      
}      
      
export default Navegation;