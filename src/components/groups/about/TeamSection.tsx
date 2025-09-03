import React from 'react';
import CardSpotlight from './CardSpotlight';
import { Users, Award } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

interface TeamSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
  departments: string[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, description, members, departments }) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 md:mb-16">
            {members.map((member, index) => (
              <CardSpotlight key={index} className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardSpotlight>
            ))}
          </div>

          {/* Departments */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6 text-center">
              Our Expert Departments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((department, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {department}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
