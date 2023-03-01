import { useEffect, useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import 'react-edit-text/dist/index.css'

import { data, wps } from '../../data/mocks'
import { AppRoutes } from '../../data/constants'
import { useEditTextHandlers } from '../../hooks/useEditTextHandlers'
import moment from 'moment'

export const Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [element, setElement] = useState({})
    const [workplace, setWorkplace] = useState({})

    useEffect(() => {
        let finded = data.acts.find(el => el.id === params.id)
        if (!finded) {
            navigate('/error', { replace: true })
        }
        setElement(finded)

        let wp = wps.find(el => el.name === finded.workplace)
        if (!finded) {
            navigate('/error', { replace: true })
        }
        setWorkplace(wp)

    }, [navigate, params])

    const transparentEditBtnProps = { style: { background: 'transparent' } }

    const { handleSave } = useEditTextHandlers(element)

    const handleSubmit = (e) => {
        console.log(element)
    }

    if (!element.clothes
        || element.clothes.length == 0
        || element.gains?.currecies.length == 0) {
        return null
    }

    return (
        <div>
            <h3>Activity</h3>
            <hr />

            <div className="details-box">
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Workplace: </b>
                    </div>
                    <div className="col col-sm-10">
                        <NavLink to={`/${AppRoutes.MainRoutes.dashboard}/${AppRoutes.AdminRoutes.workplace}/${workplace.id}`}>
                            {element.workplace}
                        </NavLink>

                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Date: </b>
                    </div>
                    <div className="col-sm-10">
                        <EditText
                            type='date'
                            name='date'
                            defaultValue={moment(element.date).format('yyyy-MM-DD')}
                            placeholder='Date empty'
                            onSave={handleSave}
                            showEditButton
                            editButtonProps={transparentEditBtnProps}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Clothes: </b>
                    </div>
                    <div className="col-sm-10">
                        {
                            element.clothes.map((el, index) => (
                                <EditText
                                    key={`cloth_${index}`}
                                    name={`clothes.${index}`}
                                    defaultValue={element.clothes[index]}
                                    placeholder='Date empty'
                                    onSave={handleSave}
                                    showEditButton
                                    editButtonProps={transparentEditBtnProps}
                                />
                            ))
                        }

                        <button className="btn btn-success notika-btn-success" onClick={(e) => { alert('Add other cloth') }}>Add more</button>
                    </div>
                </div>

                {/* TODO: Show gains as a table */}
                <fieldset>
                    <legend>Gains</legend>
                    <div className="row">
                        <div className="col col-sm-2">
                            <b>Basic salary: </b>
                        </div>
                        <div className="col-sm-10">
                            <EditText
                                defaultValue={workplace.salary}
                                placeholder='Date empty'
                                readonly
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-sm-2">
                            <b>Tips: </b>
                        </div>
                        <div className="col-sm-10">
                            {
                                (Object.keys(element.gains).length != 0) ?
                                    element.gains.currecies.map((el, index) => (
                                        <EditText
                                            key={`curr_${index}`}
                                            defaultValue={element.gains.currecies[index].currency}
                                            name={`clothes.${index}`}
                                            placeholder='No currencies'
                                            onSave={handleSave}
                                            showEditButton
                                            editButtonProps={transparentEditBtnProps}
                                        />
                                    ))
                                    : <p>No data</p>
                            }

                        </div>
                    </div>

                </fieldset>

                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success notika-btn-success" onClick={handleSubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
