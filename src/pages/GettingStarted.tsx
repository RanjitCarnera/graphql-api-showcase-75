
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeExample from '@/components/CodeExample';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GettingStarted = () => {
  const authExamples = {
    javascript: `// Using fetch with authorization header
fetch('https://api.constructionintelligence.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    query: \`
      query {
        me {
          id
          name
        }
      }
    \`
  })
})
.then(res => res.json())
.then(data => console.log(data));`,
    python: `import requests

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
}

query = '''
query {
  me {
    id
    name
  }
}
'''

response = requests.post(
    'https://api.constructionintelligence.com/graphql',
    json={'query': query},
    headers=headers
)

print(response.json())`,
    php: `<?php
$headers = [
    'Content-Type: application/json',
    'Authorization: Bearer YOUR_API_KEY'
];

$query = '
query {
  me {
    id
    name
  }
}';

$data = ['query' => $query];

$curl = curl_init('https://api.constructionintelligence.com/graphql');
curl_setopt_array($curl, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($data)
]);

$response = curl_exec($curl);
curl_close($curl);

$result = json_decode($response, true);
print_r($result);`,
    perl: `use LWP::UserAgent;
use JSON;
use Data::Dumper;

my $ua = LWP::UserAgent->new;

my $query = '
query {
  me {
    id
    name
  }
}';

my $req = HTTP::Request->new(POST => 'https://api.constructionintelligence.com/graphql');
$req->header('Content-Type' => 'application/json');
$req->header('Authorization' => 'Bearer YOUR_API_KEY');
$req->content(encode_json({query => $query}));

my $resp = $ua->request($req);

if ($resp->is_success) {
    my $data = decode_json($resp->decoded_content);
    print Dumper($data);
} else {
    print "HTTP POST error: ", $resp->status_line, "\n";
}`
  };

  const variableExamples = {
    javascript: `// Using variables in GraphQL queries
const variables = {
  id: "123",
  limit: 10
};

fetch('https://api.constructionintelligence.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    query: \`
      query GetUserPosts($id: ID!, $limit: Int) {
        user(id: $id) {
          posts(limit: $limit) {
            id
            title
          }
        }
      }
    \`,
    variables: variables
  })
})
.then(res => res.json())
.then(data => console.log(data));`,
    python: `import requests

variables = {
    'id': '123',
    'limit': 10
}

query = '''
query GetUserPosts($id: ID!, $limit: Int) {
  user(id: $id) {
    posts(limit: $limit) {
      id
      title
    }
  }
}
'''

response = requests.post(
    'https://api.constructionintelligence.com/graphql',
    json={
        'query': query,
        'variables': variables
    },
    headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    }
)

print(response.json())`
  };

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Getting Started</h1>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="mb-4">
            This guide will walk you through the basics of using our GraphQL API. You'll learn how to make requests,
            authenticate, handle errors, and structure your queries efficiently.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoint</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">All GraphQL requests are sent to a single endpoint:</p>
                <code className="block bg-gray-100 p-3 rounded-md font-code">
                  https://api.constructionintelligence.com/graphql
                </code>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>HTTP Method</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Use POST requests with a JSON payload containing your GraphQL query in the request body.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Authentication</h2>
          <p className="mb-4">
            To authenticate with our API, you need to include an Authorization header with a valid API key.
            You can obtain an API key from your account dashboard.
          </p>
          
          <CodeExample
            title="Authentication Example"
            description="Here's how to make authenticated requests to our API:"
            codeExamples={authExamples}
          />
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Using Variables</h2>
          <p className="mb-4">
            GraphQL allows you to parameterize your queries with variables. This is useful for reusing queries
            and avoiding string concatenation, which can lead to security issues.
          </p>
          
          <CodeExample
            title="Using Variables in Queries"
            description="Here's how to use variables in your GraphQL queries:"
            codeExamples={variableExamples}
          />
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Error Handling</h2>
          <p className="mb-4">
            Our API returns errors in a standardized format. Each error includes a message, locations, and path
            to help you identify and fix the issue.
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle>Error Response Example</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-3 rounded-md font-code text-sm overflow-auto">
{`{
  "errors": [
    {
      "message": "Cannot query field 'emails' on type 'User'. Did you mean 'email'?",
      "locations": [{ "line": 4, "column": 5 }],
      "path": ["query", "user", "emails"]
    }
  ],
  "data": null
}`}
              </pre>
            </CardContent>
          </Card>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <p className="mb-4">
            Now that you understand the basics of using our GraphQL API, you can:
          </p>
          
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Explore our API using the <a href="/playground" className="text-docs-primary hover:underline">Interactive Playground</a></li>
            <li>Learn about available <a href="/queries" className="text-docs-primary hover:underline">Queries</a> and <a href="/mutations" className="text-docs-primary hover:underline">Mutations</a></li>
            <li>Check out our <a href="/examples" className="text-docs-primary hover:underline">Code Examples</a> for common use cases</li>
            <li>Understand our <a href="/types" className="text-docs-primary hover:underline">Type System</a> for better integration</li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default GettingStarted;
