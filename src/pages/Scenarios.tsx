
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DocsLayout from '@/components/DocsLayout';
import OperationCard from '@/components/graphql/OperationCard';
import operationsData from '@/data/scenarioOperations.json';
const Scenarios = () => {
  

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Scenarios API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Scenarios API allows you to manage resource planning scenarios, including project assignments, staff allocations, and utilization tracking.
            Use these endpoints to create scenarios, add projects to scenarios, manage assignments, and analyze resource utilization.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> Scenario queries and mutations often reference projects and people resources. 
              See the <a href="/projects" className="underline">Projects API</a> and <a href="/people" className="underline">People API</a> for related endpoints.
            </p>
          </div>
        </section>
        
        <Tabs defaultValue="queries" className="w-full mb-8">
                  <TabsList className="mb-4">
                    <TabsTrigger value="queries">Queries</TabsTrigger>
                    <TabsTrigger value="mutations">Mutations</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="queries" className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Queries</h2>
                    <p className="mb-4">Use these queries to fetch information about assignment roles in different formats and contexts.</p>
                    
                    {operationsData.queries.map((query) => (
                      <OperationCard
                        key={query.id}
                        id={query.id}
                        title={query.title}
                        description={query.description}
                        code={query.code}
                      />
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="mutations" className="space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Mutations</h2>
                    <p className="mb-4">Use these mutations to create, update, delete, and manage assignment roles.</p>
                    
                    {operationsData.mutations.map((mutation) => (
                      <OperationCard
                        key={mutation.id}
                        id={mutation.id}
                        title={mutation.title}
                        description={mutation.description}
                        code={mutation.code}
                      />
                    ))}
                  </TabsContent>
                </Tabs>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Learn about <a href="/projects" className="text-docs-primary hover:underline">Projects API</a> for managing project resources</li>
            <li>Explore the <a href="/people" className="text-docs-primary hover:underline">People API</a> for managing person resources</li>
            <li>View related <a href="/fragments#scenarioMapViewScreen" className="text-docs-primary hover:underline">Fragments</a> for scenarios</li>
            <li>See <a href="/types" className="text-docs-primary hover:underline">Types</a> for scenario-related object types</li>
            <li>Try scenario queries in the <a href="/playground" className="text-docs-primary hover:underline">Playground</a></li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Scenarios;

