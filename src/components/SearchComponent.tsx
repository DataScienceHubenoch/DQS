import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Loader2, X } from 'lucide-react';
import { useSearch } from '@/hooks/useApi';
import { cn } from '@/lib/utils';

interface SearchComponentProps {
  onResultClick?: (result: any) => void;
  className?: string;
  placeholder?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onResultClick,
  className,
  placeholder = "Search courses, services, blog posts..."
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { results, search, loading } = useSearch();

  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (query.trim().length > 2) {
        search(query);
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(delayedSearch);
  }, [query, search]);

  const handleResultClick = (result: any) => {
    setIsOpen(false);
    setQuery('');
    if (onResultClick) {
      onResultClick(result);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        {loading && (
          <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 animate-spin" />
        )}
      </div>

      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {results && results.length > 0 ? (
              <div className="divide-y">
                {results.map((result: any, index: number) => (
                  <div
                    key={index}
                    className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{result.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                          {result.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : query.trim().length > 2 && !loading ? (
              <div className="p-4 text-center text-gray-500">
                No results found for "{query}"
              </div>
            ) : null}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchComponent;