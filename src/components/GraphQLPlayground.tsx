import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function GraphQLPlayground() {
  const [query, setQuery] = useState(`# Try running a query!
query {
  users {
    id
    name
    email
    posts {
      id
      title
    }
  }
}`);
  const [response, setResponse] = useState('# Response will appear here');
  const [variables, setVariables] = useState('{\n  \n}');
  const [headers, setHeaders] = useState('{\n  "Authorization": "Bearer YOUR_TOKEN"\n}');

  const handleRunQuery = () => {
    // In a real application, this would send the query to your GraphQL endpoint
    const mockResponse = {
      data: {
        users: [
          {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            posts: [
              { id: "101", title: "Introduction to GraphQL" },
              { id: "102", title: "API Best Practices" }
            ]
          },
          {
            id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            posts: [
              { id: "201", title: "Advanced GraphQL Techniques" }
            ]
          }
        ]
      }
    };
    
    setResponse(JSON.stringify(mockResponse, null, 2));
  };

  const handleDownloadSchema = () => {
    // In a real app, this would download the actual schema from https://api.constructionintelligence.com/graphql
    const schema = `type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]
}

type Post {
  id: ID!
  title: String!
  content: String
  author: User!
}

type Query {
  users: [User!]!
  user(id: ID!): User
  posts: [Post!]!
  post(id: ID!): Post
}

type Mutation {
  createUser(name: String!, email: String!): User!
  createPost(title: String!, content: String, authorId: ID!): Post!
}`;

    const blob = new Blob([schema], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'schema.graphql';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">GraphQL Playground</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleDownloadSchema} className="flex items-center gap-1">
            <Download size={16} />
            Schema
          </Button>
          <Button onClick={handleRunQuery} className="flex items-center gap-1 bg-docs-primary hover:bg-indigo-700">
            <Play size={16} />
            Run
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Query</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="query">
              <TabsList className="mb-2">
                <TabsTrigger value="query">Query</TabsTrigger>
                <TabsTrigger value="variables">Variables</TabsTrigger>
                <TabsTrigger value="headers">Headers</TabsTrigger>
              </TabsList>
              <TabsContent value="query">
                <textarea 
                  value={query} 
                  onChange={(e) => setQuery(e.target.value)} 
                  className="playground-editor w-full"
                />
              </TabsContent>
              <TabsContent value="variables">
                <textarea 
                  value={variables} 
                  onChange={(e) => setVariables(e.target.value)} 
                  className="playground-editor w-full"
                />
              </TabsContent>
              <TabsContent value="headers">
                <textarea 
                  value={headers} 
                  onChange={(e) => setHeaders(e.target.value)} 
                  className="playground-editor w-full"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Response</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="playground-editor w-full">{response}</pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
