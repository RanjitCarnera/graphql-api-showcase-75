
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AssignmentRoles = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Assignment Roles API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Assignment Roles API allows you to manage role definitions for project assignments. 
            These roles define how individuals are assigned to projects and their allocation parameters.
          </p>
        </section>
        
        <Tabs defaultValue="queries" className="w-full mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="queries">Queries</TabsTrigger>
            <TabsTrigger value="mutations">Mutations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="queries" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Queries</h2>
            <p className="mb-4">Use these queries to fetch information about assignment roles in different formats and contexts.</p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>AssignmentRoleSelect_Query</CardTitle>
                <CardDescription>Fetches a list of assignment roles with basic information for selection purposes.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`query AssignmentRoleSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
    Assignments {
        AssignmentRoles(
            first: 100
            filterByName: $filterByName
            alwaysIncludeIds: $alwaysIncludeIds
        ) {
            edges {
                node {
                    ...AssignmentRoleSelect_AssignmentRoleFragment
                }
            }
        }
    }
}

fragment AssignmentRoleSelect_AssignmentRoleFragment on AssignmentRole @inline {
    id
    name
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>AssignmentRolesSelect_Query</CardTitle>
                <CardDescription>Retrieves multiple assignment roles for selection components.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`query AssignmentRolesSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
    Assignments {
        AssignmentRoles(
            first: 100
            filterByName: $filterByName
            alwaysIncludeIds: $alwaysIncludeIds
        ) {
            edges {
                node {
                    ...AssignmentRolesSelect_AssignmentRoleFragment
                }
            }
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>assignmentRolesTable_Query</CardTitle>
                <CardDescription>Fetches detailed assignment role data for tabular display with pagination support.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`query assignmentRolesTable_Query($first: Int, $filterByName: String) {
    ...assignmentRolesTable_AssignmentRolesQueryFragment
        @arguments(first: $first, filterByName: $filterByName)
}

fragment assignmentRolesTable_AssignmentRolesQueryFragment on Query
@refetchable(queryName: "assignmentRolesTable_Refetch")
@argumentDefinitions(
    first: { type: "Int", defaultValue: 20 }
    after: { type: "String" }
    filterByName: { type: "String" }
) {
    Assignments {
        AssignmentRoles(first: $first, after: $after, filterByName: $filterByName)
            @connection(key: "assignmentRolesTable_AssignmentRoles") {
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
                    maxNumberOfProjects
                    utilizationProjectionCapInMonths
                    countAsFullyAllocatedAtPercentage
                    countAsOverallocatedAtPercentage
                    ...editAssignmentRoleButton_AssignmentRoleFragment
                    ...AssignmentRoleSortOrderButtons_AssignmentRoleFragment
                }
            }
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Related Fragments</CardTitle>
                <CardDescription>Fragments used by the queries above.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`fragment editAssignmentRoleButton_AssignmentRoleFragment on AssignmentRole {
    id
    name
    sortOrder
    maxNumberOfProjects
    utilizationProjectionCapInMonths
    countAsFullyAllocatedAtPercentage
    countAsOverallocatedAtPercentage
    useEndDateOfLastAssignmentOverProjectionCap
}

fragment AssignmentRoleSortOrderButtons_AssignmentRoleFragment on AssignmentRole {
    id
    sortOrder
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mutations" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Mutations</h2>
            <p className="mb-4">Use these mutations to create, update, delete, and manage assignment roles.</p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Create Assignment Role</CardTitle>
                <CardDescription>Creates a new assignment role in the system.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`mutation createAssignmentRoleButton_CreateAssignmentRoleMutation(
    $input: CreateAssignmentRoleInput!
    $connectionId: ID!
) {
    Assignment {
        createAssignmentRole(input: $input) {
            edge @appendEdge(connections: [$connectionId]) {
                node {
                    id
                    ...editAssignmentRoleButton_AssignmentRoleFragment
                }
            }
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Delete Assignment Role</CardTitle>
                <CardDescription>Removes an assignment role from the system.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`mutation deleteAssignmentRolesButton_DeleteAssignmentRoleMutation(
    $input: DeleteAssignmentRoleInput!
    $connections: [ID!]!
) {
    Assignment {
        deleteAssignmentRole(input: $input) {
            deletedIds @deleteEdge(connections: $connections)
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Edit Assignment Role</CardTitle>
                <CardDescription>Updates an existing assignment role's properties.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`mutation editAssignmentRoleButton_EditAssignmentRoleMutation($input: EditAssignmentRoleInput!) {
    Assignment {
        editAssignmentRole(input: $input) {
            edge {
                node {
                    id
                    ...editAssignmentRoleButton_AssignmentRoleFragment
                }
            }
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Export Assignment Roles</CardTitle>
                <CardDescription>Exports assignment roles data to a downloadable file.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`mutation exportAssignmentRolesButton_ExportAssignmentRolesMutation {
    Assignment {
        exportAssignmentRoles(input: {}) {
            file {
                url
            }
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Import Assignment Roles</CardTitle>
                <CardDescription>Imports assignment roles from an external file.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`mutation importAssignmentRolesButton_ImportAssignmentRolesMutation(
    $input: ImportAssignmentRolesInput!
) {
    Assignment {
        importAssignmentRoles(input: $input) {
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
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Sort Order Management</CardTitle>
                <CardDescription>Mutations for reordering assignment roles.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`mutation AssignmentRoleSortOrderButtons_IncreaseMutation($input: IncreaseAssignmentRoleSortOrderInput!) {
    Assignment {
        increaseAssignmentRoleSortOrder(input: $input) {
            edge {
                node {
                    id
                    sortOrder
                }
            }
        }
    }
}

mutation AssignmentRoleSortOrderButtons_DecreaseMutation($input: DecreaseAssignmentRoleSortOrderInput!) {
    Assignment {
        decreaseAssignmentRoleSortOrder(input: $input) {
            edge {
                node {
                    id
                    sortOrder
                }
            }
        }
    }
}

mutation assignmentRolesTable_SetAssignmentRoleSortOrderMutation(
    $input: SetAssignmentRoleSortOrdersInput!
) {
    Assignment {
        setAssignmentRoleSortOrders(input: $input) {
            edges {
                node {
                    ...editAssignmentRoleButton_AssignmentRoleFragment
                }
            }
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Dynamics Integration</CardTitle>
                <CardDescription>Mutations for integrating with Dynamics systems.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`mutation writeAssignmentsToDynamicsButton_WriteMutation(
    $input: WriteAssignmentsToDynamicsInput!
) {
    Dynamics {
        writeAssignmentsToDynamics(input: $input) {
            clientMutationId
        }
    }
}

mutation updateAssignmentsFromDynamicsButton_ImportAssignmentsFromDynamicsMutation(
    $input: ImportAssignmentsFromDynamicsInput!
) {
    DynamicsPreCon {
        importAssignmentsFromDynamics(input: $input) {
            clientMutationId
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Skill Association Management</CardTitle>
                <CardDescription>Mutations for managing skills associated with assignment roles.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`mutation editPersonSkillAssociationsModalContent_DisassociateSkillsByCategoryMutation(
    $input: DisassociateSkillsByCategoryInput!
    $connections: [ID!]!
) {
    Skills {
        disassociateSkillsByCategory(input: $input) {
            edge @appendEdge(connections: $connections) {
                node {
                    id
                    name
                    assignmentRole {
                        name
                    }
                    skills(first: 100) @connection(key: "Person_skills") {
                        edges {
                            node {
                                id
                                data {
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
                                    skill {
                                        name
                                        dimension {
                                            kind
                                            ... on BinaryDimension {
                                                kind
                                            }
                                            ... on NumericalDimension {
                                                kind
                                                dimensionExplanations
                                                dimensionCount
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ...EditPersonButton_PersonFragment
                    ...editPersonSkillAssociationsButton_PersonFragment
                }
            }
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Template Management</CardTitle>
                <CardDescription>Mutations for managing assessment templates associated with roles.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`mutation createTemplateButton_CreateAssessmentTemplateMutation(
    $input: CreateAssessmentTemplateInput!
    $connections: [ID!]!
) {
    Assessment {
        createAssessmentTemplate(input: $input) {
            edge @appendEdge(connections: $connections) {
                node {
                    name
                    associatedRoles {
                        id
                    }
                    assessedSkills {
                        id
                    }
                    ...skillAssessmentTemplatesTable_AssessmentTemplateFragment
                }
            }
        }
    }
}

mutation editTemplateButton_EditAssessmentTemplateMutation(
    $input: EditAssessmentTemplateInput!
    $connections: [ID!]!
) {
    Assessment {
        editAssessmentTemplate(input: $input) {
            edge @appendEdge(connections: $connections) {
                node {
                    name
                    associatedRoles {
                        id
                    }
                    assessedSkills {
                        id
                    }
                    ...skillAssessmentTemplatesTable_AssessmentTemplateFragment
                }
            }
        }
    }
}`}</code>
                </pre>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Related Fragments</CardTitle>
                <CardDescription>Fragments used by the mutations above.</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-code text-sm p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto text-left">
                  <code>{`fragment EditPersonButton_PersonFragment on Person {
    ...EditPersonModal_PersonFragment
}

fragment EditPersonModal_PersonFragment on Person {
    id
    name
    email
    phone
    salary
    laborBurdenMultiplier
    startDate
    assignmentRole {
        id
        name
    }
    associatedWithDivisions {
        id
        name
    }
    associatedWithRegions {
        id
        name
    }
    address {
        lineOne
        postalCode
        city
        state
        country
        longitude
        latitude
    }
    comment
    avatar {
        id
        url
    }
}

fragment editPersonSkillAssociationsButton_PersonFragment on Person {
    name
    ...editPersonSkillAssociationsModalContent_PersonFragment
}

fragment editPersonSkillAssociationsModalContent_PersonFragment on Person {
    id
    name
    skills(first: 100) @connection(key: "Person_skills") {
        __id
        edges {
            node {
                id
                data {
                    value {
                        ... on NumericalAssessmentValue {
                            kind
                            number
                        }
                        ... on BinaryAssessmentValue {
                            hasSkill
                            kind
                        }
                    }
                    skill {
                        id
                        name
                        dimension {
                            ... on NumericalDimension {
                                kind
                                dimensionCount
                                dimensionExplanations
                            }
                            ... on BinaryDimension {
                                kind
                            }
                        }
                    }
                }
                ...editSkillAssociationModal_SkillAssociationFragment
            }
        }
    }
    ...editSkillAssociationModal_PersonFragment
}

fragment skillAssessmentTemplatesTable_AssessmentTemplateFragment on AssessmentTemplate
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
}

fragment editTemplateButton_AssessmentTemplateFragment on AssessmentTemplate {
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
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DocsLayout>
  );
};

export default AssignmentRoles;
