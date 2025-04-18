
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Assessments = () => {
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

        <Tabs defaultValue="queries" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="queries">Queries</TabsTrigger>
            <TabsTrigger value="mutations">Mutations</TabsTrigger>
          </TabsList>

          <TabsContent value="queries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>skillAssessmentExecution_Query</CardTitle>
                <CardDescription>
                  Retrieves assessment details including person, supervisor, template information, and assessment status.
                  Uses categoryForm, navigation, and skillAssessmentExecution fragments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query skillAssessmentExecution_Query($accountId: ID!, $assessmentId: ID!, $password: String) {
  Assessment {
    MyAssessment(accountId: $accountId, assessmentId: $assessmentId, password: $password) {
      // ... assessment details with related fragments
    }
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>skillAssessmentLogin_Query</CardTitle>
                <CardDescription>
                  Retrieves account logo for the assessment login page.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query skillAssessmentLogin_Query($accountId: ID!) {
  Assessment {
    AccountLogo(accountId: $accountId) {
      url
    }
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>skillAssessments_Query</CardTitle>
                <CardDescription>
                  Fetches assessment data with pagination support and filtering capabilities.
                  Uses skillAssessmentsTable_AssessmentsFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`query skillAssessmentsTable_Query($first: Int, $after: String) {
  ...skillAssessmentsTable_AssessmentsFragment @arguments(first: $first, after: $after)
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mutations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>skillAssessmentLogin_LoginToAssessmentMutation</CardTitle>
                <CardDescription>
                  Handles authentication for accessing an assessment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation skillAssessmentLogin_LoginToAssessmentMutation($input: LoginToAssessmentInput!) {
  Assessment {
    loginToAssessment(input: $input) {
      password
    }
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>skillAssessmentExecution_SubmitAssessmentMutation</CardTitle>
                <CardDescription>
                  Submits a completed assessment.
                  Uses skillAssessmentExecution_AssessmentFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation skillAssessmentExecution_SubmitAssessmentMutation($input: SubmitAssessmentInput!) {
  Assessment {
    submitAssessment(input: $input) {
      assessment {
        id
        ...skillAssessmentExecution_AssessmentFragment
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
                <CardTitle>deleteAssessmentsButton_DeleteAssessmentMutation</CardTitle>
                <CardDescription>
                  Deletes an assessment and updates connection edges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation deleteAssessmentsButton_DeleteAssessmentMutation(
  $input: DeleteAssessmentInput!
  $connections: [ID!]!
) {
  Admin {
    Assessment {
      deleteAssessment(input: $input) {
        deletedIds @deleteEdge(connections: $connections)
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
                <CardTitle>categoryForm_AssessmentFragment</CardTitle>
                <CardDescription>
                  Fragment containing assessment template and skill assessment details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment categoryForm_AssessmentFragment on Assessment {
  skillAssessments {
    value {
      kind
      ... on BinaryAssessmentValue {
        hasSkill
        kind
      }
      ... on NumericalAssessmentValue {
        number
        kind
      }
    }
  }
  // ... more fields
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>navigation_AssessmentFragment</CardTitle>
                <CardDescription>
                  Fragment for assessment navigation data including status and skill assessments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`fragment navigation_AssessmentFragment on Assessment {
  id
  supervisor {
    name
  }
  template {
    name
  }
  // ... more fields
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

export default Assessments;
