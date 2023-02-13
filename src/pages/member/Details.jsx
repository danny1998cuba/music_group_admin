import { useEffect, useState } from 'react'
import { EditText, EditTextarea } from 'react-edit-text'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-edit-text/dist/index.css'

import { data } from '../../data/mocks'

import moment from 'moment'
moment.suppressDeprecationWarnings = true

export const Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [element, setElement] = useState({})

    useEffect(() => {
        let finded = data.members.find(el => el.id === params.id)
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
                    name='first_name'
                    defaultValue={element.first_name}
                    placeholder='First name empty'
                    onSave={handleSave}
                    inline
                />
                &nbsp;
                <EditText
                    name='last_name'
                    defaultValue={element.last_name}
                    placeholder='Last name empty'
                    onSave={handleSave}
                    inline
                />
            </h3>
            <h4>
                <EditText
                    name='position'
                    defaultValue={element.position}
                    placeholder='Position empty'
                    onSave={handleSave}
                    showEditButton
                    editButtonProps={transparentEditBtnProps}
                />
            </h4>
            <hr />

            <div className="details-box">
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Identification: </b>
                    </div>
                    <div className="col-sm-10">
                        <EditText
                            name='identification'
                            defaultValue={element.identification}
                            placeholder='Identification empty'
                            onSave={handleSave}
                            showEditButton
                            editButtonProps={transparentEditBtnProps}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-2">
                        <b>Birth date: </b>
                    </div>
                    <div className="col-sm-10">
                        <EditText
                            type='date'
                            name='birth_date'
                            defaultValue={moment(element.birth_date).format('yyyy-MM-DD')}
                            placeholder='Birth date empty'
                            onSave={handleSave}
                            showEditButton
                            editButtonProps={transparentEditBtnProps}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col col-sm-2">
                        <b>Sex: </b>
                    </div>
                    <div className="col-sm-10">
                        <EditText
                            name='sex'
                            defaultValue={element.sex === 'm' ? 'Male' : 'Female'}
                            placeholder='Sex empty'
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
