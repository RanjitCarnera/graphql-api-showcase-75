import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Trash2, Send, Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Header {
  key: string;
  value: string;
}

interface ApiResponse {
  status: number;
  statusText: string;
  data: any;
  headers: Record<string, string>;
  duration: number;
}

const RestApiExplorer = () => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('http://localhost:9000/graphql');
  const [headers, setHeaders] = useState<Header[]>([
    { key: 'Content-Type', value: 'application/json' },
    { key: 'Authorization', value: 'Bearer your-token-here' }
  ]);
  const [body, setBody] = useState('{\n  "query": "{ __typename }"\n}');
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const updateHeader = (index: number, field: 'key' | 'value', value: string) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const removeHeader = (index: number) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const copyResponse = () => {
    if (response) {
      navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
      toast({
        title: "Response copied!",
        description: "The response has been copied to your clipboard.",
        duration: 2000,
      });
    }
  };

  const sendRequest = async () => {
    setLoading(true);
    const startTime = Date.now();

    try {
      const requestHeaders: Record<string, string> = {};
      headers.forEach(header => {
        if (header.key && header.value) {
          requestHeaders[header.key] = header.value;
        }
      });

      const fetchOptions: RequestInit = {
        method,
        headers: requestHeaders,
      };

      if (method !== 'GET' && method !== 'HEAD' && body) {
        fetchOptions.body = body;
      }

      const response = await fetch(url, fetchOptions);
      const duration = Date.now() - startTime;
      
      let responseData;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }

      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      setResponse({
        status: response.status,
        statusText: response.statusText,
        data: responseData,
        headers: responseHeaders,
        duration
      });

      toast({
        title: "Request sent!",
        description: `Received ${response.status} response in ${duration}ms`,
        duration: 3000,
      });

    } catch (error) {
      const duration = Date.now() - startTime;
      setResponse({
        status: 0,
        statusText: 'Network Error',
        data: { error: error instanceof Error ? error.message : 'Unknown error' },
        headers: {},
        duration
      });

      toast({
        title: "Request failed",
        description: error instanceof Error ? error.message : 'Network error occurred',
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const loadExample = (exampleType: string) => {
    switch (exampleType) {
      case 'graphql':
        setMethod('POST');
        setUrl('http://localhost:9000/graphql');
        setHeaders([
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Authorization', value: 'Bearer your-token-here' }
        ]);
        setBody('{\n  "query": "query { __typename }"\n}');
        break;
      case 'rest-get':
        setMethod('GET');
        setUrl('http://localhost:9000/rest/people');
        setHeaders([
          { key: 'Authorization', value: 'Bearer your-token-here' }
        ]);
        setBody('');
        break;
      case 'rest-post':
        setMethod('POST');
        setUrl('http://localhost:9000/rest/people');
        setHeaders([
          { key: 'Content-Type', value: 'application/json' },
          { key: 'Authorization', value: 'Bearer your-token-here' }
        ]);
        setBody('{\n  "name": "John Doe",\n  "email": "john@example.com"\n}');
        break;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            REST API Explorer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Quick Examples */}
          <div className="flex gap-2 mb-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => loadExample('graphql')}
            >
              GraphQL Example
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => loadExample('rest-get')}
            >
              REST GET
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => loadExample('rest-post')}
            >
              REST POST
            </Button>
          </div>

          {/* Method and URL */}
          <div className="flex gap-2">
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
                <SelectItem value="PUT">PUT</SelectItem>
                <SelectItem value="PATCH">PATCH</SelectItem>
                <SelectItem value="DELETE">DELETE</SelectItem>
                <SelectItem value="HEAD">HEAD</SelectItem>
                <SelectItem value="OPTIONS">OPTIONS</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Enter API endpoint URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={sendRequest} 
              disabled={loading || !url}
              className="w-24"
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </div>

          <Tabs defaultValue="headers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="headers">Headers</TabsTrigger>
              <TabsTrigger value="body">Body</TabsTrigger>
              <TabsTrigger value="response">Response</TabsTrigger>
            </TabsList>

            <TabsContent value="headers" className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Request Headers</Label>
                <Button variant="outline" size="sm" onClick={addHeader}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Header
                </Button>
              </div>
              <div className="space-y-2">
                {headers.map((header, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Input
                      placeholder="Header name"
                      value={header.key}
                      onChange={(e) => updateHeader(index, 'key', e.target.value)}
                      className="flex-1"
                    />
                    <Input
                      placeholder="Header value"
                      value={header.value}
                      onChange={(e) => updateHeader(index, 'value', e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeHeader(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="body" className="space-y-4">
              <Label className="text-sm font-medium">Request Body</Label>
              <Textarea
                placeholder="Enter request body (JSON, XML, etc.)"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="min-h-32 font-mono text-sm"
                disabled={method === 'GET' || method === 'HEAD'}
              />
              {(method === 'GET' || method === 'HEAD') && (
                <p className="text-sm text-muted-foreground">
                  Request body is not applicable for {method} requests
                </p>
              )}
            </TabsContent>

            <TabsContent value="response" className="space-y-4">
              {response ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Label className="text-sm font-medium">Response</Label>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        response.status >= 200 && response.status < 300 
                          ? 'bg-green-100 text-green-800' 
                          : response.status >= 400 
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {response.status} {response.statusText}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {response.duration}ms
                      </span>
                    </div>
                    <Button variant="outline" size="sm" onClick={copyResponse}>
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Response Body</Label>
                      <pre className="bg-muted p-4 rounded-md overflow-auto max-h-64 text-sm">
                        <code>
                          {typeof response.data === 'string' 
                            ? response.data 
                            : JSON.stringify(response.data, null, 2)
                          }
                        </code>
                      </pre>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Response Headers</Label>
                      <pre className="bg-muted p-4 rounded-md overflow-auto max-h-32 text-sm">
                        <code>{JSON.stringify(response.headers, null, 2)}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Send className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Send a request to see the response here</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestApiExplorer;