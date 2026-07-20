import { Search, ChevronDown } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { MyStore } from "../../../Context/MyContext";

export default function SearchBarStrip() {
  const { productsData, categoryMap, setFilterData } = useContext(MyStore);

  // Teeno controls ke liye clean state
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [selectedFeature, setSelectedFeature] = useState('Featured');

  // Jab bhi state change ho, ye effect exact calculation karega
  useEffect(() => {
    if (!productsData) return;

    let result = [...productsData];

    // 1. Apply Search
    if (searchTerm.trim() !== '') {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Apply Category
    if (category !== 'All Categories') {
      result = result.filter((item) =>
        categoryMap[category]?.includes(item.category)
      );
    }
    // 3. Apply Sorting
    if (selectedFeature === 'ltoh') {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedFeature === 'htol') {
      result.sort((a, b) => b.price - a.price);
    } else if (selectedFeature === 'top') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedFeature === 'low') {
      result.sort((a, b) => a.rating - b.rating);
    }

    setFilterData(result);
  }, [searchTerm, category, selectedFeature, productsData, categoryMap, setFilterData]);

  return (
    <div className="w-full my-10 rounded-2xl bg-black p-2 sm:p-4 border border-white">
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
            <option value="ltoh">Price: Low to High</option>
            <option value="htol">Price: High to Low</option>
            <option value="top">Top Rated</option>
            <option value="low">Lowest Rated</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400 sm:right-4 sm:h-4 sm:w-4" />
        </div>

      </div>
    </div>
  );
}