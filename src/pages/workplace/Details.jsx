import { useEffect, useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-edit-text/dist/index.css'
import { wps } from '../../data/mocks'

import moment from 'moment'
moment.suppressDeprecationWarnings = true

export const Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [element, setElement] = useState({})

    useEffect(() => {
        let finded = wps.find(el => el.id === params.id)
        if (!finded) {
            navigate('/error', { replace: true })
        }
        setElement(finded)
    }, [navigate, params])

    const transparentEditBtnProps = { style: { background: 'transparent' } }

    const handleSave = ({ name, value, prevValue }) => {
        if (value !== prevValue) {
            let isDate = moment(value)
            if (isDate.isValid()) {
                value = isDate.toDate()
            }
            element[name] = value
        }
    }

    const handleSubmit = (e) => {
        console.log(element)
    }


    return (
        <div>
            <h3>
                <EditText
                    name='name'
                    defaultValue={element.name}
                    placeholder='Name empty'
                    onSave={handleSave}
                    showEditButton
                    editButtonProps={transparentEditBtnProps}
                />
            </h3>
            <hr />

            <div className="details-box">
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Direction: </b>
                    </div>
                    <div className="col-sm-10">
                        <EditText
                            name='direction'
                            defaultValue={element.direction}
                            placeholder='Direction empty'
                            onSave={handleSave}
                            showEditButton
                            editButtonProps={transparentEditBtnProps}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Contract Date: </b>
                    </div>
                    <div className="col-sm-10">
                        <EditText
                            type='date'
                            name='contract_from'
                            defaultValue={moment(element.contract_from).format('yyyy-MM-DD')}
                            placeholder='Date empty'
                            onSave={handleSave}
                            showEditButton
                            editButtonProps={transparentEditBtnProps}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <b>End Contract Date: </b>
                    </div>
                    <div className="col-sm-10">
                        {console.log(element.contract_to)}
                        <EditText
                            type='date'
                            name='contract_to'
                            defaultValue={element.contract_to ? moment(element.contract_to).format('yyyy-MM-DD') : undefined}
                            placeholder='Date empty'
                            onSave={handleSave}
                            showEditButton
                            editButtonProps={transparentEditBtnProps}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-success notika-btn-success" onClick={handleSubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
