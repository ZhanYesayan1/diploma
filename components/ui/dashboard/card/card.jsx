import { MdSupervisedUserCircle } from "react-icons/md"

const Card = ({ icon, title, number, detail }) => {
    return (
        <div className="bg-bgSoft p-5 rounded-lg flex gap-7 cursor-pointer w-1/3 hover:bg-[#64677c]">
            {icon && icon}
            <div className="flex flex-col gap-6">
                <span>{title}</span>
                <span className="text-xl font-medium">{number}</span>
                <span  className="text-sm font-light">
                    <span className="text-green-500">{detail}</span>
                    
                </span>
            </div>
        </div>
    );
};

export default Card;