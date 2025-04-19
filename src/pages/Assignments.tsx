
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const Assignments = () => {
  const { toast } = useToast();
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
  };

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Assignments API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Assignments API allows you to manage project assignments, including creating, updating, and deleting assignments,
            as well as importing and exporting assignment data.
          </p>
        </section>

        <Tabs defaultValue="mutations" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="mutations">Mutations</TabsTrigger>
          </TabsList>

          <TabsContent value="mutations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fill Assignment</CardTitle>
                <CardDescription>
                  Assigns a person to an existing assignment slot. Uses projectCard_ProjectFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation AssignmentCard_AssignMutation($input: FillAssignmentInput!) {
  Scenario {
    fillAssignment(input: $input) {
      update {
        project {
          id
          ...projectCard_ProjectFragment
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
                <CardTitle>Create Assignment</CardTitle>
                <CardDescription>
                  Creates a new assignment in a project. Uses AssignmentsInProjectList_ProjectFragment and projectCard_ProjectFragment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation CreateAssignmentButton_CreateMutation($input: CreateAssignmentInput!) {
  Scenario {
    createAssignment(input: $input) {
      edge {
        node {
          id
          ...AssignmentsInProjectList_ProjectFragment
          ...projectCard_ProjectFragment
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
                <CardTitle>Create Assignments from Template</CardTitle>
                <CardDescription>
                  Creates multiple assignments based on a staffing template.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation CreateAssignmentsFromTemplateButton_CreateMutation(
  $input: CreateAssignmentsFromTemplateInput!
) {
  Scenario {
    createAssignmentsFromTemplate(input: $input) {
      edge {
        node {
          id
          ...AssignmentsInProjectList_ProjectFragment
          ...projectCard_ProjectFragment
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
                <CardTitle>Edit Assignment</CardTitle>
                <CardDescription>
                  Modifies an existing assignment's properties.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation EditAssignmentButton_EditMutation($input: EditAssignmentInput!) {
  Scenario {
    editAssignment(input: $input) {
      update {
        project {
          id
          ...AssignmentsInProjectList_ProjectFragment
          ...projectCard_ProjectFragment
          assignments {
            edges {
              node {
                ...EditAssignmentButton_AssignmentFragment
              }
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
                <CardTitle>Delete Assignment</CardTitle>
                <CardDescription>
                  Removes an assignment from a project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation DeleteAssignmentButton_DeleteMutation($input: DeleteAssignmentInput!) {
  Scenario {
    deleteAssignment(input: $input) {
      update {
        project {
          id
          ...projectCard_ProjectFragment
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
                <CardTitle>Empty Assignment</CardTitle>
                <CardDescription>
                  Removes a person from an assignment without deleting the assignment slot.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm font-mono">
                    {`mutation EmptyAssignmentButton_EmptyMutation($input: EmptyAssignmentInput!) {
  Scenario {
    emptyAssignment(input: $input) {
      update {
        project {
          id
          ...projectCard_ProjectFragment
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
                <CardTitle>Import/Export Operations</CardTitle>
                <CardDescription>
                  Mutations for importing and exporting assignment data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {`mutation ExportAssignmentsButton_ExportMutation($input: ExportAssignmentsInput!) {
  Scenario {
    exportAssignments(input: $input) {
      file {
        url
      }
    }
  }
}`}
                    </code>
                  </pre>
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {`mutation ImportAssignmentsButton_ImportMutation($input: ImportAssignmentsInput!) {
  Scenario {
    importAssignments(input: $input) {
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
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dynamics Integration</CardTitle>
                <CardDescription>
                  Mutations for Dynamics integration operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {`mutation writeAssignmentsToDynamicsButton_WriteMutation(
  $input: WriteAssignmentsToDynamicsInput!
) {
  Dynamics {
    writeAssignmentsToDynamics(input: $input) {
      clientMutationId
    }
  }
}`}
                    </code>
                  </pre>
                  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                    <code className="text-sm font-mono">
                      {`mutation updateAssignmentsFromDynamicsButton_ImportAssignmentsFromDynamicsMutation(
  $input: ImportAssignmentsFromDynamicsInput!
) {
  DynamicsPreCon {
    importAssignmentsFromDynamics(input: $input) {
      clientMutationId
    }
  }
}`}
                    </code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Related Fragments</h2>
          <Card>
            <CardHeader>
              <CardTitle>Available Fragments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <code>projectCard_ProjectFragment</code>
                  <Button variant="ghost" size="sm" onClick={() => {
                    window.location.href = '/fragments#projectCard';
                  }}>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <code>AssignmentsInProjectList_ProjectFragment</code>
                  <Button variant="ghost" size="sm" onClick={() => {
                    window.location.href = '/fragments#assignmentsInProjectList';
                  }}>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <code>EditAssignmentButton_AssignmentFragment</code>
                  <Button variant="ghost" size="sm" onClick={() => {
                    window.location.href = '/fragments#editAssignmentButton';
                  }}>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Assignments;
