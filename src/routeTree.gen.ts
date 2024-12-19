/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PostsImport } from './routes/posts'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as SettingsProfileImport } from './routes/settings/profile'
import { Route as SettingsNotificationsImport } from './routes/settings/notifications'
import { Route as PostsPostIdImport } from './routes/posts.$postId'
import { Route as FilesSplatImport } from './routes/files/$'
import { Route as LayoutLayoutBImport } from './routes/_layout/layout-b'
import { Route as LayoutLayoutAImport } from './routes/_layout/layout-a'
import { Route as PostsPostIdEditImport } from './routes/posts.$postId.edit'

// Create/Update Routes

const PostsRoute = PostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SettingsProfileRoute = SettingsProfileImport.update({
  id: '/settings/profile',
  path: '/settings/profile',
  getParentRoute: () => rootRoute,
} as any)

const SettingsNotificationsRoute = SettingsNotificationsImport.update({
  id: '/settings/notifications',
  path: '/settings/notifications',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostIdRoute = PostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => PostsRoute,
} as any)

const FilesSplatRoute = FilesSplatImport.update({
  id: '/files/$',
  path: '/files/$',
  getParentRoute: () => rootRoute,
} as any)

const LayoutLayoutBRoute = LayoutLayoutBImport.update({
  id: '/_layout/layout-b',
  path: '/layout-b',
  getParentRoute: () => rootRoute,
} as any)

const LayoutLayoutARoute = LayoutLayoutAImport.update({
  id: '/_layout/layout-a',
  path: '/layout-a',
  getParentRoute: () => rootRoute,
} as any)

const PostsPostIdEditRoute = PostsPostIdEditImport.update({
  id: '/edit',
  path: '/edit',
  getParentRoute: () => PostsPostIdRoute,
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
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof PostsImport
      parentRoute: typeof rootRoute
    }
    '/_layout/layout-a': {
      id: '/_layout/layout-a'
      path: '/layout-a'
      fullPath: '/layout-a'
      preLoaderRoute: typeof LayoutLayoutAImport
      parentRoute: typeof rootRoute
    }
    '/_layout/layout-b': {
      id: '/_layout/layout-b'
      path: '/layout-b'
      fullPath: '/layout-b'
      preLoaderRoute: typeof LayoutLayoutBImport
      parentRoute: typeof rootRoute
    }
    '/files/$': {
      id: '/files/$'
      path: '/files/$'
      fullPath: '/files/$'
      preLoaderRoute: typeof FilesSplatImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof PostsPostIdImport
      parentRoute: typeof PostsImport
    }
    '/settings/notifications': {
      id: '/settings/notifications'
      path: '/settings/notifications'
      fullPath: '/settings/notifications'
      preLoaderRoute: typeof SettingsNotificationsImport
      parentRoute: typeof rootRoute
    }
    '/settings/profile': {
      id: '/settings/profile'
      path: '/settings/profile'
      fullPath: '/settings/profile'
      preLoaderRoute: typeof SettingsProfileImport
      parentRoute: typeof rootRoute
    }
    '/posts/$postId/edit': {
      id: '/posts/$postId/edit'
      path: '/edit'
      fullPath: '/posts/$postId/edit'
      preLoaderRoute: typeof PostsPostIdEditImport
      parentRoute: typeof PostsPostIdImport
    }
  }
}

// Create and export the route tree

interface PostsPostIdRouteChildren {
  PostsPostIdEditRoute: typeof PostsPostIdEditRoute
}

const PostsPostIdRouteChildren: PostsPostIdRouteChildren = {
  PostsPostIdEditRoute: PostsPostIdEditRoute,
}

const PostsPostIdRouteWithChildren = PostsPostIdRoute._addFileChildren(
  PostsPostIdRouteChildren,
)

interface PostsRouteChildren {
  PostsPostIdRoute: typeof PostsPostIdRouteWithChildren
}

const PostsRouteChildren: PostsRouteChildren = {
  PostsPostIdRoute: PostsPostIdRouteWithChildren,
}

