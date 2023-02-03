import React from 'react';
import EmptyList from '../components/EmptyList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>
      {/* Page Header */}
      <Header />
      {/* Search Bar */}
      <SearchBar />
      {/* Blog List & Empty View */}

      <EmptyList />
    </div>
  );
};
export default HomePage;
