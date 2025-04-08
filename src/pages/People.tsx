
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function People() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>People API</CardTitle>
            <CardDescription>
              Access and manage user data through the GraphQL People API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The People API provides access to user profiles, roles, and related information.
              Use this API to retrieve user data, update profiles, and manage user associations with projects.
            </p>
            
            <h3 className="text-lg font-medium mt-4">Common Queries</h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <pre className="text-sm">
                {`query People_Query($filterByName: String, $first: Int) {
  People(first: $first, filterByName: $filterByName) {
    edges {
      node {
        id
        name
        email
        role
      }
    }
  }
}`}
              </pre>
            </div>
            
            <h3 className="text-lg font-medium mt-4">Example Usage</h3>
            <p>
              The People API can be used to retrieve user information, manage user assignments to projects,
              and handle user authentication and authorization.
            </p>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
