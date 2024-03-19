import styles from "./SubNavBar.module.css";

const SubNavBar = ()=>{
    return (<div>
        <div className={styles.SubNavBarCont}>
            <a href="#" className={`${styles.SubNavBarContElement1} ${styles.SubNavBarContElement}`}>Emergency</a>
            <a href="#" className={`${styles.SubNavBarContElement2} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" className={`${styles.SubNavBarContElement3} ${styles.SubNavBarContElement}`}>Rooms</a>
            <a href="#" className={`${styles.SubNavBarContElement4} ${styles.SubNavBarContElement}`}>About</a>
            <a href="#" className={`${styles.SubNavBarContElement5} ${styles.SubNavBarContElement}`}>Pharmacy</a>
            <a href="#" className={`${styles.SubNavBarContElement6} ${styles.SubNavBarContElement}`}>Locations</a>
        </div>
    </div>)
}

export default SubNavBar;