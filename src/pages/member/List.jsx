import { NavLink, useNavigate } from "react-router-dom"
import { DataTable } from "../../components"
import { AppRoutes } from "../../data/constants"

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
                                id: 'name',
                                show: 'Name'
                            },
                            {
                                id: 'contract_from',
                                show: 'Contract From'
                            }
                        ]}
                        data={[]}
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
