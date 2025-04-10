
import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CodeExample from '@/components/CodeExample';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const People = () => {
  const peopleQueryExamples = {
    javascript: `// Fetching people with pagination and filtering
const query = \`
  query PeopleTable_Query($first: Int, $filterByName: String) {
    ...PeopleTable_PeopleListFragment @arguments(first: $first, filterByName: $filterByName)
  }
\`;

const variables = {
  first: 20,
  filterByName: "John"
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
query PeopleTable_Query($first: Int, $filterByName: String) {
  ...PeopleTable_PeopleListFragment @arguments(first: $first, filterByName: $filterByName)
}
'''

variables = {
  'first': 20,
  'filterByName': 'John'
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

print(response.json())`
  };

  const personSelectExamples = {
    javascript: `// Person selection with filtering and exclusions
const query = \`
query PersonSelect_Query($filterByName: String, $excludeIds: [ID!], $alwaysIncludeIds: [ID!]) {
    Staff {
        People(
            first: 20
            excludeIds: $excludeIds
            filterByName: $filterByName
            alwaysIncludeIds: $alwaysIncludeIds
        ) {
            edges {
                node {
                    ...PersonSelect_PersonFragment
                }
            }
        }
    }
}
\`;

const variables = {
  filterByName: "Smith",
  excludeIds: ["person-123"],
  alwaysIncludeIds: ["person-456"]
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

  const selectUserInAccountExamples = {
    javascript: `// Selecting users within a specific account
const query = \`
query selectUserInAccountField_PeopleQuery(
    $accountId: ID!
    $filterByName: String
    $alwaysIncludeIds: [ID!]
    $excludeIds: [ID!]
    $first: Int
) {
    Assessment {
        PeopleInAccount(
            accountId: $accountId
            first: $first
            filterByName: $filterByName
            alwaysIncludeIds: $alwaysIncludeIds
            excludeIds: $excludeIds
        ) {
            edges {
                node {
                    ...selectUserInAccountField_PersonFragment
                }
            }
        }
    }
}
\`;

const variables = {
  accountId: "account-789",
  first: 15,
  filterByName: "Johnson",
  excludeIds: [],
  alwaysIncludeIds: []
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

  const peopleSelectExamples = {
    javascript: `// Multiple people selection with filtering
const query = \`
query peopleSelect_Query($filterByName: String, $excludeIds: [ID!], $alwaysIncludeIds: [ID!]) {
    Staff {
        People(
            first: 20
            excludeIds: $excludeIds
            filterByName: $filterByName
            alwaysIncludeIds: $alwaysIncludeIds
        ) {
            edges {
                node {
                    ...peopleSelect_PersonFragment
                }
            }
        }
    }
}
\`;

const variables = {
  filterByName: "Anderson",
  excludeIds: ["person-111", "person-222"],
  alwaysIncludeIds: ["person-333"]
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
        <h1 className="text-3xl font-bold mb-6">People API</h1>
        
        <p className="mb-8 text-gray-600">
          The People API allows you to fetch and filter person records across your organization.
          Use these endpoints to retrieve staff information, select users for assignments, and manage people in accounts.
        </p>

        <section id="people-table-query" className="docs-section mb-10 scroll-mt-16">
          <h2 className="text-2xl font-bold mb-4">PeopleTable_Query</h2>
          <p className="mb-6">
            Fetches a paginated list of people with optional name filtering. This query uses the <a href="/fragments#peopleTableList" className="text-blue-600 hover:underline">PeopleTable_PeopleListFragment</a> fragment.
          </p>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Query Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block overflow-x-auto">
                <code>{`query PeopleTable_Query($first: Int, $filterByName: String) {
  ...PeopleTable_PeopleListFragment @arguments(first: $first, filterByName: $filterByName)
}`}</code>
              </pre>
              <div className="mt-4 flex justify-end">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.location.href = '/fragments#peopleTableList';
                  }}
                  className="flex items-center gap-1"
                >
                  <span>View Fragment Definition</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <CodeExample
            title="PeopleTable Query Example"
            description="Fetch a paginated list of people with name filtering:"
            codeExamples={peopleQueryExamples}
          />
          
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h4 className="font-semibold mb-2">Example Response:</h4>
            <pre className="font-code text-sm overflow-auto">
{`{
  "data": {
    "Staff": {
      "People": {
        "__id": "client:People:0",
        "pageInfo": {
          "endCursor": "cursor-20",
          "hasPreviousPage": false,
          "hasNextPage": true,
          "startCursor": "cursor-1"
        },
        "edges": [
          {
            "node": {
              "id": "person-001",
              "name": "John Smith"
            }
          },
          {
            "node": {
              "id": "person-002",
              "name": "John Doe"
            }
          }
        ]
      }
    }
  }
}`}
            </pre>
          </div>
        </section>
        
        <section id="person-select-query" className="docs-section mb-10 scroll-mt-16">
          <h2 className="text-2xl font-bold mb-4">PersonSelect_Query</h2>
          <p className="mb-6">
            Query for selecting people with filtering, exclusions, and always-include options. This query uses the <a href="/fragments#personSelect" className="text-blue-600 hover:underline">PersonSelect_PersonFragment</a> fragment.
          </p>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Query Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block overflow-x-auto">
                <code>{`query PersonSelect_Query($filterByName: String, $excludeIds: [ID!], $alwaysIncludeIds: [ID!]) {
    Staff {
        People(
            first: 20
            excludeIds: $excludeIds
            filterByName: $filterByName
            alwaysIncludeIds: $alwaysIncludeIds
        ) {
            edges {
                node {
                    ...PersonSelect_PersonFragment
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
                    window.location.href = '/fragments#personSelect';
                  }}
                  className="flex items-center gap-1"
                >
                  <span>View Fragment Definition</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <CodeExample
            title="PersonSelect Query Example"
            description="Select people with filtering:"
            codeExamples={personSelectExamples}
          />
        </section>
        
        <section id="select-user-in-account-query" className="docs-section mb-10 scroll-mt-16">
          <h2 className="text-2xl font-bold mb-4">selectUserInAccountField_PeopleQuery</h2>
          <p className="mb-6">
            Queries people within a specific account context. This query uses the <a href="/fragments#selectUserInAccountField" className="text-blue-600 hover:underline">selectUserInAccountField_PersonFragment</a> fragment.
          </p>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Query Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block overflow-x-auto">
                <code>{`query selectUserInAccountField_PeopleQuery(
    $accountId: ID!
    $filterByName: String
    $alwaysIncludeIds: [ID!]
    $excludeIds: [ID!]
    $first: Int
) {
    Assessment {
        PeopleInAccount(
            accountId: $accountId
            first: $first
            filterByName: $filterByName
            alwaysIncludeIds: $alwaysIncludeIds
            excludeIds: $excludeIds
        ) {
            edges {
                node {
                    ...selectUserInAccountField_PersonFragment
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
                    window.location.href = '/fragments#selectUserInAccountField';
                  }}
                  className="flex items-center gap-1"
                >
                  <span>View Fragment Definition</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <CodeExample
            title="Select User In Account Query Example"
            description="Query for people within a specific account:"
            codeExamples={selectUserInAccountExamples}
          />
        </section>
        
        <section id="people-select-query" className="docs-section mb-10 scroll-mt-16">
          <h2 className="text-2xl font-bold mb-4">peopleSelect_Query</h2>
          <p className="mb-6">
            General-purpose query for selecting multiple people with various filtering options. This query uses the <a href="/fragments#peopleSelect" className="text-blue-600 hover:underline">peopleSelect_PersonFragment</a> fragment.
          </p>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Query Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="code-block overflow-x-auto">
                <code>{`query peopleSelect_Query($filterByName: String, $excludeIds: [ID!], $alwaysIncludeIds: [ID!]) {
    Staff {
        People(
            first: 20
            excludeIds: $excludeIds
            filterByName: $filterByName
            alwaysIncludeIds: $alwaysIncludeIds
        ) {
            edges {
                node {
                    ...peopleSelect_PersonFragment
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
                    window.location.href = '/fragments#peopleSelect';
                  }}
                  className="flex items-center gap-1"
                >
                  <span>View Fragment Definition</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <CodeExample
            title="People Select Query Example"
            description="Select multiple people with filtering:"
            codeExamples={peopleSelectExamples}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>View all available <a href="/fragments" className="text-blue-600 hover:underline">Fragments</a></li>
            <li>Explore the <a href="/queries" className="text-blue-600 hover:underline">Queries</a> documentation</li>
            <li>Try these queries in the <a href="/playground" className="text-blue-600 hover:underline">Playground</a></li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
};

export default People;
