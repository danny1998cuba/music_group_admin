import { Routes, Route, Navigate } from 'react-router-dom'

import { AppRoutes, Errors } from '../constants'

import { Activity, Auth, Cloth, Error, Member, Song, User, Workplace } from '../../pages'
import { MainLayout } from '../../layouts'
import React from 'react'

export const MainRoutes = () => {
    const routes = AppRoutes.MainRoutes
    return (
        <Routes>
            <Route key={'dash_redirect'} path='' element={<Navigate to={`/${routes.dashboard}`} replace={true} />} />,
            <Route key={'login'} path={`/${routes.login}`} element={<Auth />} />
            <Route key={'dash_tree'} path={`/${routes.dashboard}/*`} element={<MainLayout />} children={AdminRoutes()} />
            <Route key={'error'} path={`/${routes.error}`} element={
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
        <Route key={'dash'} path='' element={<><h3>Dashboard</h3></>} />,
        <Route key={'not_imp'} path='not_imp' element={
            <div style={{
                'display': 'flex',
                'justifyContent': 'center',
                'alignItems': 'center',
                'padding': '20px',
                'minHeight': '200px',
                'backgroundColor': '#ccc',
                'borderRadius': '20px',
                'boxShadow': '5px 5px 15px rgba(0,0,0,0.3)'
            }}>
                <h3 style={{
                    'fontWeight': 'lighter',
                    'letterSpacing': '2px',
                    'wordSpacing': '10px',
                    'textShadow': '2px 2px 5px rgba(0,0,0,0.5)'
                }}>Not implemented yet</h3>
            </div>
        } />,
        <Route key={'activity'} path={`${routes.AdminRoutes.activity}`} element={<Activity.List />} />,
        <Route key={'cloth'} path={`${routes.AdminRoutes.cloth}`} element={<Cloth.List />} />,
        <Route key={'members'} path={`${routes.AdminRoutes.members}`} element={<Member.List />} />,
        <Route key={'song'} path={`${routes.AdminRoutes.song}`} element={<Song.List />} />,
        <Route key={'user'} path={`${routes.AdminRoutes.user}`} element={<User.List />} />,
        <Route key={'workplace'} path={`${routes.AdminRoutes.workplace}`} element={<Workplace.List />} />,
        // <Route path='*' element={<Navigate to={`/${routes.MainRoutes.dashboard}`} replace={true} />} />
        <Route key={'404'} path='*' element={<Navigate to={`/${routes.MainRoutes.error}`} replace={true} />} />
    ]
}