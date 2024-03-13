import styles from "./SubNavBar.module.css";

const SubNavBar = ()=>{
    return (<div>
        <div className={styles.SubNavBarCont}>
            <a href="#" className={`${styles.SubNavBarContElement1} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" className={`${styles.SubNavBarContElement2} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" className={`${styles.SubNavBarContElement3} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" className={`${styles.SubNavBarContElement4} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" className={`${styles.SubNavBarContElement5} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" className={`${styles.SubNavBarContElement6} ${styles.SubNavBarContElement}`}>Doctors</a>
        </div>
    </div>)
}

export default SubNavBar;