const PostsRouteWithChildren = PostsRoute._addFileChildren(PostsRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/posts': typeof PostsRouteWithChildren
  '/layout-a': typeof LayoutLayoutARoute
  '/layout-b': typeof LayoutLayoutBRoute
  '/files/$': typeof FilesSplatRoute
  '/posts/$postId': typeof PostsPostIdRouteWithChildren
  '/settings/notifications': typeof SettingsNotificationsRoute
  '/settings/profile': typeof SettingsProfileRoute
  '/posts/$postId/edit': typeof PostsPostIdEditRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/posts': typeof PostsRouteWithChildren
  '/layout-a': typeof LayoutLayoutARoute
  '/layout-b': typeof LayoutLayoutBRoute
  '/files/$': typeof FilesSplatRoute
  '/posts/$postId': typeof PostsPostIdRouteWithChildren
  '/settings/notifications': typeof SettingsNotificationsRoute
  '/settings/profile': typeof SettingsProfileRoute
  '/posts/$postId/edit': typeof PostsPostIdEditRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/posts': typeof PostsRouteWithChildren
  '/_layout/layout-a': typeof LayoutLayoutARoute
  '/_layout/layout-b': typeof LayoutLayoutBRoute
  '/files/$': typeof FilesSplatRoute
  '/posts/$postId': typeof PostsPostIdRouteWithChildren
  '/settings/notifications': typeof SettingsNotificationsRoute
  '/settings/profile': typeof SettingsProfileRoute
  '/posts/$postId/edit': typeof PostsPostIdEditRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/posts'
    | '/layout-a'
    | '/layout-b'
    | '/files/$'
    | '/posts/$postId'
    | '/settings/notifications'
    | '/settings/profile'
    | '/posts/$postId/edit'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/posts'
    | '/layout-a'
    | '/layout-b'
    | '/files/$'
    | '/posts/$postId'
    | '/settings/notifications'
    | '/settings/profile'
    | '/posts/$postId/edit'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/posts'
    | '/_layout/layout-a'
    | '/_layout/layout-b'
    | '/files/$'
    | '/posts/$postId'
    | '/settings/notifications'
    | '/settings/profile'
    | '/posts/$postId/edit'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  PostsRoute: typeof PostsRouteWithChildren
  LayoutLayoutARoute: typeof LayoutLayoutARoute
  LayoutLayoutBRoute: typeof LayoutLayoutBRoute
  FilesSplatRoute: typeof FilesSplatRoute
  SettingsNotificationsRoute: typeof SettingsNotificationsRoute
  SettingsProfileRoute: typeof SettingsProfileRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  PostsRoute: PostsRouteWithChildren,
  LayoutLayoutARoute: LayoutLayoutARoute,
  LayoutLayoutBRoute: LayoutLayoutBRoute,
  FilesSplatRoute: FilesSplatRoute,
  SettingsNotificationsRoute: SettingsNotificationsRoute,
  SettingsProfileRoute: SettingsProfileRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/posts",
        "/_layout/layout-a",
        "/_layout/layout-b",
        "/files/$",
        "/settings/notifications",
        "/settings/profile"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/posts": {
      "filePath": "posts.tsx",
      "children": [
        "/posts/$postId"
      ]
    },
    "/_layout/layout-a": {
      "filePath": "_layout/layout-a.tsx"
    },
    "/_layout/layout-b": {
      "filePath": "_layout/layout-b.tsx"
    },
    "/files/$": {
      "filePath": "files/$.tsx"
    },
    "/posts/$postId": {
      "filePath": "posts.$postId.tsx",
      "parent": "/posts",
      "children": [
        "/posts/$postId/edit"
      ]
    },
    "/settings/notifications": {
      "filePath": "settings/notifications.tsx"
    },
    "/settings/profile": {
      "filePath": "settings/profile.tsx"
    },
    "/posts/$postId/edit": {
      "filePath": "posts.$postId.edit.tsx",
      "parent": "/posts/$postId"
    }
  }
}
ROUTE_MANIFEST_END */
