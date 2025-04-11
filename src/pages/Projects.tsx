
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeExample from '@/components/CodeExample';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projectQueriesExample = {
    javascript: `// Fetching projects
const query = \`
  query projectsSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
    Project {
      Projects(first: 100, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
        edges {
          node {
            ...projectsSelect_ProjectInlineFragment
          }
        }
      }
    }
  }

  fragment projectsSelect_ProjectInlineFragment on Project @inline {
    id
    name
  }
\`;

const variables = {
  filterByName: "Construction",
  alwaysIncludeIds: ["project-123"]
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
query projectsSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
  Project {
    Projects(first: 100, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
      edges {
        node {
          ...projectsSelect_ProjectInlineFragment
        }
      }
    }
  }
}

fragment projectsSelect_ProjectInlineFragment on Project @inline {
  id
  name
}
'''

variables = {
  'filterByName': 'Construction',
  'alwaysIncludeIds': ['project-123']
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
query projectsSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
  Project {
    Projects(first: 100, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
      edges {
        node {
          ...projectsSelect_ProjectInlineFragment
        }
      }
    }
  }
}

fragment projectsSelect_ProjectInlineFragment on Project @inline {
  id
  name
}
'

variables = {
  'filterByName' => 'Construction',
  'alwaysIncludeIds' => ['project-123']
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
		FilterByName    string   \`json:"filterByName,omitempty"\`
		AlwaysIncludeIds []string \`json:"alwaysIncludeIds,omitempty"\`
	}
	
	type RequestBody struct {
		Query     string    \`json:"query"\`
		Variables Variables \`json:"variables"\`
	}
	
	query := \`
	query projectsSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
	  Project {
		Projects(first: 100, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
		  edges {
			node {
			  ...projectsSelect_ProjectInlineFragment
			}
		  }
		}
	  }
	}
	
	fragment projectsSelect_ProjectInlineFragment on Project @inline {
	  id
	  name
	}
	\`
	
	variables := Variables{
		FilterByName:    "Construction",
		AlwaysIncludeIds: []string{"project-123"},
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
    java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class GraphQLQuery {
    public static void main(String[] args) throws Exception {
        String url = "https://api.constructionintelligence.com/graphql";
        String query = """
            query projectsSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
              Project {
                Projects(first: 100, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
                  edges {
                    node {
                      ...projectsSelect_ProjectInlineFragment
                    }
                  }
                }
              }
            }
            
            fragment projectsSelect_ProjectInlineFragment on Project @inline {
              id
              name
            }
            """;
        
        // Create variables map
        Map<String, Object> variables = new HashMap<>();
        variables.put("filterByName", "Construction");
        variables.put("alwaysIncludeIds", Arrays.asList("project-123"));
        
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
    csharp: `using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Collections.Generic;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        
        var query = @"
        query projectsSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
          Project {
            Projects(first: 100, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
              edges {
                node {
                  ...projectsSelect_ProjectInlineFragment
                }
              }
            }
          }
        }
        
        fragment projectsSelect_ProjectInlineFragment on Project @inline {
          id
          name
        }";
        
        var variables = new {
            filterByName = "Construction",
            alwaysIncludeIds = new[] { "project-123" }
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
    perl: `use LWP::UserAgent;
use JSON;
use Data::Dumper;

my $ua = LWP::UserAgent->new;

my $query = '
query projectsSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
  Project {
    Projects(first: 100, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
      edges {
        node {
          ...projectsSelect_ProjectInlineFragment
        }
      }
    }
  }
}

fragment projectsSelect_ProjectInlineFragment on Project @inline {
  id
  name
}';

my $variables = {
    filterByName => 'Construction',
    alwaysIncludeIds => ['project-123']
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

  const projectDetailsExample = {
    javascript: `// Fetching project details
const query = \`
  query ProjectDetailsModalContent_Query($projectId: ID!, $scenarioId: ID!) {
    Scenario {
      ProjectInScenario(projectId: $projectId, scenarioId: $scenarioId) {
        ...projectDetailsControl_ProjectInScenarioFragment
      }
    }
  }
\`;

const variables = {
  projectId: "project-123",
  scenarioId: "scenario-456"
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

  const projectStagesExample = {
    javascript: `// Fetching project stages
const query = \`
  query ProjectStageSelect_Query($filterByName: String, $excludeIds: [ID!], $alwaysIncludeIds: [ID!]) {
    Project {
      ProjectStages(
        first: 20, 
        excludeIds: $excludeIds, 
        filterByName: $filterByName, 
        alwaysIncludeIds: $alwaysIncludeIds
      ) {
        edges {
          node {
            ...ProjectStageSelect_ProjectStageFragment
          }
        }
      }
    }
  }
  
  fragment ProjectStageSelect_ProjectStageFragment on ProjectStage @inline {
    id
    name
  }
\`;

const variables = {
  filterByName: "Planning",
  excludeIds: ["stage-999"],
  alwaysIncludeIds: ["stage-123"]
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

  const projectStagesTableExample = {
    javascript: `// Fetching project stages with pagination and more details
const query = \`
  query ProjectStagesTable_Query($first: Int, $filterByName: String) {
    ...ProjectStagesTable_ProjectStageListFragment
      @arguments(first: $first, filterByName: $filterByName)
  }
  
  fragment ProjectStagesTable_ProjectStageListFragment on Query
  @refetchable(queryName: "ProjectStagesTable_Refetch")
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 20 }
    after: { type: "String" }
    filterByName: { type: "String" }
  ) {
    Project {
      ProjectStages(first: $first, after: $after, filterByName: $filterByName)
        @connection(key: "ProjectStagesTable_ProjectStages") {
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
            reverseProjectOrderInReports
            color
          }
        }
      }
    }
  }
\`;

const variables = {
  first: 10,
  filterByName: "Planning"
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

  const projectImportExamples = {
    javascript: `// Import projects from external systems
const query = \`
  query ProjectFromDynamicsSelect_Query {
    Dynamics {
      NotYetImportedProjectsFromDynamics {
        id
        name
        projectIdentifier
      }
    }
  }
\`;

fetch('https://api.constructionintelligence.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({ query })
})
.then(res => res.json())
.then(data => console.log(data));`
  };

  const projectFromRandExample = {
    javascript: `// Import projects from RAND system
const query = \`
  query projectFromRandSelect_Query {
    Rand {
      NotYetImportedProjectsFromRand {
        id
        name
        projectIdentifier
      }
    }
  }
\`;

fetch('https://api.constructionintelligence.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({ query })
})
.then(res => res.json())
.then(data => console.log(data));`
  };
  
  const projectsSelectFieldExample = {
    javascript: `// Select projects with filtering options
const query = \`
  query ProjectsSelectField_Query($filterByName: String, $excludeIds: [ID!], $alwaysIncludeIds: [ID!]) {
    Project {
      Projects(first: 250, excludeIds: $excludeIds, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
        edges {
          node {
            ...ProjectsSelectField_ProjectFragment
          }
        }
      }
    }
  }
\`;

const variables = {
  filterByName: "Office",
  excludeIds: ["project-888"],
  alwaysIncludeIds: ["project-123", "project-456"]
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
        <h1 className="text-3xl font-bold mb-6">Projects API</h1>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Available Project Queries</h2>
          <p className="mb-6">
            Our GraphQL API provides the following project-related queries that you can use to fetch and manage construction projects:
          </p>
          
          <div className="space-y-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Projects Query</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Fetch a paginated list of projects with optional filtering by name.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
{`query projectsSelect_Query($filterByName: String, $alwaysIncludeIds: [ID!]) {
  Project {
    Projects(first: 100, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}`}
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Project Details Query</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Get detailed information about a specific project in a scenario.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
{`query ProjectDetailsModalContent_Query($projectId: ID!, $scenarioId: ID!) {
  Scenario {
    ProjectInScenario(projectId: $projectId, scenarioId: $scenarioId) {
      ...projectDetailsControl_ProjectInScenarioFragment
    }
  }
}`}
                </pre>
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      window.location.href = '/fragments#projectDetailsControl';
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
              <CardHeader>
                <CardTitle>Projects Select Field Query</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Select projects with filtering options and exclusions.</p>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
{`query ProjectsSelectField_Query($filterByName: String, $excludeIds: [ID!], $alwaysIncludeIds: [ID!]) {
  Project {
    Projects(first: 250, excludeIds: $excludeIds, filterByName: $filterByName, alwaysIncludeIds: $alwaysIncludeIds) {
      edges {
        node {
          ...ProjectsSelectField_ProjectFragment
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
                      window.location.href = '/fragments#projectsSelectField';
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
              <CardHeader>
                <CardTitle>Project Stages Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Multiple queries available for fetching project stages with different filtering options.</p>
                
                <Table className="mb-4">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Query Name</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono">ProjectStageSelect_Query</TableCell>
                      <TableCell>Basic query for fetching project stages with filtering</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">ProjectStagesSelect_Query</TableCell>
                      <TableCell>Similar to ProjectStageSelect_Query but using a different fragment</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono">ProjectStagesTable_Query</TableCell>
                      <TableCell>Comprehensive query for fetching project stages with refetchable pagination and additional fields</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
{`query ProjectStagesTable_Query($first: Int, $filterByName: String) {
  ...ProjectStagesTable_ProjectStageListFragment
    @arguments(first: $first, filterByName: $filterByName)
}`}
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Import Projects Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Fetch projects from external systems that haven't been imported yet.</p>
                
                <h4 className="text-lg font-semibold mb-2">Dynamics Import</h4>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto mb-4">
{`query ProjectFromDynamicsSelect_Query {
  Dynamics {
    NotYetImportedProjectsFromDynamics {
      id
      name
      projectIdentifier
    }
  }
}`}
                </pre>
                
                <h4 className="text-lg font-semibold mb-2">RAND Import</h4>
                <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
{`query projectFromRandSelect_Query {
  Rand {
    NotYetImportedProjectsFromRand {
      id
      name
      projectIdentifier
    }
  }
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Fragments</h2>
          <p className="mb-6">
            These fragments are used with the project queries to specify which fields you want to retrieve.
          </p>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Project Detail Fragments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">The following fragments provide detailed project information:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li><code className="bg-gray-100 px-1">projectDetailsControl_ProjectInScenarioFragment</code> - Detailed project information</li>
                <li><code className="bg-gray-100 px-1">ProjectDateTimeDisplay_ProjectFragment</code> - Project date and duration information</li>
                <li><code className="bg-gray-100 px-1">ProjectsSelectField_ProjectFragment</code> - Basic project selection information</li>
              </ul>
              <div className="mt-2">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.location.href = '/fragments#projectDetailsControl';
                  }}
                  className="flex items-center gap-1"
                >
                  <span>View Fragment Definitions</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Project Stage Fragments</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
{`fragment ProjectStageSelect_ProjectStageFragment on ProjectStage @inline {
  id
  name
}`}
              </pre>
            </CardContent>
          </Card>
        </section>
        
        <section className="docs-section">
          <h2 className="text-2xl font-bold mb-4">Code Examples</h2>
          
          <div className="mb-8">
            <CodeExample
              title="Fetching Projects"
              description="This example shows how to fetch a list of projects with optional filtering:"
              codeExamples={projectQueriesExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Project Details"
              description="Get comprehensive information about a specific project:"
              codeExamples={projectDetailsExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Select Projects with Filtering"
              description="Select projects with various filtering options:"
              codeExamples={projectsSelectFieldExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Basic Project Stages"
              description="Fetch project stages with basic filtering options:"
              codeExamples={projectStagesExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Project Stages Table Data"
              description="Fetch comprehensive project stage data with pagination support:"
              codeExamples={projectStagesTableExample}
            />
          </div>
          
          <div className="mb-8">
            <CodeExample
              title="Importing Projects from Dynamics"
              description="Get a list of projects from Dynamics that can be imported:"
              codeExamples={projectImportExamples}
            />
          </div>
          
          <div>
            <CodeExample
              title="Importing Projects from RAND"
              description="Get a list of projects from RAND system that can be imported:"
              codeExamples={projectFromRandExample}
            />
          </div>
        </section>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Learn about <a href="/mutations" className="text-docs-primary hover:underline">Mutations</a> for creating and updating projects</li>
            <li>Explore the available project <a href="/types" className="text-docs-primary hover:underline">Types</a></li>
            <li>View related <a href="/fragments#projectDetailsControl" className="text-docs-primary hover:underline">Fragments</a> for projects</li>
            <li>Try project queries in the <a href="/playground" className="text-docs-primary hover:underline">Playground</a></li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Projects;
