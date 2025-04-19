
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

        <Tabs defaultValue="queries" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="queries">Queries</TabsTrigger>
            <TabsTrigger value="mutations">Mutations</TabsTrigger>
          </TabsList>

          <TabsContent value="queries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>StaffingTemplateSelect_Query</CardTitle>
                <CardDescription>
                  Fetches staffing templates with filtering options. Limited to first 20 results.
                  Uses StaffingTemplateSelect_StaffingTemplateFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query StaffingTemplateSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
  Template {
    StaffingTemplates(first: 20, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
      edges {
        node {
          ...StaffingTemplateSelect_StaffingTemplateFragment
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
                <CardTitle>StaffingTemplatesTable_Query</CardTitle>
                <CardDescription>
                  Retrieves staffing templates for table display with pagination and filtering support.
                  Uses StaffingTemplatesTable_StaffingTemplateListFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query StaffingTemplatesTable_Query($first: Int, $filterByName: String) {
  ...StaffingTemplatesTable_StaffingTemplateListFragment
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
                <CardTitle>CreateStaffingTemplate Mutation</CardTitle>
                <CardDescription>
                  Creates a new staffing template. Uses EditStaffingTemplateButton_StaffingTemplateFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation EditStaffingTemplateModal_CreateMutation($input: CreateStaffingTemplateInput!, $connections: [ID!]!) {
  Template {
    createStaffingTemplate(input: $input) {
      edge @appendEdge(connections: $connections) {
        node {
          id
          ...EditStaffingTemplateButton_StaffingTemplateFragment
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
                <CardTitle>EditStaffingTemplate Mutation</CardTitle>
                <CardDescription>
                  Updates an existing staffing template. Uses EditStaffingTemplateButton_StaffingTemplateFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation EditStaffingTemplateModal_EditMutation($input: EditStaffingTemplateInput!) {
  Template {
    editStaffingTemplate(input: $input) {
      edge {
        node {
          id
          ...EditStaffingTemplateButton_StaffingTemplateFragment
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
                <CardTitle>DeleteStaffingTemplate Mutation</CardTitle>
                <CardDescription>
                  Deletes a staffing template and updates connection edges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation DeleteStaffingTemplatesButton_DeleteMutation($input: DeleteStaffingTemplateInput!, $connections: [ID!]!) {
  Template {
    deleteStaffingTemplate(input: $input) {
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
                <CardTitle>Export/Import Mutations</CardTitle>
                <CardDescription>
                  Export and import staffing templates in bulk.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation ExportStaffingTemplatesButton_ExportMutation {
  Template {
    exportStaffingTemplates(input: {}) {
      file {
        url
      }
    }
  }
}

mutation ImportStaffingTemplatesButton_ImportMutation($input: ImportStaffingTemplatesInput!) {
  Template {
    importStaffingTemplates(input: $input) {
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
          </TabsContent>
        </Tabs>
      </div>
    </DocsLayout>
  );
};

export default StaffingTemplates;
