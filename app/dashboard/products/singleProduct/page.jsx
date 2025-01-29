import Image from "next/image"
const SingleProductPage = () =>{

    return(
        <div className="flex gap-y-12 mt-5">
            <div className="flex-1 bg-bgSoft p-5 rounded-lg font-bold text-textSoft h-max"> 
                <div className="w-full h-80 relative rounded-lg truncate mb-5"> 
                    <Image src="/user.png"
                            alt="" 
                            width={400}
                            height={40}  />
                </div>
                Zhanna Yesayan
            </div>
            <div className="flex-3 bg-bgSoft p-5 rounded-lg w-8/12 ml-[10px] ">
                <form action="" className="flex flex-col">
                    <label>Username</label>
                    <input type="text" name="username"placeholder="Zhanna Yesayan"  className="p-5 border-2 border-solid rounded text-textSoft bg-bg my-[10px] mx-0"/>
                    <label>Email</label>
                    <input type="email" name="email"placeholder="jannayesayan1@gmail.com" className="p-5 border-2 border-solid rounded text-textSoft bg-bg my-[10px] mx-0"/>
                    <label>Password</label>
                    <input type="password" name="password"  className="p-5 border-2 border-solid roundedtext-textSoft bg-bg my-[10px] mx-0" />
                    <label>Phone</label>
                    <input type="text" name="phone"placeholder="+37498765432" className="p-5 border-2 border-solid rounded text-textSoft bg-bg my-[10px] mx-0"/>
                    <label>Address</label>
                    <input type="text" name="address"placeholder="Yerevan" className="p-5 border-2 border-solid rounded text-textSoft bg-bg my-[10px] mx-0"/>
                    <label>Address</label>
                    <textarea name="address" type="text" placeholder="Yerevan" className="p-5 border-2 border-solid rounded text-textSoft bg-bg my-[10px] mx-0"></textarea>
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin" className="p-5 border-2 border-solid rounded text-textSoft bg-bg my-[10px] mx-0">
                        <option value={true}>Yes</option>
                        <option value={false}>NO</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive" className="p-5 border-2 border-solid rounded text-textSoft bg-bg my-[10px] mx-0">
                        <option value={true}>Yes</option>
                        <option value={false}>NO</option>
                    </select>
                    <button className="w-full p-[20px] bg-teal-400 text-[var(--text)]  bg-transparent border-2 border-solid cursor-pointer rounded-md mt-8">Update</button>
                </form>
                
            </div>
        </div>
    )
}
export default SingleProductPage