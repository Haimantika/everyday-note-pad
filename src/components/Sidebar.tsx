
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Book } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  onCreateNote: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  onCreateNote,
}) => {
  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-gray-200 p-4">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Book className="w-4 h-4 text-white" />
        </div>
        <h2 className="font-bold text-gray-800">NotesApp</h2>
      </div>

      <Button 
        onClick={onCreateNote}
        className="w-full mb-6 bg-blue-600 hover:bg-blue-700 text-white transition-colors"
      >
        <Plus className="w-4 h-4 mr-2" />
        New Note
      </Button>

      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Categories</h3>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={cn(
              "w-full text-left px-3 py-2 rounded-lg transition-colors capitalize",
              selectedCategory === category
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
