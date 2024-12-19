import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@/components/TanStackRouterDevtools'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <Outlet />
            <TanStackRouterDevtools />
        </React.Fragment>
    )
}