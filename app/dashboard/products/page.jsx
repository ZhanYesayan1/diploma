'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "@/components/ui/dashboard/search/search";

const Products = () => {
  
  const [products] = useState([
    { id: 1, name: "React Js Documentation", email: "ani@mail.ru", price: "30$", createdAt: "10 Oct 2024", stock: 32, image: "/book1.png" },
    { id: 2, name: "React The Road To Enterprise", email: "nara@gmail.com", price: "45$", createdAt: "24 Oct 2024", stock: 41, image: "/book3.png" },
    { id: 3, name: "Vue Js Documentation", email: "ani@mail.ru", price: "35$", createdAt: "30 Nov 2024", stock: 24, image: "/book4.png" },
   
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-bgSoft p-5 rounded-lg mt-10">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." onSearch={handleSearch} />
        <Link href="/dashboard/products/add">
          <button className="p-2.5 bg-[#d0bdf4] text-text border-none rounded-md cursor-pointer">Add New</button>
        </Link>
      </div>

      <table className="w-full m-5">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Description</td>
            <td className="p-2.5">Price</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Stock</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td className="p-2.5">
                <div className="flex gap-2.5 items-center">
                  <Image src={product.image} alt={product.name} width={40} height={40} className="object-cover" />
                  {product.name}
                </div>
              </td>
              <td className="p-2.5">{product.email}</td>
              <td className="p-2.5">{product.price}</td>
              <td className="p-2.5">{product.createdAt}</td>
              <td className="p-2.5">{product.stock}</td>
              <td className="p-2.5">
                <div className="flex gap-5">
                  <Link href={`/dashboard/products/singleProduct?id=${product.id}`}>
                    <button className="p-2.5 rounded-md text-text bg-teal-500 cursor-pointer">View</button>
                  </Link>
                  <button className="p-2.5 rounded-md text-text bg-red-500 cursor-pointer">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
