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

fetch('https://api.constructionintelligence.com/graphql', {
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
    'https://api.constructionintelligence.com/graphql',
    json={
        'query': mutation,
        'variables': variables
    },
    headers={
        'Content-Type': 'application/json'
    }
)

print(response.json())`,
    ruby: `require 'net/http'
require 'uri'
require 'json'

uri = URI.parse('https://api.constructionintelligence.com/graphql')
request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'application/json'

mutation = '
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    user {
      id
      name
      email
    }
    token
  }
}'

variables = {
  'input' => {
    'name' => 'John Smith',
    'email' => 'john@example.com',
    'password' => 'securepassword123'
  }
}

request.body = JSON.generate({
  query: mutation,
  variables: variables
})

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|
  http.request(request)
end

puts JSON.parse(response.body)`,
    go: `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	url := "https://api.constructionintelligence.com/graphql"
	
	type UserInput struct {
		Name     string \`json:"name"\`
		Email    string \`json:"email"\`
		Password string \`json:"password"\`
	}
	
	type Variables struct {
		Input UserInput \`json:"input"\`
	}
	
	type RequestBody struct {
		Query     string    \`json:"query"\`
		Variables Variables \`json:"variables"\`
	}
	
	mutation := \`
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
	\`
	
	variables := Variables{
		Input: UserInput{
			Name:     "John Smith",
			Email:    "john@example.com",
			Password: "securepassword123",
		},
	}
	
	reqBody := RequestBody{
		Query:     mutation,
		Variables: variables,
	}
	
	requestJSON, _ := json.Marshal(reqBody)
	
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(requestJSON))
	req.Header.Set("Content-Type", "application/json")
	
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	
	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println(string(body))
}`,
    csharp: `using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        
        var mutation = @"
        mutation CreateUser($input: CreateUserInput!) {
          createUser(input: $input) {
            user {
              id
              name
              email
            }
            token
          }
        }";
        
        var variables = new {
            input = new {
                name = "John Smith",
                email = "john@example.com",
                password = "securepassword123"
            }
        };
        
        var requestBody = new {
            query = mutation,
            variables = variables
        };
        
        var content = new StringContent(
            JsonConvert.SerializeObject(requestBody), 
            Encoding.UTF8, 
            "application/json");
            
        var response = await client.PostAsync("https://api.constructionintelligence.com/graphql", content);
        var responseContent = await response.Content.ReadAsStringAsync();
        
        Console.WriteLine(responseContent);
    }
}`,
    java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;

public class CreateUserMutation {
    public static void main(String[] args) throws Exception {
        String url = "https://api.constructionintelligence.com/graphql";
        String mutation = """
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
            """;
        
        // Create input map
        Map<String, Object> inputMap = new HashMap<>();
        inputMap.put("name", "John Smith");
        inputMap.put("email", "john@example.com");
        inputMap.put("password", "securepassword123");
        
        // Create variables map
        Map<String, Object> variables = new HashMap<>();
        variables.put("input", inputMap);
        
        // Create request body with query and variables
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("query", mutation);
        requestBody.put("variables", variables);
        
        // Convert to JSON
        String jsonBody = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(requestBody);
        
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
            .build();
            
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    perl: `use LWP::UserAgent;
use JSON;
use Data::Dumper;

my $ua = LWP::UserAgent->new;

my $mutation = '
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    user {
      id
      name
      email
    }
    token
  }
}';

my $variables = {
    input => {
        name => 'John Smith',
        email => 'john@example.com',
        password => 'securepassword123'
    }
};

my $req = HTTP::Request->new(POST => 'https://api.constructionintelligence.com/graphql');
$req->header('Content-Type' => 'application/json');
$req->content(encode_json({
    query => $mutation,
    variables => $variables
}));

my $resp = $ua->request($req);

if ($resp->is_success) {
    my $data = decode_json($resp->decoded_content);
    print Dumper($data);
} else {
    print "HTTP POST error: ", $resp->status_line, "\n";
}`
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
