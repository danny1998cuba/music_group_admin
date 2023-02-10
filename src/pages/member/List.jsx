import { NavLink, useNavigate } from "react-router-dom"
import { DataTable } from "../../components"
import { AppRoutes } from "../../data/constants"
import { data } from "../../data/mocks"

export const List = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className="row" style={{ 'marginBottom': '20px' }}>
                <div className="col-sm-10"><h3>Member</h3></div>
                <div className="col-sm-2 text-right">
                    <NavLink to={`/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.members}/${AppRoutes.CrudRoutes.create}`}
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
                                id: 'identification',
                                show: 'Identification'
                            },
                            {
                                id: 'first_name', // fullname with api
                                show: 'Name'
                            },
                            {
                                id: 'position',
                                show: 'Position'
                            }
                        ]}
                        data={data.members}
                        handler={function (element) {
                            navigate(
                                `/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.members}/${element.id}`,
                            )
                        }}
                    />
                </div>
            </div>

        </div >
    )
}
