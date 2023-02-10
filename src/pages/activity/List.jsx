import { NavLink, useNavigate } from "react-router-dom"
import { DataTable } from "../../components"
import { AppRoutes } from "../../data/constants"
import { data } from "../../data/mocks"

export const List = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="row" style={{ 'marginBottom': '20px' }}>
                <div className="col-sm-10"><h3>Activity</h3></div>
                <div className="col-sm-2 text-right">
                    <NavLink to={`/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.activity}/${AppRoutes.CrudRoutes.create}`}
                        className="btn btn-success notika-btn-success waves-effect">
                        Create
                    </NavLink>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <DataTable
                        schema={[
                            {
                                id: 'workplace',
                                show: 'Workplace'
                            },
                            {
                                id: 'date',
                                show: 'Date'
                            },
                        ]}
                        data={data.acts}
                        handler={function (element) {
                            console.log(`/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.activity}/${element.id}`)
                            navigate(
                                `/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.activity}/${element.id}`,
                            )
                        }}
                    />
                </div>
            </div>

        </div >
    )
}
