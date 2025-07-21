
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OperationCard from '@/components/graphql/OperationCard';
import RestApiCard from '@/components/RestApiCard';
import operationsData from '@/data/peopleOperations.json';
import PeopleIntroduction from '@/components/people/PeopleIntroduction';
import RelatedResources from '@/components/people/RelatedResources';
import { useFragmentScroll } from '../lib/utils';

const People = () => {
    const [activeTab, setActiveTab] = React.useState("queries");
    const {
      fragmentRefs,
      scrollToFragment,
      fragmentIdToRefKey
    } = useFragmentScroll();

    const restApiEndpoints = [
      {
        id: "create-person",
        title: "Create Person",
        description: "Create a new person record.",
        method: "POST" as const,
        url: "http://localhost:9000/api/people",
        headers: {
          "content-type": "application/json",
          "Authorization": " "
        },
        body: {
          "name": "John Doe",
          "email": "john@example.com"
        }
      },
      {
        id: "list-people",
        title: "Get People List",
        description: "Retrieve a list of people with optional filtering.",
        method: "POST" as const,
        url: "http://localhost:9000/api/people/list",
        headers: {
          "content-type": "application/json",
          "Authorization": " "
        },
        body: {
          "first": 20,
          "filterByName": "John"
        }
      }
    ];

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <PeopleIntroduction />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="queries">Queries</TabsTrigger>
            <TabsTrigger value="mutations">Mutations</TabsTrigger>
            <TabsTrigger value="fragments">Fragments</TabsTrigger>
            <TabsTrigger value="rest-api">REST API</TabsTrigger>
          </TabsList>
          
          <TabsContent value="queries" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Queries</h2>
            <p className="mb-4">Use these queries to fetch information about people in different formats and contexts.</p>
            
            {operationsData.queries.map((query) => (
              <OperationCard
                key={query.id}
                id={query.id}
                title={query.title}
                description={query.description}
                code={query.code}
                usedFragments={query.usedFragments}
                onViewFragment={
                  query.usedFragments && query.usedFragments.length > 0
                    ? () => 
                      scrollToFragment(query.usedFragments, {
                      onBeforeScroll: () => setActiveTab("fragments")
                    })
                    : null
                }
              />
            ))}
          </TabsContent>
          
          <TabsContent value="mutations" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Mutations</h2>
            <p className="mb-4">Use these mutations to create, update, delete, and manage people.</p>
            
            {operationsData.mutations.map((mutation) => (
              <OperationCard
                key={mutation.id}
                id={mutation.id}
                title={mutation.title}
                description={mutation.description}
                code={mutation.code}
                usedFragments={mutation.usedFragments}
                onViewFragment={
                  mutation.usedFragments && mutation.usedFragments.length > 0
                    ? () => 
                      scrollToFragment(mutation.usedFragments, {
                      onBeforeScroll: () => setActiveTab("fragments")
                    })
                    : null
                }
              />
            ))}
          </TabsContent>
          <TabsContent value="fragments" className="space-y-6">
          {operationsData.fragments.length == 0 
           ?
              <p className="mb-4">
              There is no fragments available for this API.
            </p>
          : <>
            <h2 className="text-2xl font-bold mb-4">Fragments</h2>
              <p className="mb-4">
                These are GraphQL fragments used in Staffing Template queries and mutations.
              </p>
              {operationsData.fragments?.map((fragment) => {
                const anchorKey = fragmentIdToRefKey(
                  fragment.fragmentId || fragment.title
                );
                return (
                  <div
                    key={fragment.id}
                    ref={(el) => {
                      fragmentRefs.current[anchorKey] = el;
                    }}
                    id={anchorKey}
                  >
                  <OperationCard
                      key={fragment.id}
                      id={fragment.id}
                      title={fragment.title}
                      description={fragment.description || ""}
                      code={fragment.code}
                    />
                  </div>
              );              
            })}
            </>}
          </TabsContent>
          
          <TabsContent value="rest-api" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">REST API</h2>
            <p className="mb-4">
              Use these REST API endpoints to interact with people programmatically.
            </p>
            
            {restApiEndpoints.map((endpoint) => (
              <RestApiCard key={endpoint.id} endpoint={endpoint} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DocsLayout>
  );
};

export default People;
