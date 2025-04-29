
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Implement actual search functionality
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for study materials..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 py-2 w-full focus:ring-2 focus:ring-studyspark-500 focus:border-studyspark-500"
            autoFocus
          />
        </div>
        <Button type="submit" className="ml-2 bg-studyspark-600 hover:bg-studyspark-700">
          Search
        </Button>
        <Button
          type="button"
          variant="ghost"
          className="ml-2"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </form>
      <div className="mt-3">
        <p className="text-sm text-gray-500">Popular searches:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {["Mathematics", "Physics", "Programming", "History", "Literature"].map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="text-sm bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-gray-700 transition duration-200"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
