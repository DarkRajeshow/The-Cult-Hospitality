import { Award, ChevronRight, Briefcase } from 'lucide-react'
import { useState } from 'react'

interface IDepartment {
    name: string;
    summary: string;
    keyResponsibilities: string[];
}

interface DepartmentsSectionProps {
    title: string;
    description: string;
    departments: IDepartment[];
}

function DepartmentsSection({ title, description, departments }: DepartmentsSectionProps) {
    const [expandedDept, setExpandedDept] = useState<number | null>(null);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                            <Briefcase className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                            {title}
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Departments Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {departments?.map((department, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer"
                                onClick={() => setExpandedDept(expandedDept === index ? null : index)}
                            >
                                {/* Card Content */}
                                <div className="p-6">
                                    {/* Icon and Name */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                                <Award className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <ChevronRight 
                                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                                expandedDept === index ? 'rotate-90 text-blue-600' : ''
                                            }`} 
                                        />
                                    </div>
                                    
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {department.name}
                                    </h3>

                                    {/* Summary */}
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        {department.summary}
                                    </p>

                                    {/* Expandable Responsibilities */}
                                    <div className={`transition-all duration-300 ease-in-out ${
                                        expandedDept === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}>
                                        <div className="pt-4 border-t border-gray-100">
                                            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                                                Key Responsibilities
                                            </h4>
                                            <ul className="space-y-2">
                                                {department.keyResponsibilities?.map((responsibility, idx) => (
                                                    <li key={idx} className="flex items-start space-x-2">
                                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                                        <span className="text-sm text-gray-600 leading-relaxed">
                                                            {responsibility}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Footer */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                {departments?.length || 0}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                                Specialized Departments
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                {departments?.reduce((acc, dept) => acc + (dept.keyResponsibilities?.length || 0), 0)}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                                Core Responsibilities
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                100%
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                                Excellence Driven
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DepartmentsSection