
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SkillCategories = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Skill Categories API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Skill Categories API allows you to manage and organize skill classifications in your system.
            It provides functionality for creating, updating, deleting, and organizing skill categories.
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
                <CardTitle>SkillCategorySelect_Query</CardTitle>
                <CardDescription>
                  Retrieves a list of skill categories with optional filtering by name. Uses the SkillCategorySelect_SkillCategoryFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query SkillCategorySelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
  Skills {
    SkillCategories(
      first: 20
      filterByName: $filterByName
      alwaysIncludeIds: $alwaysIncludeIds
    ) {
      edges {
        node {
          ...SkillCategorySelect_SkillCategoryFragment
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
                <CardTitle>skillCategoriesTable_Query</CardTitle>
                <CardDescription>
                  Fetches paginated skill categories data for tabular display. Utilizes skillCategoriesTable_QueryFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query skillCategoriesTable_Query($first: Int, $filterByName: String) {
  ...skillCategoriesTable_QueryFragment @arguments(first: $first, filterByName: $filterByName)
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mutations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create Skill Category</CardTitle>
                <CardDescription>
                  Creates a new skill category and adds it to the specified connections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation createSkillCategoryButton_CreateSkillCategoryMutation(
  $input: CreateSkillCategoryInput!
  $connections: [ID!]!
) {
  Skills {
    createSkillCategory(input: $input) {
      edge @appendEdge(connections: $connections) {
        node {
          id
          ...editSkillCategoryButton_SkillCategoryFragment
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
                <CardTitle>Delete Skill Category</CardTitle>
                <CardDescription>
                  Removes a skill category from the system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation deleteSkillCategoriesButton_DeleteSkillCategoryMutation(
  $input: DeleteSkillCategoryInput!
  $connections: [ID!]!
) {
  Skills {
    deleteSkillCategory(input: $input) {
      deletedIds @deleteEdge(connections: $connections)
    }
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Edit Skill Category</CardTitle>
                <CardDescription>
                  Updates an existing skill category's information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation editSkillCategoryButton_EditSkillCategoryMutation($input: EditSkillCategoryInput!) {
  Skills {
    editSkillCategory(input: $input) {
      edge {
        node {
          id
          ...editSkillCategoryButton_SkillCategoryFragment
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
                <CardTitle>Export Skill Categories</CardTitle>
                <CardDescription>
                  Exports all skill categories to a downloadable file.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation exportSkillCategoriesButton_ExportSkillCategoriesMutation {
  Skills {
    exportSkillCategories(input: {}) {
      file {
        url
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
                <CardTitle>Import Skill Categories</CardTitle>
                <CardDescription>
                  Imports skill categories from an external file.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation importSkillCategoriesButton_ImportSkillCategoriesMutation(
  $input: ImportSkillCategoriesInput!
) {
  Skills {
    importSkillCategories(input: $input) {
      result {
        editedEntities
        newEntities
        issues {
          row
          issue
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
                <CardTitle>Sort Order Mutations</CardTitle>
                <CardDescription>
                  Mutations for managing the sort order of skill categories.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation SkillCategorySortOrderButtons_IncreaseMutation(
  $input: IncreaseSkillCategorySortOrderInput!
) {
  Skills {
    increaseSkillCategorySortOrder(input: $input) {
      edge {
        node {
          id
          sortOrder
        }
      }
    }
  }
}

mutation SkillCategorySortOrderButtons_DecreaseMutation(
  $input: DecreaseSkillCategorySortOrderInput!
) {
  Skills {
    decreaseSkillCategorySortOrder(input: $input) {
      edge {
        node {
          id
          sortOrder
        }
      }
    }
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Fragments</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>SkillCategorySelect_SkillCategoryFragment</CardTitle>
                <CardDescription>
                  Basic fragment for skill category selection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment SkillCategorySelect_SkillCategoryFragment on SkillCategory @inline {
  id
  name
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>editSkillCategoryButton_SkillCategoryFragment</CardTitle>
                <CardDescription>
                  Fragment used for editing skill category information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment editSkillCategoryButton_SkillCategoryFragment on SkillCategory {
  id
  name
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>skillCategoriesTable_QueryFragment</CardTitle>
                <CardDescription>
                  Fragment for the skill categories table with pagination support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment skillCategoriesTable_QueryFragment on Query
@refetchable(queryName: "skillCategoriesTable_Refetch")
@argumentDefinitions(
  first: { type: "Int", defaultValue: 20 }
  after: { type: "String" }
  filterByName: { type: "String" }
) {
  Skills {
    SkillCategories(first: $first, after: $after, filterByName: $filterByName)
      @connection(key: "skillCategoriesTable_SkillCategories") {
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
          sortOrder
          ...editSkillCategoryButton_SkillCategoryFragment
          ...SkillCategorySortOrderButtons_AssignmentRoleFragment
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
                <CardTitle>SkillCategorySortOrderButtons_AssignmentRoleFragment</CardTitle>
                <CardDescription>
                  Fragment for skill category sort order functionality.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment SkillCategorySortOrderButtons_AssignmentRoleFragment on SkillCategory {
  id
  name
  sortOrder
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

export default SkillCategories;
