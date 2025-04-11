
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeExample from '@/components/CodeExample';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const Scenarios = () => {
  const scenarioMapViewQueryExample = {
    javascript: `// Fetching scenario map view data
const query = \`
  query ScenarioMapViewScreen_Query(
    $id: ID!
    $filterByName: String
    $filterByAssignmentRoles: [ID!]
    $filterByUtilizationStatus: [UtilizationStatus!]
  ) {
    node(id: $id) {
      ... on Scenario {
        ...ScenarioMapViewScreen_ScenarioFragment
      }
    }
    ...rosterPart_StaffFragment
      @arguments(
        filterByName: $filterByName
        scenarioRef: $id
        filterByAssignmentRoles: $filterByAssignmentRoles
        filterByUtilizationStatus: $filterByUtilizationStatus
      )
    ...baseScreen_QueryFragment
    ...rosterPart_FilterFragment
  }
\`;

const variables = {
  id: "scenario-123",
  filterByName: "John",
  filterByAssignmentRoles: ["role-456"]
};

fetch('https://api.constructionintelligence.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    query,
    variables
  })
})
.then(res => res.json())
.then(data => console.log(data));`
  };

  const loadPursuitProjectsExample = {
    javascript: `// Load pursuit projects from RAND DWH
const mutation = \`
  mutation loadPursuitProjectsFromRandDwhButton_loadPursuitProjectsFromDWHMutation(
    $input: LoadPursuitProjectsFromDWHInput!
  ) {
    Rand {
      loadPursuitProjectsFromDWH(input: $input) {
        syncResult {
          editedEntities
          issues {
            id
            issue
          }
        }
        clientMutationId
      }
    }
  }
\`;

const variables = {
  input: {
    scenarioId: "scenario-123",
    clientMutationId: "client-mutation-1"
  }
};

fetch('https://api.constructionintelligence.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    query: mutation,
    variables
  })
})
.then(res => res.json())
.then(data => console.log(data));`
  };

  const createAssignmentExample = {
    javascript: `// Create an assignment
const mutation = \`
  mutation CreateAssignmentButton_CreateMutation($input: CreateAssignmentInput!) {
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
  }
\`;

const variables = {
  input: {
    scenarioId: "scenario-123",
    projectId: "project-456",
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    personId: "person-789",
    assignmentRoleId: "role-123",
    isExecutive: false,
    clientMutationId: "client-mutation-1"
  }
};

fetch('https://api.constructionintelligence.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    query: mutation,
    variables
  })
})
.then(res => res.json())
.then(data => console.log(data));`
  };

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Scenarios API</h1>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="mb-6">
            Scenarios are central to resource planning and project management. They allow you to model different resource allocation
            strategies and analyze their impact on utilization, gap days, and budgets.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> Scenarios can be either master plans or what-if scenarios. Master plans represent the
              official resource allocation plan, while what-if scenarios allow you to explore alternative strategies.
            </p>
          </div>
        </section>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Scenario Queries</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>ScenarioMapViewScreen_Query</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This comprehensive query fetches data needed for the scenario map view, including projects, people, and assignments.
              </p>
              <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto mb-4">
{`query ScenarioMapViewScreen_Query($id: ID!, $filterByName: String) {
  node(id: $id) {
    ... on Scenario {
      ...ScenarioMapViewScreen_ScenarioFragment
    }
  }
  ...rosterPart_StaffFragment @arguments(filterByName: $filterByName, scenarioRef: $id)
  ...baseScreen_QueryFragment
  ...rosterPart_FilterFragment
}`}
              </pre>
              <div className="mt-2 flex justify-end">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.location.href = '/fragments#scenarioMapViewScreen';
                  }}
                  className="flex items-center gap-1"
                >
                  <span>View Fragment Definition</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Project-Related Scenario Queries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Several queries are available for working with projects within scenarios:
              </p>
              
              <Table className="mb-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Query/Fragment</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">ProjectsGridPart_ScenarioFragment</TableCell>
                    <TableCell>Fetch projects in a scenario with filtering options</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">DashboardHeader_ScenarioFragment</TableCell>
                    <TableCell>Get scenario statistics and metadata</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">CheckScenarioPermissions_ScenarioFragment</TableCell>
                    <TableCell>Check if a scenario is a master plan</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <div className="mt-2 flex justify-end">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.location.href = '/fragments#projectsGridPart';
                  }}
                  className="flex items-center gap-1"
                >
                  <span>View Fragment Definitions</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Scenario Mutations</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Assignment Mutations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                These mutations allow you to manage assignments within scenarios:
              </p>
              
              <Table className="mb-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Mutation</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">CreateAssignmentButton_CreateMutation</TableCell>
                    <TableCell>Create a new assignment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">EditAssignmentButton_EditMutation</TableCell>
                    <TableCell>Modify an existing assignment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">DeleteAssignmentButton_DeleteMutation</TableCell>
                    <TableCell>Delete an assignment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">EmptyAssignmentButton_EmptyMutation</TableCell>
                    <TableCell>Remove a person from an assignment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">AssignmentCard_AssignMutation</TableCell>
                    <TableCell>Fill an empty assignment with a person</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Project Management Mutations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                These mutations allow you to manage projects and import data:
              </p>
              
              <Table className="mb-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Mutation</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">addSelectedProjectsToScenarioButton_AddExistingProjectsToScenarioMutation</TableCell>
                    <TableCell>Add existing projects to a scenario</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">loadPursuitProjectsFromRandDwhButton_loadPursuitProjectsFromDWHMutation</TableCell>
                    <TableCell>Import pursuit projects from RAND DWH</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">importFromRandButton_ImportFromRandMutation</TableCell>
                    <TableCell>Import a project from RAND</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Code Examples</h2>
          
          <div className="mb-8">
            <CodeExample
              title="Fetching Scenario Map View Data"
              description="This example shows how to fetch data for the scenario map view with filtering:"
              codeExamples={scenarioMapViewQueryExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Load Pursuit Projects from RAND DWH"
              description="Import pursuit projects from RAND DWH into a scenario:"
              codeExamples={loadPursuitProjectsExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Create an Assignment"
              description="Create a new assignment within a scenario:"
              codeExamples={createAssignmentExample}
            />
          </div>
        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>View related <a href="/fragments#scenarioMapViewScreen" className="text-docs-primary hover:underline">Fragments</a> for scenarios</li>
            <li>Learn about the <a href="/projects" className="text-docs-primary hover:underline">Projects API</a></li>
            <li>Explore <a href="/people" className="text-docs-primary hover:underline">People API</a> for managing resources</li>
            <li>Try scenario queries in the <a href="/playground" className="text-docs-primary hover:underline">Playground</a></li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Scenarios;
