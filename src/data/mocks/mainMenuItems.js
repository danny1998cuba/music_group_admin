import { AppRoutes } from '../constants'

export const mainMenuItems = [
    {
        id: 'Dashboard',
        icon: 'notika-house',
        name: 'Dashboard',
        submenu: [
            {
                name: 'Home',
                href: `/${AppRoutes.MainRoutes.dashboard}`
            },
        ]
    },
    {
        id: 'music',
        icon: 'fa-music',
        name: 'Repertory',
        submenu: [
            {
                name: 'Manage',
                href: `/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.song}`
            },
            {
                name: 'Songs',
                href: `/${AppRoutes.MainRoutes.dashboard}/not_imp`
            },
        ]
    },
    {
        id: 'activities',
        icon: 'fa-calendar',
        name: 'Activities',
        submenu: [
            {
                name: 'Manage',
                href: `/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.activity}`
            },
            {
                name: 'Sumary',
                href: `/${AppRoutes.MainRoutes.dashboard}/not_imp`
            },
            {
                name: 'Gains Analytics',
                href: `/${AppRoutes.MainRoutes.dashboard}/not_imp`
            },
            {
                name: 'Workplaces',
                href: `/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.workplace}`
            },
        ]
    },
    {
        id: 'clothes',
        icon: 'notika-windows',
        name: 'Clothes',
        submenu: [
            {
                name: 'Manage',
                href: `/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.cloth}`
            },
            {
                name: 'Asignation',
                href: `/${AppRoutes.MainRoutes.dashboard}/not_imp`
            }
        ]
    },
    {
        id: 'persons',
        icon: 'fa-users',
        name: 'Persons',
        submenu: [
            {
                name: 'Members',
                href: `/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.members}`
            },
            {
                name: 'Users',
                href: `/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.user}`
            },
            {
                name: 'Roles',
                href: `/${AppRoutes.MainRoutes.dashboard}/not_imp`
            },
        ]
    },
]