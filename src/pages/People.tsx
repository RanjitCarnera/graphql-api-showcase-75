
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import PeopleIntroduction from '@/components/people/PeopleIntroduction';
import PeopleQuerySection from '@/components/people/PeopleQuerySection';
import RelatedResources from '@/components/people/RelatedResources';
import { 
  peopleQueryExamples, 
  personSelectExamples, 
  selectUserInAccountExamples, 
  peopleSelectExamples,
  peopleTableResponseExample,
  queryStructures
} from '@/components/people/QueryData';

const People = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <PeopleIntroduction />
        
        <PeopleQuerySection 
          id="people-table-query"
          title="PeopleTable_Query"
          description="Fetches a paginated list of people with optional name filtering. This query uses the PeopleTable_PeopleListFragment fragment."
          queryStructure={queryStructures.peopleTable}
          fragmentLink="/fragments#peopleTableList"
          codeExamples={peopleQueryExamples}
          exampleResponse={peopleTableResponseExample}
        />
        
        <PeopleQuerySection 
          id="person-select-query"
          title="PersonSelect_Query"
          description="Query for selecting people with filtering, exclusions, and always-include options. This query uses the PersonSelect_PersonFragment fragment."
          queryStructure={queryStructures.personSelect}
          fragmentLink="/fragments#personSelect"
          codeExamples={personSelectExamples}
        />
        
        <PeopleQuerySection 
          id="select-user-in-account-query"
          title="selectUserInAccountField_PeopleQuery"
          description="Queries people within a specific account context. This query uses the selectUserInAccountField_PersonFragment fragment."
          queryStructure={queryStructures.selectUserInAccount}
          fragmentLink="/fragments#selectUserInAccountField"
          codeExamples={selectUserInAccountExamples}
        />
        
        <PeopleQuerySection 
          id="people-select-query"
          title="peopleSelect_Query"
          description="General-purpose query for selecting multiple people with various filtering options. This query uses the peopleSelect_PersonFragment fragment."
          queryStructure={queryStructures.peopleSelect}
          fragmentLink="/fragments#peopleSelect"
          codeExamples={peopleSelectExamples}
        />

        <RelatedResources />
      </div>
    </DocsLayout>
  );
};

export default People;
