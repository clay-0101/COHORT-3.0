import { Search, ChevronDown } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { MyStore } from "../../../Context/MyContext";
import { X } from "lucide-react";

export default function SearchBarStrip() {
  const { productsData, categoryMap, setFilterData , selectedFeature, setSelectedFeature,searchTerm, setSearchTerm, category, setCategory} = useContext(MyStore);


  useEffect(() => {
    if (!productsData) return;

    let result = [...productsData];

    //  Search
    if (searchTerm.trim() !== '') {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    //  Category
    if (category !== 'All Categories') {
      result = result.filter((item) =>
        categoryMap[category]?.includes(item.category)
      );
    }
    //  Sorting
    if (selectedFeature === 'Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedFeature === 'High to Low') {
      result.sort((a, b) => b.price - a.price);
    } else if (selectedFeature === 'Top Rated') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedFeature === 'Lowes Rated') {
      result.sort((a, b) => a.rating - b.rating);
    }

    setFilterData(result);

  }, [searchTerm, category, selectedFeature, productsData]);

  return (
    <div className="w-full my-10 rounded-2xl flex flex-col justify-center  bg-black p-2 sm:p-4 border border-white">
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-neutral-700 bg-black p-1.5 sm:flex-nowrap sm:gap-3 sm:rounded-full sm:p-0.5">

        {/* Search input */}
        <div className="flex min-w-[140px] flex-1 basis-full items-center gap-2 px-2 sm:basis-auto sm:gap-3 sm:px-4">
          <Search className="h-4 w-4 shrink-0 text-neutral-500 sm:h-5 sm:w-5" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent text-xs text-white placeholder-neutral-500 outline-none sm:text-sm"
          />
        </div>

        {/* Category dropdown */}
        <div className="relative flex-1 sm:flex-none">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none rounded-full border border-neutral-700 bg-black py-2 pl-3 pr-8 text-xs text-white hover:border-neutral-500 sm:py-3 sm:pl-5 sm:pr-9 sm:text-sm"
          >
            <option value="All Categories">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
            <option value="Home">Home</option>
            <option value="Sports">Sport</option>
            <option value="Accessories">Accessories</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400 sm:right-4 sm:h-4 sm:w-4" />
        </div>

        {/* Sort dropdown */}
        <div className="relative flex-1 sm:flex-none">
          <select
            value={selectedFeature}
            onChange={(e) => setSelectedFeature(e.target.value)}
            className="w-full appearance-none rounded-full border border-neutral-700 bg-black py-2 pl-3 pr-8 text-xs text-white hover:border-neutral-500 sm:py-3 sm:pl-5 sm:pr-9 sm:text-sm"
          >
            <option value="Featured">Featured</option>
            <option value="Low to High">Price: Low to High</option>
            <option value="High to Low">Price: High to Low</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Lowest Rated">Lowest Rated</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400 sm:right-4 sm:h-4 sm:w-4" />
        </div>

      </div>
      {(category !== 'All Categories' || selectedFeature !== 'Featured' ) && (<div className="flex  gap-3 mt-5 border-t border-white ">
        {category !== 'All Categories' && <div className="border w-fit mt-3 flex gap-1 justify-center  items-center text-[12px] bg-[#c7f40030] text-[#c8f400] border-[#c8f400] px-3  rounded-full">
          <p>{category}</p>
          <X
            onClick={() => {
              setCategory('All Categories')
            }}
            className="cursor-pointer" size={12} />
        </div>}
        {selectedFeature !== 'Featured' && <div className="border w-fit mt-3 flex gap-1 justify-center  items-center text-[12px] bg-[#c7f40030] text-[#c8f400] border-[#c8f400] px-3  rounded-full">
          <p>{selectedFeature}</p>
          <X
            onClick={() => {
              setSelectedFeature('Featured')
            }}
            className="cursor-pointer" size={12} />
        </div>}
        <div className="border w-fit mt-3 flex gap-1 justify-center  items-center text-[14px] bg-[#f4210030] text-[#f41800] border-[#f41400] px-3  rounded-full"><p>Clear All</p> <X
        onClick={()=>{
          setCategory('All Categories')
          setSelectedFeature('Featured')
        }}
        className="cursor-pointer"
         size={12}/></div>
      </div>)}
    </div>
  );
}