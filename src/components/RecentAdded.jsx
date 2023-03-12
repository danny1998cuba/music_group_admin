import { NavLink } from "react-router-dom"

export const RecentAdded = ({
    data,
    keys
}) => {
    return (
        <div className="recent-post-wrapper notika-shadow sm-res-mg-t-30">
            <div className="recent-post-ctn">
                <div className="recent-post-title">
                    <h2>Recently Added</h2>
                </div>
            </div>
            <div className="recent-post-items">
                {data ? data.map((row, index) => (
                    <div key={`${Object.keys(row)[0]}_${index}`} className="recent-post-signle">
                        <NavLink to={`../${row.id}`}>
                            <div className="recent-post-flex rct-pt-mg">
                                <div className="recent-post-img">
                                    <img src="/img/post/2.jpg" alt="" />
                                </div>
                                <div className="recent-post-it-ctn">
                                    <h2>
                                        {
                                            keys.name.split(' ').map(name => (
                                                `${row[name]} `
                                            ))
                                        }
                                    </h2>
                                    <p>Added {row[keys.desc].toLocaleString()}</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                )) : <p className="text-center">Not content to show</p>}


                <div className="recent-post-signle">
                    <NavLink to={'..'}>
                        <div className="recent-post-flex rc-ps-vw">
                            <div className="recent-post-line rct-pt-mg">
                                <p>View All</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
