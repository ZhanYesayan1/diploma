import styles from "../transactions/transactions.module.css"
import Image from "next/image"

const Transactions = () =>{
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                              <Image src="/user.png" 
                                   alt=""  
                                   width={40}  
                                   height={40}
                                   className={styles.userImage}
                                 />
                                 Anna Mkhitaryan
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>14.11.2024</td>
                        <td>$50</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                 <Image src="/user.png" 
                                   alt=""  
                                   width={40}  
                                   height={40}
                                   className={styles.userImage}
                                 />
                                 Vardan Davtyan
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>15.11.2024</td>
                        <td>$40</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/user.png" 
                                   alt=""  
                                   width={40}  
                                   height={40}
                                   className={styles.userImage}
                                />
                                 Anush Sahakyan
                            </div>
                            
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>20.11.2024</td>
                        <td>$60</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                 <Image src="/user.png" 
                                   alt=""  
                                   width={40}  
                                   height={40}
                                   className={styles.userImage}
                                 />
                                   Dianna Karapetyan
                            </div>
                            
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>14.11.2024</td>
                        <td>$50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Transactions
