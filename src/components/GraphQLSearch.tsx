
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';

// Define the structure of our operation items
interface OperationItem {
  id: string;
  title: string;
  type: 'query' | 'mutation' | 'fragment';
  description?: string;
  page: string;
  fragmentId?: string;
}

export default function GraphQLSearch() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [operations, setOperations] = useState<OperationItem[]>([]);
  const [filteredOperations, setFilteredOperations] = useState<OperationItem[]>([]);
  const navigate = useNavigate();

  // Load all operations from our data files
  useEffect(() => {
    const loadOperations = async () => {
      try {
        console.log('Loading operations data...');
        // Import all operation JSON files
        const operationFiles = [
          import('@/data/peopleOperations.json'),
          import('@/data/projectOperations.json'),
          import('@/data/scenarioOperations.json'),
          import('@/data/staffingTemplateOperations.json'),
          import('@/data/assessmentTemplateOperations.json'),
          import('@/data/asessmentsOperations.json'),
          import('@/data/skillsOperations.json'),
          import('@/data/skillCategoriesOperations.json'),
          import('@/data/assignmentRoleOperations.json'),
          import('@/data/accountPermissionGroupOperations.json'),
          import('@/data/accountUserOperations.json'),
          import('@/data/accountSettingOperations.json'),
          import('@/data/divisionOperations.json'),
          import('@/data/regionOperations.json'),
          import('@/data/assignmentsOperations.json'),
          import('@/data/skillAssessmentOperations.json')
        ];
        
        // Wait for all imports to complete
        const results = await Promise.all(operationFiles);
        console.log('Loaded operation files:', results.length);
        
        const allOperations: OperationItem[] = [];
        
        // Map file paths to their corresponding route paths
        const fileToPageMap: Record<string, string> = {
          'peopleOperations': '/people',
          'projectOperations': '/projects',
          'scenarioOperations': '/scenarios',
          'staffingTemplateOperations': '/staffing-templates',
          'assessmentTemplateOperations': '/assessment-templates',
          'asessmentsOperations': '/assessments',
          'skillsOperations': '/skills',
          'skillCategoriesOperations': '/skill-categories',
          'assignmentRoleOperations': '/assignment-roles',
          'accountPermissionGroupOperations': '/account-permissions-groups',
          'accountUserOperations': '/account-users',
          'accountSettingOperations': '/account-settings',
          'divisionOperations': '/divisions',
          'regionOperations': '/regions',
          'assignmentsOperations': '/assignments',
          'skillAssessmentOperations': '/skills-assessment'
        };
        
        // Process each file's operations
        results.forEach((fileData: any, index) => {
          // Extract the file name from the import path
          const importPath = Object.keys(operationFiles)[index];
          const fileNameMatch = importPath.match(/\/([^/]+)Operations\.json/);
          const fileName = fileNameMatch ? fileNameMatch[1] + 'Operations' : '';
          const pagePath = fileToPageMap[fileName] || '';
          
          console.log(`Processing file: ${fileName}, mapped to path: ${pagePath}`);
          
          // Process queries
          if (fileData.queries) {
            fileData.queries.forEach((query: any) => {
              allOperations.push({
                id: query.id || `query-${Math.random().toString(36).substr(2, 9)}`,
                title: query.title || 'Untitled Query',
                type: 'query',
                description: query.description,
                page: pagePath
              });
            });
          }
          
          // Process mutations
          if (fileData.mutations) {
            fileData.mutations.forEach((mutation: any) => {
              allOperations.push({
                id: mutation.id || `mutation-${Math.random().toString(36).substr(2, 9)}`,
                title: mutation.title || 'Untitled Mutation',
                type: 'mutation',
                description: mutation.description,
                page: pagePath
              });
            });
          }
          
          // Process fragments
          if (fileData.fragments) {
            fileData.fragments.forEach((fragment: any) => {
              allOperations.push({
                id: fragment.id || `fragment-${Math.random().toString(36).substr(2, 9)}`,
                title: fragment.title || 'Untitled Fragment',
                type: 'fragment',
                description: fragment.description || '',
                page: pagePath,
                fragmentId: fragment.fragmentId
              });
            });
          }
        });
        
        console.log(`Total operations loaded: ${allOperations.length}`);
        setOperations(allOperations);
        
      } catch (error) {
        console.error('Error loading operation data:', error);
      }
    };
    
    loadOperations();
  }, []);

  // Filter operations based on search term
  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === '') {
      setFilteredOperations([]);
      return;
    }
    
    console.log(`Filtering with search term: "${searchTerm}"`);
    console.log(`Operations to filter: ${operations.length}`);
    
    const lowercaseSearchTerm = searchTerm.toLowerCase().trim();
    const filtered = operations.filter(op => {
      const titleMatch = op.title && op.title.toLowerCase().includes(lowercaseSearchTerm);
      const descMatch = op.description && op.description.toLowerCase().includes(lowercaseSearchTerm);
      return titleMatch || descMatch;
    });
    
    console.log(`Filtered results: ${filtered.length}`);
    setFilteredOperations(filtered);
  }, [searchTerm, operations]);

  // Handle selecting a search result
  const handleSelect = (operation: OperationItem) => {
    console.log(`Selected operation: ${operation.title}, navigating to ${operation.page}`);
    
    // Close the dialog and reset search term
    setOpen(false);
    setSearchTerm('');
    
    // Navigate to the appropriate page
    if (operation.page) {
      // For fragments, we need to append the fragment ID to navigate directly to it
      if (operation.type === 'fragment' && operation.fragmentId) {
        const fragmentId = operation.fragmentId.replace(/[^a-zA-Z0-9]/g, "_");
        console.log(`Navigating to fragment: ${operation.page}#${fragmentId}`);
        navigate(`${operation.page}#${fragmentId}`);
      } else {
        // For queries and mutations, just navigate to the page
        console.log(`Navigating to page: ${operation.page}`);
        navigate(operation.page);
      }
    } else {
      console.warn('No page defined for this operation:', operation);
    }
  };

  // Open the search dialog with keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <div className="w-full mt-8">
      <div className="max-w-md mx-auto">
        <Button
          variant="outline"
          className="relative w-full justify-start text-sm text-muted-foreground border border-gray-300"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          Search GraphQL operations...
          <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search GraphQL operations..."
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          {/* Group results by type */}
          {filteredOperations.length > 0 && (
            <>
              {/* Queries */}
              {filteredOperations.filter(op => op.type === 'query').length > 0 && (
                <CommandGroup heading="Queries">
                  {filteredOperations
                    .filter(op => op.type === 'query')
                    .map(op => (
                      <CommandItem
                        key={`query-${op.id}`}
                        value={op.title}
                        onSelect={() => handleSelect(op)}
                        className="cursor-pointer"
                      >
                        <span>{op.title}</span>
                      </CommandItem>
                    ))
                  }
                </CommandGroup>
              )}
              
              {/* Mutations */}
              {filteredOperations.filter(op => op.type === 'mutation').length > 0 && (
                <CommandGroup heading="Mutations">
                  {filteredOperations
                    .filter(op => op.type === 'mutation')
                    .map(op => (
                      <CommandItem
                        key={`mutation-${op.id}`}
                        value={op.title}
                        onSelect={() => handleSelect(op)}
                        className="cursor-pointer"
                      >
                        <span>{op.title}</span>
                      </CommandItem>
                    ))
                  }
                </CommandGroup>
              )}
              
              {/* Fragments */}
              {filteredOperations.filter(op => op.type === 'fragment').length > 0 && (
                <CommandGroup heading="Fragments">
                  {filteredOperations
                    .filter(op => op.type === 'fragment')
                    .map(op => (
                      <CommandItem
                        key={`fragment-${op.id}`}
                        value={op.title}
                        onSelect={() => handleSelect(op)}
                        className="cursor-pointer"
                      >
                        <span>{op.title}</span>
                      </CommandItem>
                    ))
                  }
                </CommandGroup>
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
