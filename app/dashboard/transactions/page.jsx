

const Transactions = () => {
    return(
        <div className="bg-bgSoft p-5 rounded-lg mt-10">
            <h2 className="mb-5 font-light text-textSoft">Latest Transactions</h2>
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                                <p>Anna Tosvmasyan</p>
                            </div>
                        </td>
                        <td  className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                              <p>Visa card **** 4831 <br />Card payment</p>
                            </div>
                        </td>
                        <td  className="p-2.5">
                            <span  className="rounded p-1.5 text-white text-sm bg-[#f7cb7375]">Pending</span>
                        </td>
                        <td  className="p-2.5">14.11.2024</td>
                        <td  className="p-2.5">$50</td>
                    </tr>
                    <tr>
                    <td className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                                <p>Samvel Ghazaryan</p>
                            </div>
                        </td>
                        <td  className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                                 <p>Mastercard **** 6442 <br />Card payment</p>
                            </div>
                        </td>
                        <td  className="p-2.5">
                            <span className="rounded p-1.5 text-white text-sm bg-[green]">Done</span>
                        </td>
                        <td  className="p-2.5">15.11.2024</td>
                        <td  className="p-2.5">$40</td>
                    </tr>
                    <tr>
                    <td className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                                <p>John Smith</p>
                            </div>
                        </td>
                        <td  className="p-2.5">
                            <div className="flex gap-2.5 items-center"> 
                                <p>Account ****882 <br />Bank payment</p>
                            </div>
                            
                        </td>
                        <td  className="p-2.5">
                            <span className="rounded p-1.5 text-white text-sm bg-[#f7737375]">Cancelled</span>
                        </td>
                        <td  className="p-2.5">20.11.2024</td>
                        <td  className="p-2.5">$60</td>
                    </tr>
                    <tr>
                    <td className="p-2.5">
                            <div className="flex gap-2.5 items-center">
                                <p>Ann Smith</p>
                            </div>
                        </td>
                        <td  className="p-2.5">
                         <div className="flex gap-2.5 items-center">
                                 <p>Amex card **** 5666 <br />Card payment</p>
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