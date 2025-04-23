
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OperationCard from '@/components/graphql/OperationCard';
import operationsData from '@/data/staffingTemplateOperations.json';

const StaffingTemplates = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Staffing Templates API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Staffing Templates API allows you to manage templates for project staffing models.
          </p>
        </section>
        <Tabs defaultValue="queries" className="w-full mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="queries">Queries</TabsTrigger>
            <TabsTrigger value="mutations">Mutations</TabsTrigger>
            <TabsTrigger value="fragments">Fragments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="queries" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Queries</h2>
            <p className="mb-4">Use these queries to fetch information about staffing templates in different formats and contexts.</p>
            
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
            <p className="mb-4">Use these mutations to create, update, delete, and manage staffing templates.</p>
            
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

          <TabsContent value="fragments" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Fragments</h2>
            <p className="mb-4">
              These are GraphQL fragments used in Staffing Template queries and mutations.
            </p>
            {operationsData.fragments?.map((fragment) => (
              <OperationCard
                key={fragment.id}
                id={fragment.id}
                title={fragment.title}
                description={fragment.description || ""}
                code={fragment.code}
              />
            ))}
          </TabsContent>
        </Tabs>
        
      </div>
    </DocsLayout>
  );
};

export default StaffingTemplates;

