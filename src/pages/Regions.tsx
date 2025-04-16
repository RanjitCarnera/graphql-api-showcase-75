
import React from 'react';
import DocsLayout from '@/components/DocsLayout';

const Regions = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Regions API</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            The Regions API allows you to manage geographical regions for projects and resources.
          </p>
        </section>
        
        <section className="docs-section mb-8">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="mb-6">
            Documentation for this section is currently under development. Check back soon for detailed
            information on querying and managing regions.
          </p>
        </section>
      </div>
    </DocsLayout>
  );
};

export default Regions;
