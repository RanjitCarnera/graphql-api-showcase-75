
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Hash } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface OperationCardProps {
  id: string;
  title: string;
  description: string;
  code: string;
}

const OperationCard: React.FC<OperationCardProps> = ({ id, title, description, code }) => {
  const { toast } = useToast();

  const handleCopyToClipboard = () => {
    const operationUrl = `${window.location.origin}/assignment-roles#${id}`;
    navigator.clipboard.writeText(operationUrl);
    toast({
      title: "Link copied!",
      description: `Direct link to ${title} has been copied to clipboard.`,
      duration: 2000,
    });
  };

  return (
    <section id={id} className="scroll-mt-16">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5 text-blue-500" />
            <span>{title}</span>
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleCopyToClipboard}
            className="flex items-center gap-1"
          >
            <Copy className="h-4 w-4" />
            Copy Link
          </Button>
        </CardHeader>
        <CardContent>
          <pre className="code-block overflow-x-auto">
            <code>{code}</code>
          </pre>
          <div className="mt-4 text-sm">
            <p><strong>Description:</strong> {description}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default OperationCard;
