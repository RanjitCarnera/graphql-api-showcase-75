
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Regions = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Regions API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Regions API allows you to manage geographical regions for projects and resources.
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
                <CardTitle>RegionSelect_Query</CardTitle>
                <CardDescription>
                  Fetches regions with filtering and exclusion options. Limited to first 20 results.
                  Uses RegionSelect_RegionFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query RegionSelect_Query($filterByName: String, $excludeIds: [ID!], $alwaysIncludeIds: [ID!]) {
  Region {
    Regions(first: 20, excludeIds: $excludeIds, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
      edges {
        node {
          ...RegionSelect_RegionFragment
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
                <CardTitle>RegionsTable_Query</CardTitle>
                <CardDescription>
                  Retrieves regions for table display with pagination and filtering support.
                  Uses RegionsTable_RegionListFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query RegionsTable_Query($first: Int, $filterByName: String) {
  ...RegionsTable_RegionListFragment @arguments(first: $first, filterByName: $filterByName)
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mutations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>CreateRegion Mutation</CardTitle>
                <CardDescription>
                  Creates a new region. Uses EditRegionButton_RegionFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation EditRegionModal_CreateMutation($input: CreateRegionInput!, $connections: [ID!]!) {
  Region {
    createRegion(input: $input) {
      edge @appendEdge(connections: $connections) {
        node {
          id
          ...EditRegionButton_RegionFragment
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
                <CardTitle>DeleteRegion Mutation</CardTitle>
                <CardDescription>
                  Deletes a region and updates connection edges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation DeleteRegionsButton_DeleteMutation($input: DeleteRegionInput!, $connections: [ID!]!) {
  Region {
    deleteRegion(input: $input) {
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

export default Regions;
