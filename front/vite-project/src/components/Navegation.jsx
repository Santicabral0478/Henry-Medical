import styles from "../components/Navegation.module.css"

const Navegation = ()=>{
    return (<>
       <div className={styles.navegationlistpr}>
            <span>Home</span>
            <span>Turns</span>
            <span>News</span>
            <span>Doctors</span>
       </div>
    </>)
}

export default Navegation;