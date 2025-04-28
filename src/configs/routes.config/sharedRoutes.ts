import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

export const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: '/',
        component: import('@/views/Home'),
        authority: [],
    },
    {
        key: 'aboutPage',
        path: '/about',
        component: lazy(() => import('@/views/Home/components/infoSection')),
        authority: [],
    },
    {
        key: 'contactPage',
        path: '/contact',
        component: lazy(() => import('@/views/Home/components/ContactForm')),
        authority: [],
    },
]
