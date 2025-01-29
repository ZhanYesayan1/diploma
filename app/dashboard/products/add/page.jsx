const addProductPage = () =>{
    return(
        <div className="bg-bgSoft p-6 rounded-lg mt-6">
            <form action="" className="flex flex-wrap justify-between">
                <input type="text"  placeholder="Title" name="title" required className="p-8 bg-transparent text-text  border-2 border-solid rounded-md mb-8 w-2/5"/>
                    <select name="cat" id="cat" className="p-8 bg-transparent text-varText  border-2 border-solid rounded-md mb-8 w-2/5">
                        <option value="general" className="p-8 p-8 bg-bgSoft text-text">Choose a Category</option>
                        <option value="development" className="p-8 p-8 bg-bgSoft text-text">Development</option>
                        <option value="computer" className="p-8 bg-bgSoft text-text">Computer</option>
                        <option value="sale" className="p-8 bg-bgSoft text-text">Sale</option>
                    </select>
                    <input type="number" placeholder="Price"  className="p-8 w-2/5 rounded-md  bg-transparent text-text border-2 border-solid" />
                    <input type="number" placeholder="Stock" className="p-8 w-2/5 rounded-md  bg-transparent text-text border-2 border-solid "/>
                    <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Description" className="p-8 bg-transparent text-varText border-2 border-solid rounded-md mt-8 w-full"></textarea>
                    <button className="p-8 w-full bg-teal-400  text-text  border-2 border-solid rounded-md mt-8">Submit</button>
            </form>
        </div>
    )
}
export default addProductPage