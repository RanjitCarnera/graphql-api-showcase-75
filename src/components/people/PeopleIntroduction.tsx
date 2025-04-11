
import React from 'react';

const PeopleIntroduction: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">People API</h1>
      
      <p className="mb-4 text-gray-600">
        The People API allows you to fetch and filter person records across your organization.
        Use these endpoints to retrieve staff information, select users for assignments, and manage people in accounts.
      </p>
      
      <p className="mb-8 text-gray-600">
        These queries support filtering by name, pagination, and explicit inclusion/exclusion of specific people by ID.
        Each query uses reusable fragments that define the fields returned for each person.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> Many of these queries allow filtering and pagination. See the examples below for usage patterns.
        </p>
      </div>
    </>
  );
};

export default PeopleIntroduction;
