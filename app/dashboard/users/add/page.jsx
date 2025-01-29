const addUserPage = () => {
    return (
        <div className="bg-bgSoft p-6 rounded-lg mt-6">
            <form action="" className="flex flex-wrap justify-between">
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    required 
                    className="p-8 bg-transparent text-text border-2 border-solid rounded-md mb-8 w-full" 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    className="p-8 bg-transparent text-text border-2 border-solid rounded-md mb-8 w-full" 
                />
                <div className="w-full mb-6">
                    <label htmlFor="isAdmin" className="block mb-2 text-text">Is Admin?</label>
                    <select 
                        name="isAdmin" 
                        id="isAdmin" 
                        className="p-5 w-full border-2 border-solid rounded text-textSoft bg-bg"
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div className="w-full mb-6">
                    <label htmlFor="isActive" className="block mb-2 text-text">Is Active?</label>
                    <select 
                        name="isActive" 
                        id="isActive" 
                        className="p-5 w-full border-2 border-solid rounded text-textSoft bg-bg"
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <button className="p-8 w-full bg-teal-400 text-text border-2 border-solid rounded-md mt-8">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default addUserPage;
