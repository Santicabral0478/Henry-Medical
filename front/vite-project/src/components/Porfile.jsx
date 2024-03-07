import imagePorfile from "../assets/imagePorfile.jpg"
import styles from "../components/Porfile.module.css"

const Porfile = ()=>{
    return (<>
       <div className={styles.linkporfilecont}>
            <img src={imagePorfile} alt="" />
       </div>
    </>)
}

export default Porfile;