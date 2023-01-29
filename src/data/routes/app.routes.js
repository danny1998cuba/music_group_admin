import { Routes, Route, Navigate } from 'react-router-dom'

import { AppRoutes, Errors } from '../constants'

import { Activity, Auth, Cloth, Error, Member, Song, User, Workplace } from '../../pages'
import { MainLayout } from '../../layouts'
import React from 'react'

export const MainRoutes = () => {
    const routes = AppRoutes.MainRoutes
    return (
        <Routes>
            <Route path='' element={<Navigate to={`/${routes.dashboard}`} replace={true} />} />,
            <Route path={`/${routes.login}`} element={<Auth />} />
            <Route path={`/${routes.dashboard}/*`} element={<MainLayout />} children={AdminRoutes()} />
            <Route path={`/${routes.error}`} element={
                <Error
                    number={Errors.err_404.number}
                    msg={Errors.err_404.msg}
                    action={Errors.err_404.action}
                />}
            />
            <Route path="*" element={<Navigate to={`/${routes.error}`} replace={true} />} />
        </Routes>
    )
}

export const AdminRoutes = () => {
    const routes = AppRoutes

    return [
        <Route path='' element={<>Dashboard</>} />,
        <Route path={`${routes.AdminRoutes.activity}`} element={<Activity.List />} />,
        <Route path={`${routes.AdminRoutes.cloth}`} element={<Cloth.List />} />,
        <Route path={`${routes.AdminRoutes.members}`} element={<Member.List />} />,
        <Route path={`${routes.AdminRoutes.song}`} element={<Song.List />} />,
        <Route path={`${routes.AdminRoutes.user}`} element={<User.List />} />,
        <Route path={`${routes.AdminRoutes.workplace}`} element={<Workplace.List />} />,
        // <Route path='*' element={<Navigate to={`/${routes.MainRoutes.dashboard}`} replace={true} />} />
        <Route path='*' element={<Navigate to={`/${routes.MainRoutes.error}`} replace={true} />} />
    ]
}