import { Award, Briefcase } from 'lucide-react'

interface IDepartment {
    name: string;
    summary: string;
    keyResponsibilities: string[];
    teamStructure?: {
        team?: string[];
        KitchenStaff?: string[];
        FrontOfHouse?: string[];
    };
}

interface DepartmentsSectionProps {
    title: string;
    description: string;
    departments: IDepartment[];
}

function DepartmentsSection({ title, description, departments }: DepartmentsSectionProps) {
    return (
        <section className="py-16 md:py-24">
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
                                className="group relative bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl overflow-hidden h-full"
                            >
                                <div className="p-6 flex flex-col h-full">
                                    {/* Icon and Name */}
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {department.name}
                                    </h3>

                                    {/* Summary */}
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        {department.summary}
                                    </p>

                                    <div className="flex-grow">
                                        <div className="pt-4 border-t border-gray-100">
                                            {/* Key Responsibilities */}
                                            <div className="mb-6">
                                                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                                                    Key Responsibilities
                                                </h4>
                                                <ul className="space-y-2">
                                                    {department.keyResponsibilities?.slice(0, 3).map((responsibility, idx) => (
                                                        <li key={idx} className="flex items-start space-x-2">
                                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                                            <span className="text-sm text-gray-600 leading-relaxed">
                                                                {responsibility}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Team Structure */}
                                            {department.teamStructure && (
                                                <div className="space-y-4">
                                                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                                                        Team Structure
                                                    </h4>
                                                    {department.teamStructure.team && (
                                                        <div className="mb-4">
                                                            <ul className="space-y-2">
                                                                {department.teamStructure.team.slice(0, 3).map((member, idx) => (
                                                                    <li key={idx} className="flex items-start space-x-2">
                                                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                                                        <span className="text-sm text-gray-600 leading-relaxed">
                                                                            {member}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {department.teamStructure.KitchenStaff && (
                                                        <div className="mb-4">
                                                            <h5 className="text-xs font-medium text-gray-600 mb-2">Kitchen Staff</h5>
                                                            <ul className="space-y-2">
                                                                {department.teamStructure.KitchenStaff.slice(0, 3).map((staff, idx) => (
                                                                    <li key={idx} className="flex items-start space-x-2">
                                                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                                                        <span className="text-sm text-gray-600 leading-relaxed">
                                                                            {staff}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {department.teamStructure.FrontOfHouse && (
                                                        <div>
                                                            <h5 className="text-xs font-medium text-gray-600 mb-2">Front of House</h5>
                                                            <ul className="space-y-2">
                                                                {department.teamStructure.FrontOfHouse.slice(0, 3).map((staff, idx) => (
                                                                    <li key={idx} className="flex items-start space-x-2">
                                                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                                                        <span className="text-sm text-gray-600 leading-relaxed">
                                                                            {staff}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
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