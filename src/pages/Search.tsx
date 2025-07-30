
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import GraphQLSearch from '@/components/GraphQLSearch';

const Search = () => {
  return (
    <DocsLayout>
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">GraphQL Operation Search</h1>
          <p className="text-gray-600">
            Use this search tool to quickly find and navigate to specific queries, mutations, and fragments across all available operations.
          </p>
        </div>
        
        <div className="mb-8">
          <GraphQLSearch />
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="font-semibold text-blue-800 mb-2">Search Tips</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Press <kbd className="px-1 py-0.5 text-xs border rounded bg-gray-100">⌘K</kbd> or <kbd className="px-1 py-0.5 text-xs border rounded bg-gray-100">Ctrl+K</kbd> to quickly open the search dialog from anywhere</li>
            <li>Search by operation title or description</li>
            <li>Results are grouped by operation type (queries, mutations, fragments)</li>
            <li>Click on any result to navigate directly to its documentation page</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Search;
