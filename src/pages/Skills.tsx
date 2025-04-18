
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Skills API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Skills API allows you to manage and query individual skills in your system.
            It provides functionality for retrieving skills with filtering and pagination support.
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
                <CardTitle>SkillsSelect_Query</CardTitle>
                <CardDescription>
                  Retrieves a list of skills with optional filtering by skill category.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query SkillsSelect_Query($filterBySkillCategoryRef: ID) {
  Skills {
    Skills(first: 250, filterBySkillCategoryRef: $filterBySkillCategoryRef) {
      edges {
        node {
          id
          name
          dimension {
            kind
            ... on BinaryDimension {
              kind
            }
            ... on NumericalDimension {
              kind
              dimensionCount
            }
          }
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
                <CardTitle>SkillsTable_Query</CardTitle>
                <CardDescription>
                  Fetches paginated skills data with support for filtering by name and skill category.
                  Uses the SkillsTable_SkillsListFragment for data structure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query SkillsTable_Query($first: Int, $filterByName: String, $filterBySkillCategoryRef: ID) {
  ...SkillsTable_SkillsListFragment
    @arguments(
      first: $first
      filterByName: $filterByName
      filterBySkillCategoryRef: $filterBySkillCategoryRef
    )
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mutations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>No Mutations Available</CardTitle>
                <CardDescription>
                  Currently, there are no documented mutations for the Skills API.
                  Refer to the queries section for available operations.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Fragments</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>SkillsTable_SkillsListFragment</CardTitle>
                <CardDescription>
                  Fragment for paginated skills list with detailed skill information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment SkillsTable_SkillsListFragment on Query
@refetchable(queryName: "SkillsTable_Refetch")
@argumentDefinitions(
  first: { type: "Int", defaultValue: 20 }
  after: { type: "String" }
  filterByName: { type: "String" }
  filterBySkillCategoryRef: { type: "ID" }
) {
  Skills {
    Skills(
      first: $first
      after: $after
      filterByName: $filterByName
      filterBySkillCategoryRef: $filterBySkillCategoryRef
    ) @connection(key: "SkillsTable_Skills") {
      __id
      pageInfo {
        endCursor
        hasPreviousPage
        hasNextPage
        startCursor
      }
      edges {
        node {
          id
          name
          skillCategory {
            id
            name
            sortOrder
          }
          ...editSkillButton_SkillFragment
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
                <CardTitle>editSkillButton_SkillFragment</CardTitle>
                <CardDescription>
                  Fragment containing detailed skill information including dimensions and category.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment editSkillButton_SkillFragment on Skill {
  id
  name
  skillCategory {
    id
  }
  description
  dimension {
    kind
    ... on NumericalDimension {
      kind
      dimensionCount
      dimensionExplanations
    }
    ... on BinaryDimension {
      kind
    }
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Skills;
