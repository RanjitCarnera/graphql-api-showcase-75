
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OperationCard from '@/components/graphql/OperationCard';
import RestApiCard from '@/components/RestApiCard';
import operationsData from '@/data/asessmentsOperations.json';
import { useFragmentScroll } from '../lib/utils';

const Assessments = () => {

   const [activeTab, setActiveTab] = React.useState("queries");
    const {
      fragmentRefs,
      scrollToFragment,
      fragmentIdToRefKey
    } = useFragmentScroll();

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Assessments API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Assessments API allows you to manage skill assessments, including executing assessments,
            tracking progress, and handling assessment submissions.
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
            <p className="mb-4">Use these queries to fetch information about assessment in different formats and contexts.</p>
            
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
            <p className="mb-4">Use these mutations to create, update, delete, and manage assessment.</p>
            
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
          </TabsContent>
          
          <TabsContent value="rest-api" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">REST API</h2>
            <p className="mb-4">Use these REST API endpoints to interact with assessments programmatically.</p>
            <RestApiCard endpoint={{
              id: "list-assessments",
              title: "Get Assessments List", 
              description: "Retrieve assessments with filtering.",
              method: "POST" as const,
              url: "http://localhost:9000/api/assessments/list",
              headers: { "content-type": "application/json", "Authorization": " " },
              body: { "first": 20, "filterByName": "Skill Assessment" }
            }} />
          </TabsContent>
        </Tabs>
      

        
      </div>
    </DocsLayout>
  );
};

export default Assessments;
