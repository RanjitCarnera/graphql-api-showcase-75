
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Copy, Hash } from 'lucide-react';
import { ToastAction } from "@/components/ui/toast";
import { useToast } from '@/components/ui/use-toast';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

interface OperationCardProps {
  id: string;
  title: string;
  description: string;
  code: string;
}

const OperationCard: React.FC<OperationCardProps> = ({ id, title, description, code }) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
      action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
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
          <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(code)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy</TooltipContent>
                </Tooltip>
        </CardHeader>
        <CardContent>
        <p className="mb-4">{description}</p>
          <pre className="font-code text-sm p-4 bg-gray-100 rounded-md overflow-auto">
           {code}
          </pre>

          <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      window.location.href = '/fragments';
                    }}
                    className="flex items-center gap-1"
                  >
                    <span>View Fragment Definition</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default OperationCard;
