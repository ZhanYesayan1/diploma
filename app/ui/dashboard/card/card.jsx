import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "../card/card.module.css"

const Card = ({ icon, title, number, detail }) => {
    return (
        <div className={styles.container}>
            {icon && icon}
            <div className={styles.texts}>
                <span className={styles.title}>{title}</span>
                <span className={styles.number}>{number}</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>{detail}</span>
                    
                </span>
            </div>
        </div>
    );
};

export default Card;