
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CodeExample from '@/components/CodeExample';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PeopleQuerySectionProps {
  id: string;
  title: string;
  description: string;
  queryStructure: string;
  fragmentLink: string;
  codeExamples: {
    [key: string]: string;
  };
  exampleResponse?: string;
}

const PeopleQuerySection: React.FC<PeopleQuerySectionProps> = ({
  id,
  title,
  description,
  queryStructure,
  fragmentLink,
  codeExamples,
  exampleResponse
}) => {
  return (
    <section id={id} className="docs-section mb-10 scroll-mt-16">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-6">
        {description}
      </p>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>Query Structure</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="code-block overflow-x-auto">
            <code>{queryStructure}</code>
          </pre>
          <div className="mt-4 flex justify-end">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => {
                window.location.href = fragmentLink;
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
        title={`${title.replace('_Query', '')} Query Example`}
        description={`Fetch a paginated list of people with name filtering:`}
        codeExamples={codeExamples}
      />
      
      {exampleResponse && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h4 className="font-semibold mb-2">Example Response:</h4>
          <pre className="font-code text-sm overflow-auto">
            {exampleResponse}
          </pre>
        </div>
      )}
    </section>
  );
};

export default PeopleQuerySection;
