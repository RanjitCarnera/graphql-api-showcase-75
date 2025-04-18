
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Divisions = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Divisions API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Divisions API allows you to manage organizational divisions and departments.
          </p>
        </section>

        <Tabs defaultValue="queries" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="queries">Queries</TabsTrigger>
            <TabsTrigger value="mutations">Mutations</TabsTrigger>
          </TabsList>

          <TabsContent value="queries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>DivisionSelect_Query</CardTitle>
                <CardDescription>
                  Fetches divisions with filtering and exclusion options. Limited to first 20 results.
                  Uses DivisionSelect_DivisionFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query DivisionSelect_Query($filterByName: String, $excludeIds: [ID!], $alwaysIncludeIds: [ID!]) {
  Division {
    Divisions(first: 20, excludeIds: $excludeIds, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
      edges {
        node {
          ...DivisionSelect_DivisionFragment
        }
      }
    }
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DivisionsTable_Query</CardTitle>
                <CardDescription>
                  Retrieves divisions for table display with pagination and filtering support.
                  Uses DivisionsTable_DivisionListFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query DivisionsTable_Query($first: Int, $filterByName: String) {
  ...DivisionsTable_DivisionListFragment
    @arguments(first: $first, filterByName: $filterByName)
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mutations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>CreateDivision Mutation</CardTitle>
                <CardDescription>
                  Creates a new division. Uses EditDivisionButton_DivisionFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation EditDivisionModal_CreateMutation($input: CreateDivisionInput!, $connections: [ID!]!) {
  Division {
    createDivision(input: $input) {
      edge @appendEdge(connections: $connections) {
        node {
          id
          ...EditDivisionButton_DivisionFragment
        }
      }
    }
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>DeleteDivision Mutation</CardTitle>
                <CardDescription>
                  Deletes a division and updates connection edges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation deleteDivisionButton_DeleteDivisionMutation($input: DeleteDivisionInput!, $connections: [ID!]!) {
  Division {
    deleteDivision(input: $input) {
      deletedIds @deleteEdge(connections: $connections)
    }
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DocsLayout>
  );
};

export default Divisions;
