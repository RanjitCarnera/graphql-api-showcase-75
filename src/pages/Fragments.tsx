import React, { useEffect } from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hash, Copy, ArrowRight } from 'lucide-react';
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
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Using Fragments in Queries</h2>
          <p className="mb-4">
            Here's an example of using a fragment in a query. The query references the <a href="#executivesSelect" className="text-blue-600 hover:underline">executivesSelect_PersonFragment</a> instead of duplicating the fields:
          </p>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>executivesSelect_Query Example</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block overflow-x-auto">
                <code>{`query executivesSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!], $scenarioId: ID) {
  Staff {
    Executives(
      first: 20
      filterByName: $filterByName
      alwaysIncludeIds: $alwaysIncludeIds
      scenarioId: $scenarioId
    ) {
      edges {
        node {
          ...executivesSelect_PersonFragment
        }
      }
    }
  }
}`}</code>
              </pre>
              <div className="mt-4 flex justify-end">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    document.getElementById('executivesSelect')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1"
                >
                  <span>View Fragment Definition</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
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
                    <strong>Used In:</strong> This fragment is used in the <code>executivesSelect_Query</code> to fetch executive persons with their basic info.
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
