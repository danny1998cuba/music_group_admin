import { AppRoutes } from "../constants"
import { Route, Navigate } from 'react-router-dom'

const routes = AppRoutes

export const crudRoutes = function (clazz) {
    return [
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
        <Route key={'main'} path={''} element={<clazz.List />} />,
        <Route key={'create'} path={`${routes.CrudRoutes.create}`} element={clazz.Create && <clazz.Create />} />,
        <Route key={'modify'} path={`${routes.CrudRoutes.manage}`} element={clazz.Manage && <clazz.Manage />} />,
        <Route key={'details'} path={':id'} element={clazz.Details && <clazz.Details element={{ name: 'Element' }} />} />,

        <Route key={'404'} path='*' element={<Navigate to={`/${routes.MainRoutes.error}`} replace={true} />} />
    ]
}