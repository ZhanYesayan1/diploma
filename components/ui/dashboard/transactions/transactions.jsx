import Image from "next/image"

const Transactions = () =>{
    return(
        <div className="bg-bgSoft p-5 rounded-lg">
            <h2 className="mb-5 font-light text-textSoft">Latest Transactions</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <td className="p-2.5">Name</td>
                        <td className="p-2.5">Status</td>
                        <td className="p-2.5">Date</td>
                        <td className="p-2.5">Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td  className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                              <Image src="/user.png" 
                                   alt=""  
                                   width={40}  
                                   height={40}
                                    className="object-cover"
                                 />
                                 Anna Mkhitaryan
                            </div>
                        </td>
                        <td  className="p-2.5">
                            <span  className="rounded p-1.5 text-white text-sm bg-[#f7cb7375]">Pending</span>
                        </td>
                        <td  className="p-2.5">14.11.2024</td>
                        <td  className="p-2.5">$50</td>
                    </tr>
                    <tr>
                        <td  className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                                 <Image src="/user.png" 
                                   alt=""  
                                   width={40}  
                                   height={40}
                                   className="object-cover"
                                 />
                                 Vardan Davtyan
                            </div>
                        </td>
                        <td  className="p-2.5">
                            <span className="rounded p-1.5 text-white text-sm bg-[green]">Done</span>
                        </td>
                        <td  className="p-2.5">15.11.2024</td>
                        <td  className="p-2.5">$40</td>
                    </tr>
                    <tr>
                        <td  className="p-2.5">
                            <div className="flex gap-2.5 items-center"> 
                                <Image src="/user.png" 
                                   alt=""  
                                   width={40}  
                                   height={40}
                                   className="object-cover"
                                />
                                 Anush Sahakyan
                            </div>
                            
                        </td>
                        <td  className="p-2.5">
                            <span className="rounded p-1.5 text-white text-sm bg-[#f7737375]">Cancelled</span>
                        </td>
                        <td  className="p-2.5">20.11.2024</td>
                        <td  className="p-2.5">$60</td>
                    </tr>
                    <tr>
                        <td  className="p-2.5">
                         <div className="flex gap-2.5 items-center">
                                 <Image src="/user.png" 
                                   alt=""  
                                   width={40}  
                                   height={40}
                                   className="object-cover"
                                 />
                                   Dianna Karapetyan
                            </div>
                            
                        </td>
                        <td  className="p-2.5">
                            <span className="rounded p-1.5 text-white text-sm bg-[#f7cb7375]">Pending</span>
                        </td>
                        <td  className="p-2.5">14.11.2024</td>
                        <td  className="p-2.5">$50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Transactions
