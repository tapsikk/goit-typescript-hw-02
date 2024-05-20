import React, { useRef } from 'react';
import { Form } from "react-bootstrap";
import { toast } from 'react-toastify';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchInput.current?.value.trim();

    if (!query) {
      toast.error('Please enter a search query');
    } else {
      onSearch(query);
    }
  };

  return (
    <div className="search-section">
      <Form onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="Type something to search..."
          className="search-input"
          ref={searchInput}
        />
      </Form>
    </div>
  );
};

export default SearchBar;