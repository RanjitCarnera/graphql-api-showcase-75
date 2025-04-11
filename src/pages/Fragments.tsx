import React, { useEffect } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hash, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Fragments = () => {
  const { toast } = useToast();
  
  // Handle copying to clipboard
  const handleCopyToClipboard = (fragmentId: string, fragmentName: string) => {
    const fragmentUrl = `${window.location.origin}/fragments#${fragmentId}`;
    navigator.clipboard.writeText(fragmentUrl);
    toast({
      title: "Link copied!",
      description: `Direct link to ${fragmentName} has been copied to clipboard.`,
      duration: 2000,
    });
  };

  // Smooth scroll to the fragment if the URL has a hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">GraphQL Fragments</h1>
        
        <p className="mb-8 text-gray-600">
          Fragments are reusable units in GraphQL that let you build sets of fields, and then include them in queries where you need to. 
          Below are the fragments available in our API, each with a direct link for easy reference.
        </p>
        
        <div className="space-y-8">
          {/* editAssignmentRoleButton_AssignmentRoleFragment */}
          <section id="editAssignmentRoleButton" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>editAssignmentRoleButton_AssignmentRoleFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('editAssignmentRoleButton', 'Assignment Role Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment editAssignmentRoleButton_AssignmentRoleFragment on AssignmentRole {
  id
  name
  sortOrder
  maxNumberOfProjects
  utilizationProjectionCapInMonths
  countAsFullyAllocatedAtPercentage
  countAsOverallocatedAtPercentage
  useEndDateOfLastAssignmentOverProjectionCap
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> AssignmentRole</p>
                  <p><strong>Description:</strong> Contains fields for assignment role details including allocation percentages and utilization settings.</p>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* editSkillCategoryButton_SkillCategoryFragment */}
          <section id="editSkillCategoryButton" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>editSkillCategoryButton_SkillCategoryFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('editSkillCategoryButton', 'Skill Category Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment editSkillCategoryButton_SkillCategoryFragment on SkillCategory {
  id
  name
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> SkillCategory</p>
                  <p><strong>Description:</strong> Contains fields for skill category identification and name.</p>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* executivesSelect_PersonFragment */}
          <section id="executivesSelect" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>executivesSelect_PersonFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('executivesSelect', 'Executives Select Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment executivesSelect_PersonFragment on Person @inline {
  id
  name
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> Person</p>
                  <p><strong>Description:</strong> Contains basic person identification fields with the inline directive.</p>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Used In:</strong> This fragment is used in the <a href="/queries#executives-query-example" className="text-blue-600 hover:underline">executivesSelect_Query</a> to fetch executive persons with their basic info.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* loadPursuitProjectsFromRandDwhButton_ScenarioFragment */}
          <section id="loadPursuitProjectsFromRandDwh" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>loadPursuitProjectsFromRandDwhButton_ScenarioFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('loadPursuitProjectsFromRandDwh', 'Load Pursuit Projects Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment loadPursuitProjectsFromRandDwhButton_ScenarioFragment on Scenario {
  id
  isMasterPlan
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> Scenario</p>
                  <p><strong>Description:</strong> Contains fields to verify if a scenario is a master plan for loading pursuit projects.</p>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* personDetailsButton_ScenarioFragment */}
          <section id="personDetailsButton" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>personDetailsButton_ScenarioFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('personDetailsButton', 'Person Details Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment personDetailsButton_ScenarioFragment on Scenario {
  id
  gapDays {
    personGapDays {
      personRef
      gapDays
    }
  }
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> Scenario</p>
                  <p><strong>Description:</strong> Contains fields for person gap days within a scenario.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* PeopleTable_PeopleListFragment */}
          <section id="peopleTableList" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>PeopleTable_PeopleListFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('peopleTableList', 'People Table List Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment PeopleTable_PeopleListFragment on Query
@refetchable(queryName: "PeopleTable_Refetch")
@argumentDefinitions(
    first: { type: "Int", defaultValue: 250 }
    after: { type: "String" }
    filterByName: { type: "String" }
) {
    Staff {
        People(
            first: $first
            after: $after
            filterByName: $filterByName
            showDeactivated: true
        ) @connection(key: "PeopleTable_People") {
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
                    ...PeopleTable_PersonFragment
                }
            }
        }
    }
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> Query</p>
                  <p><strong>Description:</strong> Complex fragment for fetching paginated lists of people with filtering options.</p>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Used In:</strong> This fragment is used in the <a href="/people#people-table-query" className="text-blue-600 hover:underline">PeopleTable_Query</a> to fetch paginated lists of people.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* PersonSelect_PersonFragment */}
          <section id="personSelect" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>PersonSelect_PersonFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('personSelect', 'Person Select Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment PersonSelect_PersonFragment on Person @inline {
  id
  name
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> Person</p>
                  <p><strong>Description:</strong> Basic person fragment with inline directive for selection components.</p>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Used In:</strong> This fragment is used in the <a href="/people#person-select-query" className="text-blue-600 hover:underline">PersonSelect_Query</a> for selecting people.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* selectUserInAccountField_PersonFragment */}
          <section id="selectUserInAccountField" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>selectUserInAccountField_PersonFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('selectUserInAccountField', 'Select User In Account Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment selectUserInAccountField_PersonFragment on Person @inline {
  id
  name
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> Person</p>
                  <p><strong>Description:</strong> Person fragment for account-specific user selection.</p>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Used In:</strong> This fragment is used in the <a href="/people#select-user-in-account-query" className="text-blue-600 hover:underline">selectUserInAccountField_PeopleQuery</a> for selecting people within an account.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* peopleSelect_PersonFragment */}
          <section id="peopleSelect" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>peopleSelect_PersonFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('peopleSelect', 'People Select Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment peopleSelect_PersonFragment on Person @inline {
  id
  name
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> Person</p>
                  <p><strong>Description:</strong> Person fragment for general people selection components.</p>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Used In:</strong> This fragment is used in the <a href="/people#people-select-query" className="text-blue-600 hover:underline">peopleSelect_Query</a> for selecting multiple people.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ProjectsSelectField_ProjectFragment */}
          <section id="projectsSelectField" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>ProjectsSelectField_ProjectFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('projectsSelectField', 'Projects Select Field Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment ProjectsSelectField_ProjectFragment on Project @inline{
  id
  name
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> Project</p>
                  <p><strong>Description:</strong> Basic project selection fields with inline directive.</p>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Used In:</strong> This fragment is used in the <a href="/projects#" className="text-blue-600 hover:underline">ProjectsSelectField_Query</a> for selecting projects with filtering options.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* projectDetailsControl fragments */}
          <section id="projectDetailsControl" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>projectDetailsControl_ProjectInScenarioFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('projectDetailsControl', 'Project Details Control Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment projectDetailsControl_ProjectInScenarioFragment on ProjectInScenario {
  id
  project {
    id
    name
    startDate
    endDate
    skills {
      name
    }
    address {
      lineOne
      postalCode
      city
      country
      state
      latitude
      longitude
    }
    avatar {
      url
    }
    skillMatrixByCategories {
      ...projectDetailsControl_CategoryWithMatrixTypeInlineFragment
    }
    ...ProjectDateTimeDisplay_ProjectFragment
  }
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> ProjectInScenario</p>
                  <p><strong>Description:</strong> Detailed project information including address, skills, and matrix data.</p>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Used In:</strong> This fragment is used in the <a href="/projects#" className="text-blue-600 hover:underline">ProjectDetailsModalContent_Query</a> to fetch detailed project information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ProjectDateTimeDisplay_ProjectFragment */}
          <section id="projectDateTimeDisplay" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>ProjectDateTimeDisplay_ProjectFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('projectDateTimeDisplay', 'Project Date Time Display Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment ProjectDateTimeDisplay_ProjectFragment on Project {
  startDate
  endDate
  durationInMonths
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> Project</p>
                  <p><strong>Description:</strong> Project date and duration information.</p>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Used In:</strong> This fragment is used in the <a href="/projects#" className="text-blue-600 hover:underline">projectDetailsControl_ProjectInScenarioFragment</a> fragment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* projectDetailsControl_CategoryWithMatrixTypeInlineFragment */}
          <section id="categoryWithMatrixTypeInline" className="scroll-mt-16">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-blue-500" />
                  <span>projectDetailsControl_CategoryWithMatrixTypeInlineFragment</span>
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleCopyToClipboard('categoryWithMatrixTypeInline', 'Category With Matrix Type Fragment')}
                  className="flex items-center gap-1"
                >
                  <Copy className="h-4 w-4" />
                  Copy Link
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="code-block overflow-x-auto">
                  <code>{`fragment projectDetailsControl_CategoryWithMatrixTypeInlineFragment on CategoryWithMatrixType @inline {
  matrix {
    columns {
      key
    }
    headerRow {
      key
      entries {
        id
        name
        skillCategory {
          id
          name
        }
      }
    }
    bodyRows {
      key
      entries {
        value {
          id
          data {
            value {
              kind
              ... on BinaryAssessmentValue {
                hasSkill
                kind
              }
              ... on NumericalAssessmentValue {
                kind
                number
              }
            }
            skill {
              id
              name
              dimension {
                kind
                ... on NumericalDimension {
                  dimensionCount
                  kind
                }
                ... on BinaryDimension {
                  kind
                }
              }
            }
          }
        }
      }
    }
  }
  category {
    id
    name
  }
}`}</code>
                </pre>
                <div className="mt-4 text-sm">
                  <p><strong>Type:</strong> CategoryWithMatrixType</p>
                  <p><strong>Description:</strong> Complex matrix data structure for project skill categories.</p>
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Used In:</strong> This fragment is used in the <a href="/projects#" className="text-blue-600 hover:underline">projectDetailsControl_ProjectInScenarioFragment</a> fragment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Using Fragments</h2>
          <p className="mb-4">
            To use these fragments in your queries, include them in your GraphQL request and reference them in your query:
          </p>
          
          <pre className="code-block overflow-x-auto mb-6">
            <code>{`query GetAssignmentRole($id: ID!) {
  assignmentRole(id: $id) {
    ...editAssignmentRoleButton_AssignmentRoleFragment
  }
}

# Include the fragment definition
fragment editAssignmentRoleButton_AssignmentRoleFragment on AssignmentRole {
  id
  name
  sortOrder
  maxNumberOfProjects
  utilizationProjectionCapInMonths
  countAsFullyAllocatedAtPercentage
  countAsOverallocatedAtPercentage
  useEndDateOfLastAssignmentOverProjectionCap
}`}</code>
          </pre>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Tip:</strong> Fragments can improve query organization and help with code reuse across multiple queries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Fragments;
