// src/routes/routes.config.ts
import {
    Home,
    FileText,
    MessageSquare,
    PlusCircle,
    Edit,
    Eye,
    type LucideProps,
} from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface RouteConfig {
    path: string;
    name: string;
    icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    component?: string;
    isProtected?: boolean;
    showInSidebar?: boolean;
    children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
    {
        path: '/login',
        name: 'Login',
        component: 'Login',
        isProtected: false,
        showInSidebar: false
    },
    {
        path: '/',
        name: 'Dashboard',
        icon: Home,
        component: 'Dashboard',
        isProtected: true,
        showInSidebar: true
    },
    {
        path: '/blogs',
        name: 'Blog Management',
        icon: FileText,
        isProtected: true,
        showInSidebar: true,
        children: [
            {
                path: '/blogs',
                name: 'All Blogs',
                component: 'BlogList',
                isProtected: true,
                showInSidebar: false
            },
            {
                path: '/blogs/create',
                name: 'Create Blog',
                icon: PlusCircle,
                component: 'CreateBlog',
                isProtected: true,
                showInSidebar: false
            },
            {
                path: '/blogs/edit/:id',
                name: 'Edit Blog',
                icon: Edit,
                component: 'EditBlog',
                isProtected: true,
                showInSidebar: false
            }
        ]
    },
    {
        path: '/inquiries',
        name: 'Contact Inquiries',
        icon: MessageSquare,
        isProtected: true,
        showInSidebar: true,
        children: [
            {
                path: '/inquiries',
                name: 'All Inquiries',
                component: 'InquiriesList',
                isProtected: true,
                showInSidebar: false
            },
            {
                path: '/inquiries/:id',
                name: 'Inquiry Details',
                icon: Eye,
                component: 'InquiryDetail',
                isProtected: true,
                showInSidebar: false
            }
        ]
    }
];

export const sidebarRoutes = routes.filter(route => route.showInSidebar);

export const protectedRoutes = routes.filter(route => route.isProtected);

export const getRouteByPath = (path: string): RouteConfig | undefined => {
    const findRoute = (routes: RouteConfig[]): RouteConfig | undefined => {
        for (const route of routes) {
            if (route.path === path) {
                return route;
            }
            if (route.children) {
                const found = findRoute(route.children);
                if (found) return found;
            }
        }
        return undefined;
    };

    return findRoute(routes);
};

export const getBreadcrumbs = (pathname: string): RouteConfig[] => {
    const breadcrumbs: RouteConfig[] = [];
    const pathSegments = pathname.split('/').filter(Boolean);

    let currentPath = '';

    for (const segment of pathSegments) {
        currentPath += `/${segment}`;
        const route = getRouteByPath(currentPath);
        if (route) {
            breadcrumbs.push(route);
        }
    }

    return breadcrumbs;
};

// Navigation helper functions
export const getActiveRoute = (pathname: string): string => {
    if (pathname.startsWith('/blogs')) return '/blogs';
    if (pathname.startsWith('/inquiries')) return '/inquiries';
    return pathname;
};

export const isRouteActive = (routePath: string, currentPath: string): boolean => {
    if (routePath === '/') {
        return currentPath === '/';
    }
    return currentPath.startsWith(routePath);
};