import React, { useRef } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GraphQLCodeCard from "@/components/graphql/GraphQLCodeCard";
import assessmentTemplateOperations from "@/data/projectOperations.json";

// Helper: Map from fragmentId (string) to fragment index
const fragmentIdToRefKey = (fragmentId: string) =>
  fragmentId.replace(/[^a-zA-Z0-9]/g, "_");

const AssessmentTemplates = () => {
  // Prepare refs for fragment sections
  const fragmentRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  // Prepare map of fragment title to ref key for scroling
  const fragmentKeyMap: Record<string, string> = {};
  assessmentTemplateOperations.fragments.forEach((fragment, idx) => {
    const fragId =
      fragment.fragmentId ||
      fragment.title.replace(/[^a-zA-Z0-9]/g, "_");
    fragmentKeyMap[fragment.title] = fragId;
    fragmentKeyMap[fragId] = fragId; // allow lookup by both
  });

  // Scroll handler for card button
  const handleScrollToFragment = (fragmentIdArr?: string[]) => {
    if (!fragmentIdArr || fragmentIdArr.length === 0) return;
    // Only scroll to the first one
    const fragId = fragmentIdArr[0];
    const refKey = fragmentIdToRefKey(fragId);
    setTimeout(() => {
      const fragmentEl = fragmentRefs.current[refKey];
      if (fragmentEl) {
        fragmentEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Optionally, you could flash the background or use :target highlight here for clarity
      }
    }, 50);
  };

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
              <GraphQLCodeCard
                key={query.id}
                title={query.title}
                description={query.description}
                code={query.code}
                usedFragments={query.usedFragments}
                onViewFragment={
                  query.usedFragments && query.usedFragments.length > 0
                    ? () => handleScrollToFragment(query.usedFragments)
                    : null
                }
              />
            ))}
          </TabsContent>

          <TabsContent value="mutations" className="space-y-6">
            {assessmentTemplateOperations.mutations.map((mutation) => (
              <GraphQLCodeCard
                key={mutation.id}
                title={mutation.title}
                description={mutation.description}
                code={mutation.code}
                usedFragments={mutation.usedFragments}
                onViewFragment={
                  mutation.usedFragments && mutation.usedFragments.length > 0
                    ? () => handleScrollToFragment(mutation.usedFragments)
                    : null
                }
              />
            ))}
          </TabsContent>
        </Tabs>

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Fragments</h2>
          <div className="space-y-6">
            {assessmentTemplateOperations.fragments.map((fragment) => {
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
                  <GraphQLCodeCard
                    title={fragment.title}
                    description={fragment.description}
                    code={fragment.code}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </DocsLayout>
  );
};

export default AssessmentTemplates;
