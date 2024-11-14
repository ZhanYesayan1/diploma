import styles from "../ui/dashboard/dashboard.module.css";
import Card from "../ui/dashboard/card/card";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import { MdSupervisedUserCircle, MdTrendingUp, MdAttachMoney } from "react-icons/md";
const cardData = [
    {
        icon: <MdSupervisedUserCircle size={24} />,
        title: "Total Users",
        number: "10,752",
        detail: "12% more than previous week",
    },
    {
        icon: <MdTrendingUp size={24} />,
        title: "Page Views",
        number: "24,300",
        detail: "8% more than previous week",
    },
    {
        icon: <MdAttachMoney size={24} />,
        title: "Revenue",
        number: "$1540",
        detail: "5% more than previous week",
    },
];
const Dashboard =() =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    {cardData.map((data, index) => (
                    <Card 
                    key={index}
                    icon={data.icon}
                    title={data.title}
                    number={data.number}
                    detail={data.detail}
                 />
                
            ))}
            </div>
                <Transactions/>
                <Chart/>
            </div>
            
        </div>
    )
}
export default Dashboard