/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as EmployeeIndexImport } from './routes/employee/index'
import { Route as EmployeeIdImport } from './routes/employee/$id'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const EmployeeIndexRoute = EmployeeIndexImport.update({
  path: '/employee/',
  getParentRoute: () => rootRoute,
} as any)

const EmployeeIdRoute = EmployeeIdImport.update({
  path: '/employee/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/employee/$id': {
      id: '/employee/$id'
      path: '/employee/$id'
      fullPath: '/employee/$id'
      preLoaderRoute: typeof EmployeeIdImport
      parentRoute: typeof rootRoute
    }
    '/employee/': {
      id: '/employee/'
      path: '/employee'
      fullPath: '/employee'
      preLoaderRoute: typeof EmployeeIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  ContactRoute,
  LoginRoute,
  EmployeeIdRoute,
  EmployeeIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/contact",
        "/login",
        "/employee/$id",
        "/employee/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/employee/$id": {
      "filePath": "employee/$id.tsx"
    },
    "/employee/": {
      "filePath": "employee/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
