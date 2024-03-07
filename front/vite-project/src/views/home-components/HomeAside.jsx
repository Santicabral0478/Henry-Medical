import styles from "./HomeAside.module.css"

const HomeAside = ()=>{
    return (<>
        <div className={styles.GralItemsAside}>
            <div className={`${styles.GralItem1} ${styles.GralItem}`}></div>
            <div className={`${styles.GralItem2} ${styles.GralItem}`}></div>
            <div className={`${styles.GralItem3} ${styles.GralItem}`}></div>
            <div className={`${styles.GralItem4} ${styles.GralItem}`}></div>
            <div className={`${styles.GralItem5} ${styles.GralItem}`}></div>
            <div className={`${styles.GralItem6} ${styles.GralItem}`}></div>
        </div> 
    </>)
}

export default HomeAside;