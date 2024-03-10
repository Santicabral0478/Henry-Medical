import styles from "./SubNavBar.module.css";

const SubNavBar = ()=>{
    return (<div>
        <div className={styles.SubNavBarCont}>
            <a href="#" class={`${styles.SubNavBarContElement1} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" class={`${styles.SubNavBarContElement2} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" class={`${styles.SubNavBarContElement3} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" class={`${styles.SubNavBarContElement4} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" class={`${styles.SubNavBarContElement5} ${styles.SubNavBarContElement}`}>Doctors</a>
            <a href="#" class={`${styles.SubNavBarContElement6} ${styles.SubNavBarContElement}`}>Doctors</a>
        </div>
    </div>)
}

export default SubNavBar;