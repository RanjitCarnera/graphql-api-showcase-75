
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
            <Card>
              <CardHeader>
                <CardTitle>selectSkillAssessmentTemplates_AssessmentTemplatesQuery</CardTitle>
                <CardDescription>
                  Retrieves a list of assessment templates for a specific account with basic template information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query selectSkillAssessmentTemplates_AssessmentTemplatesQuery($accountId: ID!) {
  Assessment {
    AssessmentTemplates(accountId: $accountId, first: 20) {
      edges {
        node {
          name
          id
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
                <CardTitle>skillAssessmentTemplatesTable_Query</CardTitle>
                <CardDescription>
                  Fetches detailed assessment templates with pagination support and filtering capabilities.
                  Uses the skillAssessmentTemplatesTable_AssessmentTemplatesFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query skillAssessmentTemplatesTable_Query($first: Int, $filterByName: String) {
  Viewer {
    Auth {
      currentAccount {
        id
      }
    }
  }
  ...skillAssessmentTemplatesTable_AssessmentTemplatesFragment
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
                <CardTitle>createTemplateButton_CreateAssessmentTemplateMutation</CardTitle>
                <CardDescription>
                  Creates a new assessment template with associated roles, skills, and distribution list.
                  Uses the skillAssessmentTemplatesTable_AssessmentTemplateFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation createTemplateButton_CreateAssessmentTemplateMutation(
  $input: CreateAssessmentTemplateInput!
  $connections: [ID!]!
) {
  Assessment {
    createAssessmentTemplate(input: $input) {
      edge @appendEdge(connections: $connections) {
        node {
          name
          associatedRoles { id }
          assessedSkills { id }
          ...skillAssessmentTemplatesTable_AssessmentTemplateFragment
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
                <CardTitle>editTemplateButton_EditAssessmentTemplateMutation</CardTitle>
                <CardDescription>
                  Modifies an existing assessment template, updating its properties and associations.
                  Uses the skillAssessmentTemplatesTable_AssessmentTemplateFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation editTemplateButton_EditAssessmentTemplateMutation(
  $input: EditAssessmentTemplateInput!
  $connections: [ID!]!
) {
  Assessment {
    editAssessmentTemplate(input: $input) {
      edge @appendEdge(connections: $connections) {
        node {
          name
          associatedRoles { id }
          assessedSkills { id }
          ...skillAssessmentTemplatesTable_AssessmentTemplateFragment
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
                <CardTitle>deleteAssessmentTemplatesButton_DeleteAssessmentTemplateMutation</CardTitle>
                <CardDescription>
                  Deletes an assessment template and updates the connection edges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation deleteAssessmentTemplatesButton_DeleteAssessmentTemplateMutation(
  $input: DeleteAssessmentTemplateInput!
  $connections: [ID!]!
) {
  Assessment {
    deleteAssessmentTemplate(input: $input) {
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

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Fragments</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>skillAssessmentTemplatesTable_AssessmentTemplateFragment</CardTitle>
                <CardDescription>
                  Fragment containing detailed assessment template information including associated roles and skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment skillAssessmentTemplatesTable_AssessmentTemplateFragment on AssessmentTemplate
@inline {
  id
  name
  associatedRoles {
    name
    id
  }
  assessedSkills {
    name
    id
  }
  distributionList {
    emails
    role
  }
  ...editTemplateButton_AssessmentTemplateFragment
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>editTemplateButton_AssessmentTemplateFragment</CardTitle>
                <CardDescription>
                  Fragment for assessment template editing, including detailed information about skills and roles.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment editTemplateButton_AssessmentTemplateFragment on AssessmentTemplate {
  name
  id
  assessedSkills {
    id
    name
    skillCategory {
      id
      name
    }
  }
  associatedRoles {
    id
    name
  }
  distributionList {
    role
    emails
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

export default AssessmentTemplates;
