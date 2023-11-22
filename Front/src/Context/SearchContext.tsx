import React, { createContext, useContext, ReactNode, useState } from 'react';

interface SearchContextProps {
  children: ReactNode;
}

interface SearchContextValue {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
};
