
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeExample from '@/components/CodeExample';

const Mutations = () => {
  const createUserExample = {
    javascript: `// Creating a user
const mutation = \`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        name
        email
      }
      token
    }
  }
\`;

const variables = {
  input: {
    name: "John Smith",
    email: "john@example.com",
    password: "securepassword123"
  }
};

fetch('https://your-api.example/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: mutation,
    variables
  })
})
.then(res => res.json())
.then(data => console.log(data));`,
    python: `import requests

mutation = '''
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        name
        email
      }
      token
    }
  }
'''

variables = {
  'input': {
    'name': 'John Smith',
    'email': 'john@example.com',
    'password': 'securepassword123'
  }
}

response = requests.post(
    'https://your-api.example/graphql',
    json={
        'query': mutation,
        'variables': variables
    },
    headers={
        'Content-Type': 'application/json'
    }
)

print(response.json())`
  };

  const updatePostExample = {
    javascript: `// Updating a post
const mutation = \`
  mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      content
      updatedAt
    }
  }
\`;

const variables = {
  id: "123",
  input: {
    title: "Updated Post Title",
    content: "This is the updated content of the post.",
    published: true
  }
};

fetch('https://your-api.example/graphql', {
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

  const deletePostExample = {
    javascript: `// Deleting a post
const mutation = \`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      success
      message
    }
  }
\`;

const variables = {
  id: "123"
};

fetch('https://your-api.example/graphql', {
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
        <h1 className="text-3xl font-bold mb-6">Mutations</h1>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Introduction to Mutations</h2>
          <p className="mb-6">
            In GraphQL, mutations are used to modify server-side data. They allow you to create, update, and delete data. 
            Our API provides various mutations for working with users, posts, and other resources.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> All mutations that modify data require authentication. Make sure to include your API key in the Authorization header.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Creating a User</h2>
          <p className="mb-4">
            This mutation creates a new user account and returns the user data along with an authentication token.
          </p>
          
          <CodeExample
            title="Create User Mutation"
            description="Register a new user:"
            codeExamples={createUserExample}
          />
          
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h4 className="font-semibold mb-2">Example Response:</h4>
            <pre className="font-code text-sm overflow-auto">
{`{
  "data": {
    "createUser": {
      "user": {
        "id": "456",
        "name": "John Smith",
        "email": "john@example.com"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
}`}
            </pre>
          </div>
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Updating a Post</h2>
          <p className="mb-4">
            This mutation updates an existing post with new data.
          </p>
          
          <CodeExample
            title="Update Post Mutation"
            description="Update an existing post:"
            codeExamples={updatePostExample}
          />
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Deleting a Post</h2>
          <p className="mb-4">
            This mutation deletes a post by its ID.
          </p>
          
          <CodeExample
            title="Delete Post Mutation"
            description="Remove a post from the system:"
            codeExamples={deletePostExample}
          />
          
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Warning:</strong> Deletion operations are permanent and cannot be undone. Make sure you want to delete the resource before executing this mutation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Input Validation</h2>
          <p className="mb-6">
            All mutations perform validation on the input data. If validation fails, the API will return an error response with details about what went wrong.
          </p>
          
          <div className="p-4 bg-gray-100 rounded-md">
            <h4 className="font-semibold mb-2">Example Error Response:</h4>
            <pre className="font-code text-sm overflow-auto">
{`{
  "errors": [
    {
      "message": "Email is already in use",
      "locations": [{ "line": 2, "column": 3 }],
      "path": ["createUser"],
      "extensions": {
        "code": "VALIDATION_ERROR",
        "field": "email"
      }
    }
  ],
  "data": null
}`}
            </pre>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Learn about <a href="/queries" className="text-docs-primary hover:underline">Queries</a></li>
            <li>Explore the available <a href="/types" className="text-docs-primary hover:underline">Types</a></li>
            <li>Understand <a href="/auth" className="text-docs-primary hover:underline">Authentication</a></li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Mutations;
