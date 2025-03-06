import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Leaf, DollarSign, TreePine } from 'lucide-react';
import { SustainabilityProject, ImpactMetric } from '../types/climate';

interface SustainabilityMetricsProps {
  projects: SustainabilityProject[];
  metrics: ImpactMetric[];
}

export function SustainabilityMetrics({ projects, metrics }: SustainabilityMetricsProps) {
  const totalFunding = projects.reduce((sum, project) => sum + project.current_funding, 0);
  const activeProjects = projects.filter(project => project.status === 'active').length;

  const mockTimelineData = [
    { month: 'Jan', funding: 25000 },
    { month: 'Feb', funding: 45000 },
    { month: 'Mar', funding: 78000 },
    { month: 'Apr', funding: 120000 },
    { month: 'May', funding: totalFunding },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sustainability Impact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm text-green-600">Total Funding</p>
              <p className="text-2xl font-bold text-green-700">
                ${totalFunding.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm text-blue-600">Active Projects</p>
              <p className="text-2xl font-bold text-blue-700">{activeProjects}</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center">
            <TreePine className="h-8 w-8 text-purple-600" />
            <div className="ml-3">
              <p className="text-sm text-purple-600">Impact Metrics</p>
              <p className="text-2xl font-bold text-purple-700">{metrics.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Funding Timeline</h3>
        <LineChart width={800} height={300} data={mockTimelineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="funding" 
            stroke="#059669" 
            strokeWidth={2}
            dot={{ fill: '#059669' }}
          />
        </LineChart>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Active Projects</h3>
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{project.title}</h4>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {project.status}
                </span>
              </div>
              <div className="mt-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-green-600">
                        {((project.current_funding / project.target_funding) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-green-600">
                        ${project.current_funding.toLocaleString()} / ${project.target_funding.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                    <div
                      style={{ width: `${(project.current_funding / project.target_funding) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}