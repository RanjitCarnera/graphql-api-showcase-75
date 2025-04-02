import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeExample from '@/components/CodeExample';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Queries = () => {
  const userQueryExamples = {
    javascript: `// Fetching a specific user
const query = \`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
      }
    }
  }
\`;

const variables = {
  id: "123"
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
.then(data => console.log(data));`,
    python: `import requests

query = '''
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      id
      title
    }
  }
}
'''

variables = {
  'id': '123'
}

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

print(response.json())`,
    ruby: `require 'net/http'
require 'uri'
require 'json'

uri = URI.parse('https://api.constructionintelligence.com/graphql')
request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'application/json'
request['Authorization'] = 'Bearer YOUR_API_KEY'

query = '
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      id
      title
    }
  }
}'

variables = {
  'id' => '123'
}

request.body = JSON.generate({
  query: query,
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
	
	type Variables struct {
		ID string \`json:"id"\`
	}
	
	type RequestBody struct {
		Query     string    \`json:"query"\`
		Variables Variables \`json:"variables"\`
	}
	
	query := \`
	query GetUser($id: ID!) {
	  user(id: $id) {
		id
		name
		email
		posts {
		  id
		  title
		}
	  }
	}
	\`
	
	variables := Variables{
		ID: "123",
	}
	
	reqBody := RequestBody{
		Query:     query,
		Variables: variables,
	}
	
	requestJSON, _ := json.Marshal(reqBody)
	
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(requestJSON))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
	
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
        
        var query = @"
        query GetUser($id: ID!) {
          user(id: $id) {
            id
            name
            email
            posts {
              id
              title
            }
          }
        }";
        
        var variables = new {
            id = "123"
        };
        
        var requestBody = new {
            query = query,
            variables = variables
        };
        
        var content = new StringContent(
            JsonConvert.SerializeObject(requestBody), 
            Encoding.UTF8, 
            "application/json");
            
        client.DefaultRequestHeaders.Add("Authorization", "Bearer YOUR_API_KEY");
        
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

public class GraphQLQuery {
    public static void main(String[] args) throws Exception {
        String url = "https://api.constructionintelligence.com/graphql";
        String query = """
            query GetUser($id: ID!) {
              user(id: $id) {
                id
                name
                email
                posts {
                  id
                  title
                }
              }
            }
            """;
        
        // Create variables map
        Map<String, Object> variables = new HashMap<>();
        variables.put("id", "123");
        
        // Create request body with query and variables
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("query", query);
        requestBody.put("variables", variables);
        
        // Convert to JSON
        String jsonBody = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(requestBody);
        
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(url))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer YOUR_API_KEY")
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

my $query = '
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    posts {
      id
      title
    }
  }
}';

my $variables = {
    id => '123'
};

my $req = HTTP::Request->new(POST => 'https://api.constructionintelligence.com/graphql');
$req->header('Content-Type' => 'application/json');
$req->header('Authorization' => 'Bearer YOUR_API_KEY');
$req->content(encode_json({
    query => $query,
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
  
  const paginationExamples = {
    javascript: `// Pagination example
const query = \`
  query GetUsers($page: Int!, $limit: Int!) {
    users(page: $page, limit: $limit) {
      data {
        id
        name
        email
      }
      pagination {
        total
        pages
        currentPage
        hasNext
        hasPrevious
      }
    }
  }
\`;

const variables = {
  page: 1,
  limit: 10
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
  
  const filteringExamples = {
    javascript: `// Filtering example
const query = \`
  query SearchPosts($searchTerm: String!, $category: String, $tags: [String!]) {
    posts(filter: { 
      searchTerm: $searchTerm,
      category: $category,
      tags: $tags
    }) {
      id
      title
      summary
      category
      tags
      publishedAt
    }
  }
\`;

const variables = {
  searchTerm: "graphql",
  category: "tutorial",
  tags: ["api", "beginner"]
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

  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Queries</h1>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Available Queries</h2>
          <p className="mb-6">
            Our GraphQL API provides the following top-level queries that you can use to fetch data:
          </p>
          
          <div className="space-y-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>user(id: ID!): User</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fetch a single user by their ID.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>users(page: Int, limit: Int): UserConnection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fetch a paginated list of users.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>post(id: ID!): Post</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fetch a single post by its ID.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>posts(filter: PostFilter): [Post!]!</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fetch a filtered list of posts.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Fetching a Specific User</h2>
          <p className="mb-4">
            This example shows how to fetch a specific user by their ID, including their profile information and posts.
          </p>
          
          <CodeExample
            title="User Query"
            description="Fetch a user by ID with related posts:"
            codeExamples={userQueryExamples}
          />
          
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h4 className="font-semibold mb-2">Example Response:</h4>
            <pre className="font-code text-sm overflow-auto">
{`{
  "data": {
    "user": {
      "id": "123",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "posts": [
        {
          "id": "1",
          "title": "Introduction to GraphQL"
        },
        {
          "id": "2",
          "title": "Advanced API Design"
        }
      ]
    }
  }
}`}
            </pre>
          </div>
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Pagination</h2>
          <p className="mb-4">
            Our API supports pagination for collections of items, allowing you to request specific pages of data.
          </p>
          
          <CodeExample
            title="Paginated Users Query"
            description="Fetch users with pagination information:"
            codeExamples={paginationExamples}
          />
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Filtering</h2>
          <p className="mb-4">
            You can filter collections using filter input objects that are specific to each resource type.
          </p>
          
          <CodeExample
            title="Filtered Posts Query"
            description="Search for posts with specific criteria:"
            codeExamples={filteringExamples}
          />
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Learn about data <a href="/mutations" className="text-docs-primary hover:underline">Mutations</a></li>
            <li>Explore the available <a href="/types" className="text-docs-primary hover:underline">Types</a></li>
            <li>Try queries in the <a href="/playground" className="text-docs-primary hover:underline">Playground</a></li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Queries;
