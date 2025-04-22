import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OperationCard from '@/components/graphql/OperationCard';
import operationsData from '@/data/projectOperations.json';

const Projects = () => {


  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projects API</h1>
        
        <section className="docs-section mb-8">
          <p className="mb-6">
            Our GraphQL API provides the following project-related queries that you can use to fetch and manage construction projects:
          </p> 
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
            <li>Learn about <a href="/mutations" className="text-docs-primary hover:underline">Mutations</a> for creating and updating projects</li>
            <li>Explore the available project <a href="/types" className="text-docs-primary hover:underline">Types</a></li>
            <li>View related <a href="/fragments#projectDetailsControl" className="text-docs-primary hover:underline">Fragments</a> for projects</li>
            <li>Learn about <a href="/scenarios" className="text-docs-primary hover:underline">Scenarios</a> for resource planning</li>
            <li>Try project queries in the <a href="/playground" className="text-docs-primary hover:underline">Playground</a></li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Projects;
