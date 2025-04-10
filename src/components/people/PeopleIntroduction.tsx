
import React from 'react';

const PeopleIntroduction: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">People API</h1>
      
      <p className="mb-8 text-gray-600">
        The People API allows you to fetch and filter person records across your organization.
        Use these endpoints to retrieve staff information, select users for assignments, and manage people in accounts.
      </p>
    </>
  );
};

export default PeopleIntroduction;
