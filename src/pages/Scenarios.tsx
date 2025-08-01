
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DocsLayout from '@/components/DocsLayout';
import OperationCard from '@/components/graphql/OperationCard';
import RestApiCard from '@/components/RestApiCard';
import { useFragmentScroll } from '../lib/utils';
import operationsData from '@/data/scenarioOperations.json';

const Scenarios = () => {
  const [activeTab, setActiveTab] = React.useState("queries");
  
  const restApiEndpoints = [
    {
      id: "create-scenario",
      title: "Create Scenario",
      description: "Create a new scenario with the specified configuration.",
      method: "POST" as const,
      url: "http://localhost:9000/api/scenarios",
      headers: {
        "content-type": "application/json",
        "Authorization": " "
      },
      body: {
        "name": "Demo rest apis",
        "projectsRef": [],
        "isMasterPlan": false
      }
    },
    {
      id: "list-scenarios",
      title: "Get all Scenarios list",
      description: "Retrieve a list of scenarios with optional filtering.",
      method: "POST" as const,
      url: "http://localhost:9000/api/scenarios/list",
      headers: {
        "content-type": "application/json",
        "Authorization": " "
      },
      body: {
        "first": 20,
        "filterByName": "Test with sumi12"
      }
    }
  ];
  const {
    fragmentRefs,
    scrollToFragment,
    fragmentIdToRefKey
  } = useFragmentScroll();

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Scenarios API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Scenarios API allows you to manage resource planning scenarios, including project assignments, staff allocations, and utilization tracking.
            Use these endpoints to create scenarios, add projects to scenarios, manage assignments, and analyze resource utilization.
          </p>
        </section>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="queries">Queries</TabsTrigger>
            <TabsTrigger value="mutations">Mutations</TabsTrigger>
            <TabsTrigger value="fragments">Fragments</TabsTrigger>
            <TabsTrigger value="rest-api">REST API</TabsTrigger>
          </TabsList>
                  
                  <TabsContent value="queries" className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Queries</h2>
                    <p className="mb-4">Use these queries to fetch information about scenarios in different formats and contexts.</p>
                    
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
                    <p className="mb-4">Use these mutations to create, update, delete, and manage scenarios.</p>
                    
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
              Use these REST API endpoints to interact with scenarios programmatically.
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

export default Scenarios;

