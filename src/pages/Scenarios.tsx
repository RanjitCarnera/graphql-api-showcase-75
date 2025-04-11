
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeExample from '@/components/CodeExample';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { ArrowRight, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

const Scenarios = () => {
  const { toast } = useToast();
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
      action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
    });
  };

  const scenarioMapViewExample = {
    javascript: `// Fetching scenario map view data
const query = \`
  query ScenarioMapViewScreen_Query(
    $id: ID!
    $filterByName: String
    $filterByAssignmentRoles: [ID!]
    $filterByUtilizationStatus: [UtilizationStatus!]
    $filterBySalaryMinimum: BigDecimal
    $filterBySalaryMaximum: BigDecimal
    $filterByFreeDateMinimum: LocalDate
    $filterByFreeDateMaximum: LocalDate
    $filterByAllocatedDateMinimum: LocalDate
    $filterByAllocatedDateMaximum: LocalDate
    $filterByGapDaysMinimum: Int
    $filterByGapDaysMaximum: Int
    $filterByDistanceMinimum: Int
    $filterByDistanceMaximum: Int
    $sortByClosestToProject: ID
    $utilizationWindow: UtilizationWindowInput
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
        filterBySalaryMinimum: $filterBySalaryMinimum
        filterBySalaryMaximum: $filterBySalaryMaximum
        filterByFreeDateMinimum: $filterByFreeDateMinimum
        filterByFreeDateMaximum: $filterByFreeDateMaximum
        filterByAllocatedDateMinimum: $filterByAllocatedDateMinimum
        filterByAllocatedDateMaximum: $filterByAllocatedDateMaximum
        filterByGapDaysMinimum: $filterByGapDaysMinimum
        filterByGapDaysMaximum: $filterByGapDaysMaximum
        filterByDistanceMinimum: $filterByDistanceMinimum
        filterByDistanceMaximum: $filterByDistanceMaximum
        sortByClosestToProject: $sortByClosestToProject
        utilizationWindow: $utilizationWindow
      )
    ...baseScreen_QueryFragment
    ...rosterPart_FilterFragment
  }
\`;

const variables = {
  id: "scenario-123",
  filterByName: "John",
  filterByAssignmentRoles: ["role-456"],
  utilizationWindow: {
    startDate: "2023-01-01",
    endDate: "2023-12-31"
  }
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

  const assignPersonToAssignmentExample = {
    javascript: `// Assign a person to an assignment
const mutation = \`
  mutation AssignmentCard_AssignMutation($input: FillAssignmentInput!) {
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
  }
\`;

const variables = {
  input: {
    assignmentId: "assignment-123",
    personId: "person-456",
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
    javascript: `// Create a new assignment
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
    projectId: "project-123",
    scenarioId: "scenario-456",
    startDate: "2023-01-15",
    endDate: "2023-03-15",
    validAssignmentRoleIds: ["role-789"],
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

  const editAssignmentExample = {
    javascript: `// Edit an existing assignment
const mutation = \`
  mutation EditAssignmentButton_EditMutation($input: EditAssignmentInput!) {
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
  }
\`;

const variables = {
  input: {
    id: "assignment-123",
    startDate: "2023-02-01",
    endDate: "2023-04-01",
    comment: "Updated assignment details",
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

  const deleteAssignmentExample = {
    javascript: `// Delete an assignment
const mutation = \`
  mutation DeleteAssignmentButton_DeleteMutation($input: DeleteAssignmentInput!) {
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
  }
\`;

const variables = {
  input: {
    id: "assignment-123",
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

  const emptyAssignmentExample = {
    javascript: `// Empty an assignment (remove person but keep the assignment)
const mutation = \`
  mutation EmptyAssignmentButton_EmptyMutation($input: EmptyAssignmentInput!) {
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
  }
\`;

const variables = {
  input: {
    id: "assignment-123",
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

  const addProjectsToScenarioExample = {
    javascript: `// Add existing projects to a scenario
const mutation = \`
  mutation addSelectedProjectsToScenarioButton_AddExistingProjectsToScenarioMutation(
    $input: AddExistingProjectsToScenarioInput!
  ) {
    Scenario {
      addExistingProjectsToScenario(input: $input) {
        edge {
          node {
            id
            ...ProjectsGridPart_ScenarioFragment
          }
        }
      }
    }
  }
\`;

const variables = {
  input: {
    scenarioId: "scenario-123",
    projectIds: ["project-456", "project-789"],
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
        
        <section className="mb-8">
          <p className="mb-6">
            The Scenarios API allows you to manage resource planning scenarios, including project assignments, staff allocations, and utilization tracking.
            Use these endpoints to create scenarios, add projects to scenarios, manage assignments, and analyze resource utilization.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> Scenario queries and mutations often reference projects and people resources. 
              See the <a href="/projects" className="underline">Projects API</a> and <a href="/people" className="underline">People API</a> for related endpoints.
            </p>
          </div>
        </section>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Scenario Queries</h2>
          <p className="mb-6">
            The following queries allow you to retrieve scenario data and related resources:
          </p>
          
          <div className="space-y-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Scenario Map View Query</CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(
                      `query ScenarioMapViewScreen_Query(
  $id: ID!
  $filterByName: String
  $filterByAssignmentRoles: [ID!]
  $filterByUtilizationStatus: [UtilizationStatus!]
  $utilizationWindow: UtilizationWindowInput
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
      utilizationWindow: $utilizationWindow
    )
  ...baseScreen_QueryFragment
  ...rosterPart_FilterFragment
}`
                    )}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Query</TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Comprehensive query for viewing a scenario on a map with staff roster and filters.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto max-h-60">
{`query ScenarioMapViewScreen_Query(
  $id: ID!
  $filterByName: String
  $filterByAssignmentRoles: [ID!]
  $filterByUtilizationStatus: [UtilizationStatus!]
  $filterBySalaryMinimum: BigDecimal
  $filterBySalaryMaximum: BigDecimal
  $filterByFreeDateMinimum: LocalDate
  $filterByFreeDateMaximum: LocalDate
  $filterByAllocatedDateMinimum: LocalDate
  $filterByAllocatedDateMaximum: LocalDate
  $filterByGapDaysMinimum: Int
  $filterByGapDaysMaximum: Int
  $filterByDistanceMinimum: Int
  $filterByDistanceMaximum: Int
  $sortByClosestToProject: ID
  $utilizationWindow: UtilizationWindowInput
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
      filterBySalaryMinimum: $filterBySalaryMinimum
      filterBySalaryMaximum: $filterBySalaryMaximum
      filterByFreeDateMinimum: $filterByFreeDateMinimum
      filterByFreeDateMaximum: $filterByFreeDateMaximum
      filterByAllocatedDateMinimum: $filterByAllocatedDateMinimum
      filterByAllocatedDateMaximum: $filterByAllocatedDateMaximum
      filterByGapDaysMinimum: $filterByGapDaysMinimum
      filterByGapDaysMaximum: $filterByGapDaysMaximum
      filterByDistanceMinimum: $filterByDistanceMinimum
      filterByDistanceMaximum: $filterByDistanceMaximum
      sortByClosestToProject: $sortByClosestToProject
      utilizationWindow: $utilizationWindow
    )
  ...baseScreen_QueryFragment
  ...rosterPart_FilterFragment
}`}
                </pre>
                <div className="mt-4 flex justify-end">
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
          </div>
        </section>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Scenario Mutations</h2>
          <p className="mb-6">
            The following mutations allow you to create and modify scenario resources:
          </p>
          
          <div className="space-y-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Add Projects to Scenario</CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(
                      `mutation addSelectedProjectsToScenarioButton_AddExistingProjectsToScenarioMutation(
  $input: AddExistingProjectsToScenarioInput!
) {
  Scenario {
    addExistingProjectsToScenario(input: $input) {
      edge {
        node {
          id
          ...ProjectsGridPart_ScenarioFragment
        }
      }
    }
  }
}`
                    )}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Mutation</TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Add existing projects to a scenario for resource planning.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
{`mutation addSelectedProjectsToScenarioButton_AddExistingProjectsToScenarioMutation(
  $input: AddExistingProjectsToScenarioInput!
) {
  Scenario {
    addExistingProjectsToScenario(input: $input) {
      edge {
        node {
          id
          ...ProjectsGridPart_ScenarioFragment
        }
      }
    }
  }
}`}
                </pre>
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      window.location.href = '/fragments#projectsGridPart';
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
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Create Assignment</CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(
                      `mutation CreateAssignmentButton_CreateMutation($input: CreateAssignmentInput!) {
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
}`
                    )}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Mutation</TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Create a new assignment in a project within a scenario.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
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
                </pre>
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      window.location.href = '/fragments#assignmentsInProjectList';
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
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Assign Person to Assignment</CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(
                      `mutation AssignmentCard_AssignMutation($input: FillAssignmentInput!) {
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
}`
                    )}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Mutation</TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Assign a person to an assignment in a scenario.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
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
                </pre>
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      window.location.href = '/fragments#projectCard';
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
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Edit Assignment</CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(
                      `mutation EditAssignmentButton_EditMutation($input: EditAssignmentInput!) {
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
}`
                    )}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Mutation</TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Edit an existing assignment in a scenario.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
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
                </pre>
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      window.location.href = '/fragments#editAssignmentButton';
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
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Delete Assignment</CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(
                      `mutation DeleteAssignmentButton_DeleteMutation($input: DeleteAssignmentInput!) {
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
}`
                    )}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Mutation</TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Delete an assignment from a scenario.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
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
                </pre>
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      window.location.href = '/fragments#projectCard';
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
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Empty Assignment</CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(
                      `mutation EmptyAssignmentButton_EmptyMutation($input: EmptyAssignmentInput!) {
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
}`
                    )}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Mutation</TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Remove a person from an assignment without deleting the assignment slot.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
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
                </pre>
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      window.location.href = '/fragments#projectCard';
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
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Load Pursuit Projects</CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(
                      `mutation loadPursuitProjectsFromRandDwhButton_loadPursuitProjectsFromDWHMutation(
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
}`
                    )}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Mutation</TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Load pursuit projects from RAND data warehouse for a scenario.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
{`mutation loadPursuitProjectsFromRandDwhButton_loadPursuitProjectsFromDWHMutation(
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
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Scenario Fragments</h2>
          <p className="mb-6">
            These fragments are used with scenario queries to specify which fields you want to retrieve.
          </p>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Scenario View Fragments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Top-level fragments for scenario views:</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">ScenarioMapViewScreen_ScenarioFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#scenarioMapViewScreen';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">ProjectsGridPart_ScenarioFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#projectsGridPart';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">ProjectMapPart_ScenarioFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#projectMapPart';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">DashboardHeader_ScenarioFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#dashboardHeader';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Project Card Fragments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Fragments for project cards in scenarios:</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">projectCard_ProjectFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#projectCard';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">ProjectMapPart_ProjectInScenarioFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#projectMapPartInScenario';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">AssignmentsInProjectList_ProjectFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#assignmentsInProjectList';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Assignment Fragments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Fragments for assignments in scenarios:</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">AssignmentCard_AssignmentFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#assignmentCard';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">EditAssignmentButton_AssignmentFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#editAssignmentButton';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">EmptyAssignmentButton_AssignmentFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#emptyAssignmentButton';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">DeleteAssignmentButton_AssignmentFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#deleteAssignmentButton';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Person Fragments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Fragments for person data in scenarios:</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">personCardDraggable_PersonFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#personCardDraggable';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">personCard_PersonFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#personCard';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <code className="bg-gray-100 px-1">personDetailsButton_PersonFragment</code>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        window.location.href = '/fragments#personDetailsButton';
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Code Examples</h2>
          
          <div className="mb-8">
            <CodeExample
              title="Scenario Map View"
              description="Fetch comprehensive scenario data for map visualization:"
              codeExamples={scenarioMapViewExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Assign Person to Assignment"
              description="Assign a person to an existing assignment in a scenario:"
              codeExamples={assignPersonToAssignmentExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Create Assignment"
              description="Create a new assignment in a project within a scenario:"
              codeExamples={createAssignmentExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Edit Assignment"
              description="Modify an existing assignment in a scenario:"
              codeExamples={editAssignmentExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Delete Assignment"
              description="Remove an assignment from a scenario:"
              codeExamples={deleteAssignmentExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Empty Assignment"
              description="Remove a person from an assignment without deleting the assignment:"
              codeExamples={emptyAssignmentExample}
            />
          </div>
          
          <div>
            <CodeExample
              title="Add Projects to Scenario"
              description="Add existing projects to a scenario for resource planning:"
              codeExamples={addProjectsToScenarioExample}
            />
          </div>
        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Learn about <a href="/projects" className="text-docs-primary hover:underline">Projects API</a> for managing project resources</li>
            <li>Explore the <a href="/people" className="text-docs-primary hover:underline">People API</a> for managing person resources</li>
            <li>View related <a href="/fragments#scenarioMapViewScreen" className="text-docs-primary hover:underline">Fragments</a> for scenarios</li>
            <li>See <a href="/types" className="text-docs-primary hover:underline">Types</a> for scenario-related object types</li>
            <li>Try scenario queries in the <a href="/playground" className="text-docs-primary hover:underline">Playground</a></li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Scenarios;

