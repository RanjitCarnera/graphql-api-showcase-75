
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeCard from "@/components/graphql/CodeCard";
import assessmentTemplateOperations from "@/data/assessmentTemplateOperations.json";

const AssessmentTemplates = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Assessment Templates API</h1>

        <section className="mb-8">
          <p className="mb-6">
            The Assessment Templates API allows you to manage templates for assessments, including creation, 
            modification, and querying of assessment templates with their associated roles and skills.
          </p>
        </section>

        <Tabs defaultValue="queries" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="queries">Queries</TabsTrigger>
            <TabsTrigger value="mutations">Mutations</TabsTrigger>
          </TabsList>

          <TabsContent value="queries" className="space-y-6">
            {assessmentTemplateOperations.queries.map((query) => (
              <CodeCard
                key={query.id}
                title={query.title}
                description={query.description}
                code={query.code}
              />
            ))}
          </TabsContent>

          <TabsContent value="mutations" className="space-y-6">
            {assessmentTemplateOperations.mutations.map((mutation) => (
              <CodeCard
                key={mutation.id}
                title={mutation.title}
                description={mutation.description}
                code={mutation.code}
              />
            ))}
          </TabsContent>
        </Tabs>

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Fragments</h2>
          <div className="space-y-6">
            {assessmentTemplateOperations.fragments.map((fragment) => (
              <CodeCard
                key={fragment.id}
                title={fragment.title}
                description={fragment.description}
                code={fragment.code}
              />
            ))}
          </div>
        </section>
      </div>
    </DocsLayout>
  );
};

export default AssessmentTemplates;
